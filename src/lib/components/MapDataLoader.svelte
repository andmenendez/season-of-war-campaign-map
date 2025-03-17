<script lang="ts">
  import { currentWeek, loadingData, territories } from "$lib/store";
  import { onMount } from "svelte";

  let { data } = $props();
  loadingData.set(false)
  console.log("!!!")
  console.log(data);
  
  onMount(()=> {
    if (data.week) {
      currentWeek.set(data.week);
      console.log("currentWeek set!")
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