<script lang="ts">
  import { currentWeek, loadingData, territories } from "$lib/store";
  import type { GAType } from "$lib/territories";
  import { onMount } from "svelte";

  let { data } = $props();
  
  type StructuredData = {
    week: number;
    territories: {
      id: number;
      owner: GAType[];
      attacker: GAType[];
      videoLinks: string[];
    }[];
  };


  onMount(()=> {
    loadingData.set(false)
    let structuredData: StructuredData = {
      week: 0,
      territories: [],
    };

    const territoryDataResponse = [...data].slice(2+1, 17+2);
    const attackersDataResponse = [...data].slice(21+1, 36+2);
    const linksDataResponse = [...data].slice(41, 55+2);

    structuredData = {
      ...structuredData,
      week: parseInt(`${data[0][0]}`),
      territories: Array.from(
        Array(territoryDataResponse.length)
      ).map((_, i) => {
        return {
          id: i + 1,
          owner: territoryDataResponse[i],
          attacker: attackersDataResponse[i],
          videoLinks: linksDataResponse[i],
        };
      }),
    };
    if (structuredData.week) {
      currentWeek.set(structuredData.week);
    }
    try {
      structuredData.territories.forEach((territory: { id: number; owner: any; attacker: any; videoLinks: any; })=> {
        territories.update((ts)=> {
          const targetTerritory = ts.find(t=> t.id === territory.id);
          if (!targetTerritory) {
            return ts;
          }
          return [
            ...ts.filter(t => t.id !== territory.id),
            {
              ...targetTerritory,
              owner: territory.owner,
              attacker:territory.attacker,
              videoLinks:territory.videoLinks,
            }
          ]
        })
      })
    } catch (e) {
      console.error(e);
    }
  })
</script>