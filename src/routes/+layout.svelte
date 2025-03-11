<script>
  import '../app.css';
  import 'leaflet/dist/leaflet.css';
  import preview from "$lib/assets/preview.png"
  let { children } = $props();
</script>
<svelte:head>
  <meta property="og:site_name" content={"Season of War ~ 2025 Narrative Campaign"} />
   <!-- <meta property="og:url" content={siteUrl} /> -->
   <meta property="og:type" content={'website'} />
   <meta property="og:title" content={"Season of War ~ 2025 Narrative Campaign"} />
   <meta property="og:description" content={"Season of War 2025 Narrative Campaign Series"} />
   <meta property="og:image" content={preview} />
   <meta property="og:image:width" content="1200" />
   <meta property="og:image:height" content="627" />
   <meta property="og:image:alt" content={"Season of War "} />
  </svelte:head>
{@render children()}