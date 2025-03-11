<script lang="ts">
// import Map from '$lib/components/map.svelte';
import "../app.css"
import sowTitle from "$lib/assets/sow-loading.png";
import { sleep } from "$lib/utlils";
import { onMount } from "svelte";
  import { fade } from "svelte/transition";

let loading = true;
let Map: any;

onMount(async () => {
  await sleep(1000); // simulate network delay
  // if (window) {
  Map = (await import("$lib/components/map.svelte")).default;
  loading = false;
  // }
});
</script>

<style>
  /* @import "../app.css"; */
</style>

<div class="text-sm bg-red flex flex-col w-full">
  {#if Map && !loading}
    <div in:fade>
      <svelte:component this={Map}></svelte:component>
    </div>
  {:else}
  <!-- <img src={sowTitle} alt="Season of War" class="w-32" /> -->
    <div out:fade class="text-white text-xl fixed top-1/2 left-0 justify-center w-full -translate-y-1/2 flex flex-col items-center gap-2">
      <div class="border-white rounded-full border-2 !border-b-0 animate-spin min-w-12 min-h-12 w-12 h-12 grid"></div>
      Loading
    </div>
  {/if}
</div>
