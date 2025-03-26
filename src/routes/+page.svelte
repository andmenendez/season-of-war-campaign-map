<script lang="ts">
  import sowTitle from "$lib/assets/sow-title.png";
  import sowTitleLoading from "$lib/assets/sow-loading.png";
  import youtube from "$lib/assets/socials/youtube.png";
  import discord from "$lib/assets/socials/discord.png";
  import ContextBanner from '$lib/components/ContextBanner.svelte';
  import MapOptions from '$lib/components/MapOptions.svelte';
  import { hideUI,} from '$lib/store';
  import { fade, slide } from 'svelte/transition';
  import "../app.css"
  import { sleep } from "$lib/utlils";
  import { onMount } from "svelte";
  import LoadingBar from "$lib/components/LoadingBar.svelte";
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