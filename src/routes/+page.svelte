<script lang="ts">
  import "../app.css"
  import { sleep } from "$lib/utlils";
  import { onMount } from "svelte";
  import MapDataLoader from "$lib/components/MapDataLoader.svelte";
  import MapWrapper from "$lib/components/MapWrapper.svelte";
  
  let { data } = $props();
  let loading : boolean = $state(true);
  let Map: any = $state(null);
  
  onMount(async () => {
    await sleep(50);
    Map = (await import("$lib/components/map.svelte")).default;
    loading = false;
  });
  
  // <!-- meow 🐈‍⬛ hiss hiss moeeowwwww tuna  -->
  </script>
  <MapWrapper />
  {#await data.streamed.data}
    <div></div>
  {:then data}
      <MapDataLoader data={data} />
  {:catch}
    <div>error</div>
  {/await}

  
  
  <style>
  </style>