<script lang="ts">
  import { onMount } from "svelte";
  import sowTitle from "$lib/assets/sow-loading.png";
  import chevronLeft from "$lib/assets/triangle-left.svg";
  import youtube from "$lib/assets/socials/youtube.png";
  import discord from "$lib/assets/socials/discord.png";
  import { fade } from "svelte/transition";
  import type { PageData } from "./$types";
  import { currentWeek } from "$lib/store";

  let {data} = $props();
  let selectedWeek = $state(0);

  $effect(()=> {
    if (selectedWeek === 0) {
      selectedWeek = $currentWeek
    }
  })
  const podium: any[] = [];
</script>

{#await data.streamed.data}
  <div in:fade out:fade class="text-white text-xl fixed top-1/2 left-0 justify-center w-full -translate-y-1/2 flex flex-col items-center gap-2">
    <div class="border-white rounded-full border-2 !border-b-0 animate-spin min-w-12 min-h-12 w-12 h-12 grid"></div>
    <div class="h-20 mt-7">Loading Leaderboard</div>
</div>
{:then data }
  <a href="/" class="z-50 flex w-full bg-black/10 hover:bg-black/25 rounded-sm p-2 gap-2 items-center top-0 left-8 text-xs uppercase hover:brightness-200">
    <img src={chevronLeft} class="w-3 h-3 pb-[2px]" alt="Chevron Left"/>
    Return to Map
  </a>
  <div class="flex flex-row items-center gap-4 w-full">
    <div class="flex flex-col gap-4 border-y-1 mb-3 border-white/30 py-4 w-full">
      <div class="flexcol-to-row items-center gap-4 w-full">
        <div class="flex flex-col gap-4 w-full">
          <div class="px-4 w-full">
            <h3>Hello & Welcome to Season of War!</h3>
            This 8-week Age of Sigmar campaign launches, featuring Mortal Realms factions battling across 16 territories for regional power. Each battle grants a Grand Alliance a unique Boon, culminating in a final playoff where alliances clash with consolidated forces and resources.
          </div>
          <div class="subtitle px-4 w-full">
            <div in:fade out:fade class="flex flex-row justify-start items-center py-[2px] gap-2">
              <a class="opacity-100 bg-black/30 rounded-sm px-1 hover:opacity-100 hover:bg-black/50 text-[.75rem] flex items-center gap-1 transition-opacity" href="https://www.youtube.com/seasonofwar"><img class="h-3" alt="discord" src={discord}/>Community</a>
              <a class="opacity-100 bg-black/30 rounded-sm px-1 hover:opacity-100 hover:bg-black/50 text-[.75rem] flex items-center gap-1 transition-opacity" href="https://www.youtube.com/seasonofwar"><img class="h-3" alt="youtube" src={youtube}/>More Battle Reports</a>
            </div>
          </div>
        </div>
        <a target="_blank" class="-my-2 group relative h-full overflow-hidden rounded-lg border-white/30 border-1 shadow-sm" href={`https://www.youtube.com/watch?v=47T3rCwyGuY`}>
          <img alt="Battle Report Thumbnail" class="h-full w-full ml-2 -mt-12 -mb-8 scale-105 rounded-md" src={`https://img.youtube.com/vi/47T3rCwyGuY/0.jpg`}>
        </a>
      </div>
    </div>
  </div>

  <div in:fade={{delay:50}} class="z-0 flexcol-to-grid hide-overflow-on-desktop grid grid-cols-12 gap-4 px-0 pb-4 h-full place-items-stretch">
    <div class="inset-0 flex flex-col col-span-8 gap-0">
    <div class="flex flex-col gap-2">
      <div class="hidden flex items-stretch w-full h-full week-selector">
        <div class="pr-4">Week:</div>
        <button onclick={()=>selectedWeek = 1} 
          disabled={1 > $currentWeek + 1}
          class={`rounded-l-lg w-full border-1 border-white/30 ${selectedWeek === 1 ? "bg-white/30 bg-yellow-500" : ""} ${1 > $currentWeek + 1 ? "opacity-50": ""}`}
        >
          1
        </button>
        <button onclick={()=>selectedWeek = 2} 
          disabled={2 > $currentWeek + 1}
          class={`w-full border-1 border-white/30 ${selectedWeek === 2 ? "bg-white/30 bg-yellow-500" : ""} ${2 > $currentWeek + 1 ? "opacity-50": ""}`}
        >
          2
        </button>
        <button onclick={()=>selectedWeek = 3} 
          disabled={3 > $currentWeek + 1}
          class={`w-full border-1 border-white/30 ${selectedWeek === 3 ? "bg-white/30 bg-yellow-500" : ""} ${3 > $currentWeek + 1 ? "opacity-50": ""}`}
        >
          3
        </button>
        <button onclick={()=>selectedWeek = 4} 
          disabled={4 > $currentWeek + 1}
          class={`w-full border-1 border-white/30 ${selectedWeek === 4 ? "bg-white/30 bg-yellow-500" : ""} ${4 > $currentWeek + 1 ? "opacity-50": ""}`}
        >
          4
        </button>
        <button onclick={()=>selectedWeek = 5} 
          disabled={5 > $currentWeek + 1}
          class={`w-full border-1 border-white/30 ${selectedWeek === 5 ? "bg-white/30 bg-yellow-500" : ""} ${5 > $currentWeek + 1 ? "opacity-50": ""}`}
        >
          5
        </button>
        <button onclick={()=>selectedWeek = 6} 
          disabled={6 > $currentWeek + 1}
          class={`w-full border-1 border-white/30 ${selectedWeek === 6 ? "bg-white/30 bg-yellow-500" : ""} ${6 > $currentWeek + 1 ? "opacity-50": ""}`}
        >
          6
        </button>
        <button onclick={()=>selectedWeek = 7} 
          disabled={7 > $currentWeek + 1}
          class={`w-full border-1 border-white/30 ${selectedWeek === 7 ? "bg-white/30 bg-yellow-500" : ""} ${7 > $currentWeek + 1 ? "opacity-50": ""}`}
        >
          7
        </button>
        <button onclick={()=>selectedWeek = 8} 
          disabled={8 > $currentWeek + 1}
          class={`rounded-r-lg w-full border-1 border-white/30 ${selectedWeek === 8 ? "bg-white/30 bg-yellow-500" : ""} ${8 > $currentWeek + 1 ? "opacity-50": ""}`}
        >
          8
        </button>
      </div>
      </div>

      <div class="section w-full grow">
        <h3 class="w-full border-b-1 border-white/10 !mb-2">Rules</h3>
          <div class="grid grid-cols-1 gap-2">
            <div class="flex flex-col gap-2">
              <div>1. Each weekly battle will be a standalone match play game.</div>
              <div>2. Each battle takes place in a different region, with a special Boon for the winner.</div>
              <div>3. The campaign ends with a seated playoff between the four Grand Alliances.</div>
              <div>4. In the playoff, alliances will utilize accumulated resources and abilities.</div>
              <div>5. Forces can plunder resources from defeated opponents.</div>
            </div>
          </div>
        <br/>
        <h3 class="w-full border-b-1 border-white/10 !mb-2">General Information</h3>
        <div class="grid grid-cols-1 gap-2">
          <div class="flex flex-col gap-2">
            <div>1. The campaign will last for 8 weeks, 2 battles per week.</div>
            <div>2. 16 territories are contested in the war-torn land.</div>
            <div>3. Each victory contributes to the goals of a Grand Alliance.</div>
            <div>4. Each Grand Alliance will see the same number of battles.</div>
            <div>5. Each battle will be preceded by a prediction vote that includes the armies, battleplan and region.</div>
            <div>6. Channel members can participate in competitions and access exclusive content.</div>
            <div>7. Channel membership supports the creation of the campaigns.</div>
          </div>
        </div>
      </div>
    </div>



    <div class="col-span-4 flex column-2 gap-4">
      <div class="section flex flex-col gap-1">
        <h3>Prizes (members only)</h3>
          <ol class="flex flex-col gap-2 border-t-1 pt-3 border-white/10">
            <li>• Weekly prediction winners will be recognized on the channel.</li>
            <li>• Weekly prediction winners will be able to name a model in any chosen army/unit.</li>
            <li>• Weekly prediction will earn a raffle ticket.</li>
            <li>• All participants will have a chance at a final draw, with two Spearhead boxes as prizes.</li>
            <li>• The participant with the most accurate predictions will win a third Spearhead box.</li>
          </ol>
      </div>
      <div class="section col-span-2 flex flex-col gap-1">
        <h3 class="w-full border-b-1 border-white/10 !mb-2">Channel Member Exclusive</h3>
        <div class="grid grid-cols-1 gap-2">
          <div class="flex flex-col gap-2">
            <div>• Participation in exclusive competitions.</div>
            <div>• Exclusive access to prediction related content.</div>
            <div>• Exclusive community interaction.</div>
          </div>
          <a href="https://www.youtube.com/channel/UC3eXLQju5Oz4GL8rxOGlK6w/membership" class="text-3xl text-center w-full py-4 hover:opacity-75 animate-pulse">
            SIGN UP!
          </a>
        </div>
      </div>
    </div>
  </div>
{/await}

<style>
  h3 {
    font-size: 28px;
    margin: 0;
  }
  h4 {
    font-size: 18px;
    margin: 0;
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
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 0.5 rem;
  }
  @media only screen and (min-width: 640px) {
    .title {
      margin-top: -1.5rem;
      margin-bottom: -1.5rem;
    }
    .subtitle {
      align-items: center;
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
      /* overflow: hidden; */
    }
    .podium-wrapper {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .section {
    z-index: 5;
    background-color: rgba(50,50,52,.2);
    border-radius: 8px;
    padding: 18px 24px;
    border: 1px solid rgba(255,255,255,0.3);
  }
  div.week-selector > button {
    min-height: 100%;
  }
</style>