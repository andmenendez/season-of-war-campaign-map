<script lang='ts'>
  import { onMount } from 'svelte';
  import '../app.css';
  import 'leaflet/dist/leaflet.css';
  let { children} = $props();
  console.log("Layout loaded");
  
  onMount(()=> {
    console.log("Layout mounted");
  })
</script>
<svelte:head>
  <title>Season of War ~ 2025 Narrative Campaign</title>
  <link rel="canonical" href="https://seasonofwar.com/" />
  <meta property="og:site_name" content={"Season of War ~ 2025 Narrative Campaign"} />
  <meta property="og:type" content={'website'} />
  <meta property="og:title" content={"Season of War ~ 2025 Narrative Campaign"} />
  <meta property="og:description" content={"Season of War 2025 Narrative Campaign Series"} />
  <meta property="og:image" content={"https://seo-opengraph-images.s3.us-east-1.amazonaws.com/preview.png"} />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="418" />
  <meta property="og:image:alt" content={"Season of War "} />
  <meta property="og:image:type"content=".png" />

  <meta property="twitter:domain" content="https://season-of-war-campaign-map.vercel.app/" />
  <meta property="twitter:url" content="https://season-of-war-campaign-map.vercel.app/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="https://season-of-war-campaign-map.vercel.app/" />
  <meta name="twitter:creator" content="@Season_of_War" />
  <meta name="twitter:title" content="Season of War ~ 2025 Narrative Campaign" />
  <meta property="twitter:title" content="Season of War ~ 2025 Narrative Campaign">
  <meta name="twitter:description" content="Season of War 2025 Narrative Campaign Series" />
  <meta property="twitter:description" content="Season of War 2025 Narrative Campaign Series">
  <meta name="twitter:image:src" content={"https://seo-opengraph-images.s3.us-east-1.amazonaws.com/preview.png"}  />
  <meta name="twitter:image:alt" content="Season of War ~ 2025 Narrative Campaign" />
  <meta property="twitter:image" content={"https://seo-opengraph-images.s3.us-east-1.amazonaws.com/preview.png"} >
  <meta name="twitter:image" content={"https://seo-opengraph-images.s3.us-east-1.amazonaws.com/preview.png"} />
</svelte:head>

{@render children()}