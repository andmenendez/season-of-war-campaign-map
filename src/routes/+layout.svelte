<script lang='ts'>
  import type { PageData } from './$types';
	import { currentWeek, loadingData, territories } from './../lib/store';
  import sowTitleLoading from "$lib/assets/sow-loading.png";
  import '../app.css';
  import 'leaflet/dist/leaflet.css';
  import preview from "$lib/assets/preview.png"
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import MapDataLoader from '$lib/components/MapDataLoader.svelte';
  
  let { children, data} = $props();
</script>
<svelte:head>
  <link rel="canonical" href="https://seasonofwar.com/" />

  <meta property="og:site_name" content={"Season of War ~ 2025 Narrative Campaign"} />
  <meta property="og:type" content={'website'} />
  <meta property="og:title" content={"Season of War ~ 2025 Narrative Campaign"} />
  <meta property="og:description" content={"Season of War 2025 Narrative Campaign Series"} />
  <meta property="og:image" content={preview} />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="418" />
  <meta property="og:image:alt" content={"Season of War "} />
  <meta property="og:image:type"content=".png" />

  <meta property="twitter:domain" content="https://season-of-war-campaign-map.vercel.app/" />
  <meta property="twitter:url" content="https://season-of-war-campaign-map.vercel.app/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="https://season-of-war-campaign-map.vercel.app/" />
  <meta name="twitter:creator" content="@Season_of_War" />
  <meta name="twitter:title" content="Season of War ~ 2025 Narrative Campaign" />
  <meta name="twitter:description" content="Calculating crypto taxes can be complicated. Let us simplify your accounting. Save countless hours with Cartera: Built for an evolving crypto world." />
  <meta name="twitter:image:src"  content={preview}  />
  <meta name="twitter:image:alt" content="Season of War ~ 2025 Narrative Campaign" />
  <meta name="twitter:image"  content={preview}  />
</svelte:head>

{#await data.streamed.data}
<div in:fade out:fade class="text-white text-xl fixed top-1/2 left-0 justify-center w-full -translate-y-1/2 flex flex-col items-center gap-2">
  <img alt="Season of War - Loading" src={sowTitleLoading} class="h-20 mt-10" />
  <div class="border-white rounded-full border-2 !border-b-0 animate-spin min-w-12 min-h-12 w-12 h-12 grid"></div>
  <div class="h-20 mt-7">Loading Data</div>
</div>
{:then data}
  <MapDataLoader data={data} />
  {@render children()}
{:catch}
  <div>error</div>
{/await}
