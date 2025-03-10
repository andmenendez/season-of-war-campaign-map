<script lang="ts">
  import { contextBanner, type ContextBannerType  } from "$lib/store";
  import GrandAllianceCrest from "./GrandAllianceCrest.svelte";
</script>

<div class="ml-2 flex flex-col gap-2">
  {#if contextBanner !== null}
    <div class="flex flex-row items-center gap-2">
      <GrandAllianceCrest ga={$contextBanner?.owner}/>
      <div class="text-3xl">{$contextBanner?.territory}</div>
    </div>
    <div class="flex flex-row items-center gap-1">
      {#each ($contextBanner as ContextBannerType).properties as prop, i}
        <div class="uppercase">{prop}
          {#if i < ($contextBanner as ContextBannerType).properties.length - 1}
        |
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>