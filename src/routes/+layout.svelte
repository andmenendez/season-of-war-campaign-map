<script>
	import GASelector from './../lib/components/GASelector.svelte';
  import '../app.css';
  import 'leaflet/dist/leaflet.css';
  import sowTitle from "$lib/assets/sow-title.png";
  import Timeline from '$lib/components/timeline.svelte';
  import ContextBanner from '$lib/components/ContextBanner.svelte';
  import MapOptions from '$lib/components/MapOptions.svelte';
  let { children } = $props();

</script>
{@render children()}
<div class="fixed top-0 left-0 w-full flex justify-between items-start">
  <div class="flex gap-2 items-start">
    <a href="https://www.youtube.com/seasonofwar" class="mx-4 shrink-0 group bg-gradient-to-b from-black to-black/0 shadow-sm"><img style="height: 64px" class="group-hover:opacity-90 opacity-80 transition-opacity" src={sowTitle} alt="Season of War" /></a>
    <MapOptions />
  </div>
  <div class="translate-y-1 flex justify-end items-center w-full">
    <Timeline />
  </div>
</div>
<div class="fixed bottom-0 left-0 w-screen flex justify-between">
  <ContextBanner />
  <GASelector />
</div>