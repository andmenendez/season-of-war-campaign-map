<script lang="ts">
  import { hideSpoilers, hideConflict, debugUI } from "$lib/store";


</script>
<div class="flex flex-col gap-1 shrink-0 my-2">
  <button 
    class="flex items-center gap-2 whitespace-nowrap w-fit" 
    onclick={ ()=> hideSpoilers.update(b => !b)}
  >
    {#if $hideSpoilers}
    <div class="w-4 h-4 border-1 rounded-sm border-white bg-white"></div>
    {:else}
    <div class="w-4 h-4 border-1 rounded-sm border-white"></div>
    {/if}
    <span class="whitespace-nowrap h-5">Hide Spoilers</span>
  </button>
  <button 
    class="flex items-center gap-2 whitespace-nowrap w-fit" 
    onclick={ ()=> hideConflict.update(b => !b)}
  >
    {#if $hideConflict}
    <div class="w-4 h-4 border-1 rounded-sm border-white bg-white"></div>
    {:else}
    <div class="w-4 h-4 border-1 rounded-sm border-white"></div>
    {/if}
    <span class="whitespace-nowrap h-5">Hide Conflicts</span>
  </button>
  <button 
    class="flex items-center gap-2 whitespace-nowrap w-fit" 
    onclick={ ()=> debugUI.update(b => !b)}
  >
    {#if $debugUI}
    <div class="w-4 h-4 border-1 rounded-sm border-white bg-white"></div>
    {:else}
    <div class="w-4 h-4 border-1 rounded-sm border-white"></div>
    {/if}
    <span class="whitespace-nowrap h-5">Debug UI</span>
  </button>
</div>