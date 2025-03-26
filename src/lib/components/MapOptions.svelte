<script lang="ts">
  import { hideSpoilers, hideConflict, hideUI } from "$lib/store";


</script>
<div class="flex flex-col gap-0 shrink-0 my-1 text-sm">
  <button 
    class="flex items-center gap-2 whitespace-nowrap w-fit" 
    onclick={ ()=> hideSpoilers.update(b => !b)}
  >
    {#if !$hideSpoilers}
    <div class="box border-1 rounded-sm border-white bg-white"></div>
    {:else}
    <div class="box border-1 rounded-sm border-white"></div>
    {/if}
    <span class="whitespace-nowrap h-5">Show Spoilers</span>
  </button>
  <button 
    class="flex items-center gap-2 whitespace-nowrap w-fit" 
    onclick={ ()=> hideConflict.update(b => !b)}
  >
    {#if $hideConflict}
    <div class="box border-1 rounded-sm border-white bg-white"></div>
    {:else}
    <div class="box border-1 rounded-sm border-white"></div>
    {/if}
    <span class="whitespace-nowrap h-5">Hide Conflicts</span>
  </button>
  <button 
    class="flex items-center gap-2 whitespace-nowrap w-fit" 
    onclick={ ()=> hideUI.update(b => !b)}
  >
    {#if $hideUI}
    <div class="box border-1 rounded-sm border-white bg-white"></div>
    {:else}
    <div class="box border-1 rounded-sm border-white"></div>
    {/if}
    <span class="whitespace-nowrap h-5">Hide UI</span>
  </button>
</div>

<style>
  .box {
    width: 12px;
    height: 12px;
  }

  @media only screen and (min-width: 640px) {
  }
</style>