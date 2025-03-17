<script lang="ts">
  import { onMount } from "svelte";
  import sowTitle from "$lib/assets/sow-loading.png";
  import chevronLeft from "$lib/assets/triangle-left.svg";
  import youtube from "$lib/assets/socials/youtube.png";
  import discord from "$lib/assets/socials/discord.png";
  import { fade } from "svelte/transition";
  import type { PageData } from "./$types";
  import { currentWeek } from "$lib/store";

  
  let layoutProps = $props();
  const {response, data}: PageData = layoutProps.data;
  let selectedWeek = $state(data.week);
  const podium: any[] = [];
</script>


<a href="/" class="z-50 flex gap-2 items-center top-0 left-8 p-1 text-xs mx-2 mt-2 uppercase hover:brightness-125">
  <img src={chevronLeft} class="w-3 h-3 pb-[2px]" alt="Chevron Left"/>
  Return to Map
</a>
<div in:fade={{delay:250}} class="z-0 flexcol-to-grid hide-overflow-on-desktop grid grid-cols-12 gap-4 px-4 pb-4 h-full min-h-[700px] place-items-stretch max-h-screen">
  <div class="inset-0 flex flex-col col-span-8 gap-4">
  <div class="flex flex-col gap-2">

    <div class="flexcol-to-row flex flex-row w-full justify-between items-center py-2">
      <div in:fade out:fade class="z-10 flex items-center w-fit shrink-0 gap-4">
        <div class="flex brightness-110 contrast-125 flex-col rounded-md overflow-hidden title -ml-5">
          <a href="https://www.youtube.com/seasonofwar" class="shrink-0 group bg-gradient-to-b from-black to-black/0 shadow-sm">
            <img style="height: 102px" class="group-hover:opacity-90 opacity-80 transition-opacity" src={sowTitle} alt="Season of War" />
          </a>
        </div>
      </div>
      <div class="subtitle">
        <a class="opacity-100 hover:opacity-100 flex gap-1 transition-opacity" href="https://www.youtube.com/seasonofwar"><img class="h-5" alt="discord" src={discord}/>Community</a>
        <a class="opacity-100 hover:opacity-100 flex gap-1 transition-opacity" href="https://www.youtube.com/seasonofwar"><img class="h-5" alt="youtube" src={youtube}/>More Battle Reports</a>
      </div>
    </div>
    <div class="flex w-full pt-2">
      <div class="pr-4">Week:</div>
      <button onclick={()=>selectedWeek = 1} 
        disabled={1 > $currentWeek}
        class={`w-full border-1 border-white/30 ${selectedWeek === 1 ? "bg-white/30" : ""} ${1 > $currentWeek ? "opacity-10": ""}`}
      >
        1
      </button>
      <button onclick={()=>selectedWeek = 2} 
        disabled={2 > $currentWeek}
        class={`w-full border-1 border-white/30 ${selectedWeek === 2 ? "bg-white/30" : ""} ${2 > $currentWeek ? "opacity-10": ""}`}
      >
        2
      </button>
      <button onclick={()=>selectedWeek = 3} 
        disabled={3 > $currentWeek}
        class={`w-full border-1 border-white/30 ${selectedWeek === 3 ? "bg-white/30" : ""} ${3 > $currentWeek ? "opacity-10": ""}`}
      >
        3
      </button>
      <button onclick={()=>selectedWeek = 4} 
        disabled={4 > $currentWeek}
        class={`w-full border-1 border-white/30 ${selectedWeek === 4 ? "bg-white/30" : ""} ${4 > $currentWeek ? "opacity-10": ""}`}
      >
        4
      </button>
      <button onclick={()=>selectedWeek = 5} 
        disabled={5 > $currentWeek}
        class={`w-full border-1 border-white/30 ${selectedWeek === 5 ? "bg-white/30" : ""} ${5 > $currentWeek ? "opacity-10": ""}`}
      >
        5
      </button>
      <button onclick={()=>selectedWeek = 6} 
        disabled={6 > $currentWeek}
        class={`w-full border-1 border-white/30 ${selectedWeek === 6 ? "bg-white/30" : ""} ${6 > $currentWeek ? "opacity-10": ""}`}
      >
        6
      </button>
      <button onclick={()=>selectedWeek = 7} 
        disabled={7 > $currentWeek}
        class={`w-full border-1 border-white/30 ${selectedWeek === 7 ? "bg-white/30" : ""} ${7 > $currentWeek ? "opacity-10": ""}`}
      >
        7
      </button>
      <button onclick={()=>selectedWeek = 8} 
        disabled={8 > $currentWeek}
        class={`w-full border-1 border-white/30 ${selectedWeek === 8 ? "bg-white/30" : ""} ${8 > $currentWeek ? "opacity-10": ""}`}
      >
        8
      </button>
    </div>
    </div>

    <div class="section w-full grow">
      <h3>Rules</h3>
        <div class="grid-cols-2 gap-4">
          <div class="flex flex-col gap-4">
            
            <div>1. Every week bet on your favored Faction and Grand Alliance</div>
            <div>2. At the end of every week each faction's territory will grow or shrink</div>
          </div>
          <div class="flex flex-col gap-4">
            <div>3. After 8 weeks</div>
            <div>4. Top performing winners get the prizes! </div>
          </div>
        </div>

    </div>
    <div class="section w-full h-fit shrink-0">
      <h3>Weekly Podium</h3>
        <div class="grid podium-wrapper py-2 min-h-12">
          {#each Object.keys(data.scores).sort(
            (p1,p2)=>{
              const p1Score = data.scores[p1][selectedWeek];
              const p2Score = data.scores[p2][selectedWeek];
            return p1Score > p2Score ? -1 : 1;
            }
          ) as user, i}
            {#if i === 1}
              <div in:fade class="podium first">
                <div class="score-plate grid grid-cols-1 place-items-center bg-orange-300">1</div>
                {user}
              </div>
            {/if}
            {#if i === 2}
              <div in:fade class="podium second">
                <div class="score-plate grid grid-cols-1 place-items-center bg-slate-300">2</div>
                {user}
              </div>
            {/if}
            {#if i === 3}
              <div in:fade class="podium third">
                <div class="score-plate grid grid-cols-1 place-items-center bg-yellow-700">3</div>
                {user}
              </div>
            {/if}
          {/each}
        </div>
    </div>
  </div>



  <div class="col-span-4 flex column-2 gap-4">
    <div class="section flex flex-col h-full grow w-full overflow-hidden">
      <h3>Leaderboard</h3>
      <div class="relative h-full flex flex-col max-h-full overflow-scroll">
        <div class="absolute-on-desktop h-full w-full overflow-scroll">
          {#each Object.keys(data.scores).sort(
            (p1,p2)=>{
              const p1Score = Object.keys(data.scores[p1]).reduce((agg, weekToScore)=> {
                if (parseInt(weekToScore) <= selectedWeek) {
                  return agg + data.scores[p1][weekToScore];
                } 
                return agg;
              }, 0)
              const p2Score = Object.keys(data.scores[p2]).reduce((agg, weekToScore)=> {
                if (parseInt(weekToScore) <= selectedWeek) {
                  return agg + data.scores[p2][weekToScore];
                } 
                return agg;
              }, 0)
            return p1Score > p2Score ? -1 : 1;
            }
          ) as user}
            <div class="grid grid-cols-3">
              <div class="col-span-2">
                {user}
              </div>
              <div class="col-span-1 text-end text-3xl -my-1">
                {Object.keys(data.scores[user]).reduce((agg, weekToScore)=> {
                  if (parseInt(weekToScore) <= selectedWeek) {
                    return agg + parseInt(`${data.scores[user][`${weekToScore}`]}`);
                  } 
                  return agg;
                }, 0)}
              </div>
            </div>
          {/each}
        </div>
    </div>
    </div>
    <div class="section flex flex-col gap-1">
      <h3>Prizes</h3>
        <ol class="flex flex-col gap-1 border-t-1 pt-3 border-white/10">
          <li>1. A piece of Ridge's Lilac shirt</li>
          <li>2. Jordan will not lose a priority role for you</li>
          <li>3. All inclusive cruise 30 day vaction across the world</li>
          <li>4. Private Jet worth $500,000</li>
          <li>5. Limited Edition Hot wheels basball cap</li>
        </ol>
    </div>
  </div>

</div>

<style>
  h3 {
    font-size: 32px;
    margin: 0 !important;
  }
  .podium-wrapper {
      grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .podium {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: start;
  }
  .score-plate {
    border-radius: 4px;
    width: 24px;
    height: 24px;
    transform: translateY(-2px);
  }
  .score-plate:last-child {
    padding-bottom: 4px;
  }

  .hide-overflow-on-desktop {
    overflow: visible;
  }
  .flexcol-to-grid {
    display: flex !important;
    flex-direction: column;
  }
  .flexcol-to-row {
    display: flex !important;
    flex-direction: column;
  }
  .absolute-on-desktop {
    position: block;
  }
  .column-2 {
    flex-direction: column-reverse;
  }

  .title {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  .subtitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5 rem;
  }
  @media only screen and (min-width: 640px) {
  .title {
    margin-top: -1.5rem;
    margin-bottom: -1.5rem;
  }
  .subtitle {
    align-items: end;
  }
  .column-2 {
    flex-direction: column;
  }
  .absolute-on-desktop {
    position: absolute;
  }
  .flexcol-to-grid {
    display: grid !important;
  }
  .flexcol-to-row {
    display: flex;
    flex-direction: row;
  }
  .hide-overflow-on-desktop {
    overflow: hidden;
  }
  .podium-wrapper {
      grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
  .section {
    z-index: 5;
    background-color: rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 24px 32px;
    border: 1px solid rgba(255,255,255,0.3);
  }
</style>