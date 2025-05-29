<script lang="ts">
  import chaos from "$lib/assets/chaos.png";
  import playButton from "$lib/assets/triangle.svg"
  import death from "$lib/assets/death.png";
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  import { currentWeek, hideUI, selectedWeek } from "$lib/store";
  let reveal = false;
  let revealLeft = false;
  let revealRight = false;
  let show = false;
  onMount(()=> {
    setTimeout(()=> {
      show = true
    }, 500)
})
</script>

{#if $selectedWeek === 8 && !$hideUI}
<div
  in:fade out:fade
  class="z-0 p-20 bg-black/10 backdrop-blur-sm rounded-md fixed left-0 top-0 w-screen h-screen flex flex-col gap-2 justify-center items-center">
  
  <span class="text-4xl">FINALE</span>

  <div class="flex h-24 gap-2 justify-center items-center">
    {#if show}
    <div class="relative">
  {#if !revealLeft}
      <button in:fade on:click={()=> revealLeft = true } class="z-10 absolute inset-0 flex items-center justify-center">
        REVEAL
      </button>
      {/if}
      <div class={`z-0 bg-black/50 rounded-lg ${revealLeft ? "" : "blur-md"}`}>
        <div class={
          `flex ${revealLeft ? "bg-[#FE0100]/20" : "bg-[#221F1F]"} px-4 rounded-lg items-center gap-2 text-3xl`
          }
          in:slide={{axis: "x"}} out:slide={{axis: "x"}}>
          <div class={`h-20 flex items-center`}><div>CHAOS</div></div>
          <img class="" alt={"chaos"} src={chaos} />
        </div>
      </div>
    </div>
    {/if}
    <span class="bg-white/10 rounded-full text-lg flex justify-center items-center w-10 h-10">
      <div class="pt-1">VS</div>
    </span>
    {#if show}
      <div class="relative">

  {#if !revealRight}
      <button in:fade on:click={()=> revealRight = true } class="z-10 absolute inset-0 flex items-center justify-center">
        REVEAL
      </button>
      {/if}
      <div class={`bg-black/50 rounded-lg ${revealRight ? "" : "blur-md"}`}>
        <div class={
          `flex ${revealRight ? "bg-[#7200FF]/20" : "bg-[#221F1F]"} px-4 rounded-lg items-center gap-2 text-3xl`
          }
          in:slide={{axis: "x"}} out:slide={{axis: "x"}}>
          <img class="" alt={"death"} src={death} />
          <div class={`h-20 flex items-center`}><div>DEATH</div></div>
        </div>
      </div>
    </div>
    {/if}
  </div>
  
  <div in:fade class={`${revealLeft && revealRight ? "" : "!opacity-40 blur-[14px]"} opacity-100 duration-500 transition-opacity rounded-xl shadow-lg overflow-hidden relative h-[220px] w-[380px] bg-red-400 border-1 border-white shadow`}>
    {#if revealLeft && revealRight}
    <a target="_blank" class="group h-[220px] w-[380px] overflow-hidden rounded-md" href={`https://www.youtube.com/watch?v=${"CJInNEa_HJA"}`}>
      <img alt="Battle Report Thumbnail" class={`absfolute left-1/2 top-1/2 -translfate-x-1/4 -translate-y-[16px]`} src={`https://img.youtube.com/vi/${"CJInNEa_HJA"}/0.jpg`}>
      <img src={playButton} alt="Play Video" class="absolute animate-pulse hover:opacity-80 contrast-200 brightness-200 left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/4" />
    </a>
    {:else}
    <div class="group h-[220px] w-[380px] overflow-hidden rounded-md">
      <img alt="Battle Report Thumbnail" class={`absfolute left-1/2 top-1/2 -translfate-x-1/4 -translate-y-[16px]`} src={`https://img.youtube.com/vi/${"CJInNEa_HJA"}/0.jpg`}>
      <img src={playButton} alt="Play Video" class="absolute animate-pulse hover:opacity-80 contrast-200 brightness-200 left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/4" />
    </div>
    {/if}
  </div>
</div>
{/if}