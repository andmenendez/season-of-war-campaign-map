<script lang="ts">
  import { currentWeek, hideSpoilers, loadingData, selectedWeek, territories } from "$lib/store";
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
    console.log(data);
    if (data.week) {
      currentWeek.set(data.week);

      if (window.localStorage.getItem("cached-week")) {
        selectedWeek.set(parseInt(window.localStorage.getItem("cached-week")!))
      }
    }
    if (window.localStorage.getItem("cached-spoilers")) {
      console.log(window.localStorage.getItem("cached-spoilers"))
      hideSpoilers.set(window.localStorage.getItem("cached-spoilers") === "true" ? false : true)
    }

    try {
      data.territories.forEach((territory: { id: number; owner: any; attacker: any; videoLinks: any; })=> {
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