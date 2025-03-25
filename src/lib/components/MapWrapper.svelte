<script lang="ts">
  import sowTitle from "$lib/assets/sow-title.png";
  import sowTitleLoading from "$lib/assets/sow-loading.png";
  import youtube from "$lib/assets/socials/youtube.png";
  import discord from "$lib/assets/socials/discord.png";
  import GASelector from './GASelector.svelte';
  import Timeline from '$lib/components/timeline.svelte';
  import ContextBanner from '$lib/components/ContextBanner.svelte';
  import MapOptions from '$lib/components/MapOptions.svelte';
  import { hideUI, loadingData,} from '$lib/store';
  import { fade, slide } from 'svelte/transition';
  import "../../app.css";
  import { sleep } from "$lib/utlils";
  import { onMount } from "svelte";
  
  let loading : boolean = $state(true);
  let Map: any = $state(null);
  
  onMount(async () => {
    await sleep(50);
    Map = (await import("$lib/components/CampaignMap.svelte")).default;
    loading = false;
  });
  
  </script>
  
  <div class="z-10 fixed top-0 left-0 w-full flex-col-to-row flex-col justify-between items-start">

    <div in:fade class="z-10 flex items-start w-fit shrink-0 gap-4 mx-4">
      <div class="flex flex-col">
        <a href="https://www.youtube.com/seasonofwar" class=" shrink-0 group bg-gradient-to-b from-black to-black/0 shadow-sm"><img style="height: 64px" class="group-hover:opacity-90 opacity-80 transition-opacity" src={sowTitle} alt="Season of War" /></a>
        {#if !loading.valueOf()}
          <div in:fade out:fade class="hide-on-mobile flex flex-row justify-center items-center py-[1px] gap-2">
            <a class="opacity-100 bg-black/30 rounded-sm px-1 hover:opacity-100 text-[.5rem] flex gap-1 transition-opacity" href="https://www.youtube.com/seasonofwar"><img class="h-3" alt="discord" src={discord}/>Community</a>
            <a class="opacity-100 bg-black/30 rounded-sm px-1 hover:opacity-100 text-[.5rem] flex gap-1 transition-opacity" href="https://www.youtube.com/seasonofwar"><img class="h-3" alt="youtube" src={youtube}/>More Battle Reports</a>
          </div>
        {/if}
      </div>
        {#if !loading.valueOf()}
        <div in:fade out:fade >
          <MapOptions />
        </div>
        {/if}
      </div>
  
    {#if !$hideUI && !$loadingData}
      <div in:fade out:fade class="translate-y-2 flex justify-end items-center w-full">
        <Timeline />
      </div>
    {/if}
  
  </div>
  
  <div class="text-sm bg-red flex flex-col w-full">
    {#if Map && !loading}
      <div in:fade>
        <!-- svelte-ignore svelte_component_deprecated -->
        <svelte:component this={Map}></svelte:component>
      </div>
    {:else}
      <div in:slide={{axis: "y"}} out:slide={{axis: "y"}} 
      class="text-white text-xl fixed top-1/2 left-0 justify-center w-full -translate-y-1/2 flex flex-col items-center gap-2">
      <img alt="Season of War - Loading" src={sowTitleLoading} class="h-20 mt-10" />
      <div class="border-white rounded-full border-2 !border-b-0 animate-spin min-w-12 min-h-12 w-12 h-12 grid"></div>
      <div class="h-20 mt-7">Loading Map</div>
      </div>
      {/if}
  </div>
    
  {#if !$hideUI && !loading.valueOf()}
  <div in:fade out:fade class="z-10 fixed bottom-0 left-0 w-screen flex justify-between items-end px-2 pb-2">
    <ContextBanner />
    {#if !$hideUI && !$loadingData}
      <GASelector />
    {:else}
      <div
          in:slide={{axis: "y"}}
          out:fade
          class="absolute bottom-4 right-4 text-white justify-center flex items-center gap-2"
        >
        <div class="">Loading Data</div>
        <div class="border-white rounded-full border-2 !border-b-0 animate-spin min-w-6 min-h-6 w-6 h-6 grid"></div>
        </div>
      {/if}
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
    .hide-on-mobile {
      display: none;
    }
    @media only screen and (min-width: 640px) {
      .hide-on-mobile {
        display: flex;
      }
    }
  </style>