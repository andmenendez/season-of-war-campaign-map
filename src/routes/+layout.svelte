<script>
	import GASelector from './../lib/components/GASelector.svelte';
  import '../app.css';
  import 'leaflet/dist/leaflet.css';
  import sowTitle from "$lib/assets/sow-title.png";
  import Timeline from '$lib/components/timeline.svelte';
  import ContextBanner from '$lib/components/ContextBanner.svelte';
  import MapOptions from '$lib/components/MapOptions.svelte';
  import { hideUI } from '$lib/store';
  import { fade } from 'svelte/transition';
  let { children } = $props();

</script>
{@render children()}
<div class="fixed top-0 left-0 w-full flex-col-to-row flex-col justify-between items-start">
  <div class="flex items-start w-fit shrink-0 gap-4 mx-4">
    <a href="https://www.youtube.com/seasonofwar" class=" shrink-0 group bg-gradient-to-b from-black to-black/0 shadow-sm"><img style="height: 64px" class="group-hover:opacity-90 opacity-80 transition-opacity" src={sowTitle} alt="Season of War" /></a>
    <MapOptions />
  </div>
  {#if !$hideUI}
    <div in:fade out:fade class="translate-y-1 flex justify-end items-center w-full">
      <Timeline />
    </div>
    {/if}
</div>
{#if !$hideUI}
  <div in:fade out:fade class="fixed bottom-0 left-0 w-screen flex justify-between items-end px-2 pb-2">
    <ContextBanner />
    <GASelector />
  </div>
{/if}

<style>
  .flex-col-to-row {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 640px) {
    .flex-col-to-row {
      display: flex;
      flex-direction: row;
    }
  }
</style>