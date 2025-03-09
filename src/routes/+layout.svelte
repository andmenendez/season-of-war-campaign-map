<script>
	import GASelector from './../lib/components/GASelector.svelte';
  import '../app.css';
  import 'leaflet/dist/leaflet.css';
  import sowTitle from "$lib/assets/sow-title.png";
  import Timeline from '$lib/components/timeline.svelte';
  let { children } = $props();

</script>
{@render children()}
<div class="fixed top-0 left-0 w-full flex justify-between items-start">
  <a href="https://www.youtube.com/seasonofwar"><img style="height: 82px" src={sowTitle} alt="Season of War" /></a>
  <div class="translate-y-4 flex justify-end items-center w-full">
    <Timeline />
  </div>
</div>
<div class="fixed bottom-0 right-0">
  <GASelector />
</div>