<script lang="ts">
  import { onMount } from "svelte";
  import sowTitle from "$lib/assets/sow-loading.png";
import youtube from "$lib/assets/socials/youtube.png";
import discord from "$lib/assets/socials/discord.png";
  import scores from "./scores";
  import { fade } from "svelte/transition";
  let podium: {username: string; scores: number[]}[] = $state([])

  onMount(()=> {
    let podium_winners = scores.sort(
      (p1, p2) => 
        p1.scores[p1.scores.length - 1] > p2.scores[p2.scores.length - 1] ? -1 : 1
    )
    podium_winners = podium_winners.slice(0,3);

    setTimeout(()=>{
      podium = [
        podium_winners[0]
      ]
    }, 500)
    setTimeout(()=>{
      podium = [
        podium_winners[0],
        podium_winners[1],
      ]
    }, 1500)
    setTimeout(()=>{
      podium = [
        podium_winners[0],
        podium_winners[1],
        podium_winners[2]
      ]
    }, 2500)
  })
</script>

<div class="flexcol-to-grid hide-overflow-on-desktop grid grid-cols-12 gap-4 p-8 h-full min-h-[700px] place-items-stretch max-h-screen">
  <div class="inset-0 flex flex-col col-span-8 gap-4">

    <div class="flexcol-to-row flex flex-row w-full justify-between items-center py-2">
      <div in:fade out:fade class="z-10 flex items-center w-fit shrink-0 gap-4">
        <div class="flex brightness-110 contrast-125 flex-col rounded-md overflow-hidden title">
          <a href="https://www.youtube.com/seasonofwar" class="shrink-0 group bg-gradient-to-b from-black to-black/0 shadow-sm"><img style="height: 102px" class="group-hover:opacity-90 opacity-80 transition-opacity" src={sowTitle} alt="Season of War" /></a>
        </div>
      </div>
      <div class="subtitle">
        <a class="opacity-100 hover:opacity-100 flex gap-1 transition-opacity" href="https://www.youtube.com/seasonofwar"><img class="h-5" alt="discord" src={discord}/>Community</a>
        <a class="opacity-100 hover:opacity-100 flex gap-1 transition-opacity" href="https://www.youtube.com/seasonofwar"><img class="h-5" alt="youtube" src={youtube}/>More Battle Reports</a>
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
        <div class="grid podium-wrapper place-items-center min-h-12">
          {#if podium.length >= 1}
            <div in:fade class="podium first">
              <div class="score-plate grid grid-cols-1 place-items-center bg-orange-300">1</div>
              {podium[0].username}
            </div>
          {/if}
          {#if podium.length >= 2}
            <div in:fade class="podium second">
              <div class="score-plate grid grid-cols-1 place-items-center bg-slate-300">2</div>
              {podium[1].username}
            </div>
          {/if}
          {#if podium.length >= 3}
            <div in:fade class="podium third">
              <div class="score-plate grid grid-cols-1 place-items-center bg-yellow-700">3</div>
              {podium[2].username}
            </div>
          {/if}
        </div>
    </div>
  </div>



  <div class="col-span-4 flex column-2 gap-4">
    <div class="section flex flex-col h-full grow w-full overflow-hidden">
      <h3>Leaderboard</h3>
      <div class="relative h-full flex flex-col max-h-full overflow-scroll">
        <div class="absolute-on-desktop h-full w-full overflow-scroll">
          {#each scores.sort(
            (p1,p2)=>
            p1.scores.reduce((agg, curr)=>agg+curr, 0) > p2.scores.reduce((agg, curr)=>agg+curr, 0) ? -1 : 1
          ) as score}
            <div class="grid grid-cols-3">
              <div class="col-span-2">
                {score.username}
              </div>
              <div class="col-span-1 text-end">
                {score.scores.reduce((agg, curr)=>agg+curr, 0)}
              </div>
            </div>
          {/each}
        </div>
    </div>
    </div>
    <div class="section flex flex-col gap-1">
      <h3>Prizes</h3>
        <ol class="flex flex-col gap-1 border-t-1 pt-3 border-white/10">
          <li>1. A piece of Ride's lilac shirt</li>
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
    gap: 2px;
    align-items: start;
    justify-content: center;
  }
  .score-plate {
    border-radius: 4px;
    width: 24px;
    height: 24px;
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
    margin-top: -2rem /* -32px */;
    margin-bottom: -1rem /* -32px */;
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