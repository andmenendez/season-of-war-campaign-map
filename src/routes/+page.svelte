<script lang="ts">
  import sowTitleLoading from "$lib/assets/sow-loading.png";
  import '../app.css';
  import 'leaflet/dist/leaflet.css';
  import preview from "$lib/assets/preview.png"
  import { fade } from 'svelte/transition';
  import MapDataLoader from '$lib/components/MapDataLoader.svelte';
  import MapWrapper from "$lib/components/MapWrapper.svelte";

  let { data } = $props();
</script>

{#await data.streamed.data}
<div in:fade out:fade class="text-white text-xl fixed top-1/2 left-0 justify-center w-full -translate-y-1/2 flex flex-col items-center gap-2">
  <img alt="Season of War - Loading" src={sowTitleLoading} class="h-20 mt-10" />
  <div class="border-white rounded-full border-2 !border-b-0 animate-spin min-w-12 min-h-12 w-12 h-12 grid"></div>
  <div class="h-20 mt-7">Loading Data</div>
</div>
{:then data}
  <MapDataLoader data={data} />
  <MapWrapper />
{:catch}
<div>error</div>
{/await}

<div class="text-transparent">Season of War</div>