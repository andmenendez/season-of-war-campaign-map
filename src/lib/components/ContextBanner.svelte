<script lang="ts">
  import { contextBanner, hideSpoilers, type ContextBannerType  } from "$lib/store";
  import GrandAllianceCrest from "./GrandAllianceCrest.svelte";
  import combat from '$lib/assets/combat.svg';
  import { GA } from "$lib/territories";
</script>

<div class="flex flex-col gap-2 banner-hide-on-mobile">
  <div class="flex flex-row items-center gap-2">
    {#if $contextBanner.attacker}
    <GrandAllianceCrest ga={$contextBanner?.owner} />
    <img 
    class="w-6 h-6 animate-pulse"
    src={combat} 
    alt="Conflict"
    />
    <GrandAllianceCrest ga={$contextBanner.attacker}/>
    {:else}
      {#if $hideSpoilers}
        <GrandAllianceCrest ga={GA.None} />
      {:else}
        <GrandAllianceCrest ga={$contextBanner?.owner} />
      {/if}
    {/if}

    <div class="text-lg md:text-3xl">{$contextBanner?.territory}</div>
  </div>
  <div class="flex flex-row items-center gap-1">
    {#each ($contextBanner as ContextBannerType).properties as prop, i}
      <div class="uppercase">{prop}
        {#if i < ($contextBanner as ContextBannerType).properties.length - 1}
      |
        {/if}
      </div>
    {/each}
    {#if $contextBanner?.owner === "-"}
      <div class="uppercase text-invisible min-w-20 bg-white/10 animate-pulse rounded-md"><span class="opacity-0">|</span></div>
    {/if}
  </div>
</div>

<style>
  .banner-hide-on-mobile {
    display: none;
  }
  @media only screen and (min-width: 640px) {
    .banner-hide-on-mobile {
      display: flex;
    }
  }
</style>