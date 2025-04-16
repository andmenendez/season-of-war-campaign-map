<script lang="ts">;
	import { contextBanner, hideConflict, hideSpoilers, hideUI, selectedFactions, territories } from './../store';
	import { GAColor, GABorderColor, GA, type GAType } from './../territories';
  import { onMount } from 'svelte';
  import 'leaflet/dist/leaflet.css';
  import './leaflet-override.css';
  import { type TerritoryType } from "$lib/territories";
  import { Polygon, Popup, Tooltip } from "svelte-leafletjs";
  import { flattenSVG } from '$lib/utlils';
  import combat from '$lib/assets/combat.svg';
  import { MAX_H } from '../constants';
  import type { LatLngExpression } from 'leaflet';
  import { selectedWeek } from '$lib/store';
  import GrandAllianceCrest from './GrandAllianceCrest.svelte';
  import playButton from "$lib/assets/triangle.svg"
  
	let { territory, noSpoiler }: {territory: TerritoryType; noSpoiler?: boolean } = $props();
  let points: LatLngExpression[] = $state([])
  const xmlns = "http://www.w3.org/2000/svg";
  
  const offset_x = territory.offset.x;
  const offset_y =  territory.offset.y;
  const defaultHideUIState = $hideUI;

  let currentOwner : GAType = $state(GA.None);
  let defender : GAType = $state(GA.None);
  let attacker : GAType = $state(GA.None);
  let battleReportId : string | null = $state(null);

  onMount(()=>{
    const path = territory.path;
    var svgElem = document.createElementNS(xmlns, "svg");
    var pathComponent = document.createElementNS(xmlns, "path");
    pathComponent.setAttribute("d", path);
    svgElem.append(pathComponent);
    const flattened = flattenSVG(svgElem);
    points = flattened[0].points.map(([x,y])=>[-y/2+MAX_H-offset_y/2,x/2+offset_x/2]);
  })

  territories.subscribe(territories => {
    const thisTerritory = territories.find(t => t.id === territory.id) 
    if (thisTerritory) {
      if ($selectedWeek - 1 >= 0) {
        defender = territory.owner[$selectedWeek-1];
        attacker = territory.attacker[$selectedWeek-1];

        if ($selectedWeek-1 <= territory.videoLinks.length - 1 ){
          battleReportId = territory.videoLinks[$selectedWeek-1];
        } else {
          battleReportId = null;
        }
        if ($selectedWeek > 1) {
          if (territory.owner[$selectedWeek - 1] === territory.owner[$selectedWeek - 2]){
            currentOwner = territory.owner[$selectedWeek - 1];
          }
          else if (territory.owner[$selectedWeek - 1] === territory.attacker[$selectedWeek - 2]){
            currentOwner = territory.owner[$selectedWeek - 1];
          } else {
            currentOwner = GA.None;
          }
        } else {
          currentOwner = GA.None
        }
      }
    }
  })

  selectedWeek.subscribe((week)=> {
    if (week - 1 >= 0) {
      defender = territory.owner[week - 1];
      attacker = territory.attacker[week - 1];

      if (week-1 <= territory.videoLinks.length - 1 ){
          battleReportId = territory.videoLinks[week-1];
      } else {
        battleReportId = null;
      }

      if (week > 1) {
        if (territory.owner[week - 1] === territory.owner[week - 2]){
          currentOwner = territory.owner[week - 1];
        }
        else if (territory.owner[week - 1] === territory.attacker[week - 2]){
          currentOwner = territory.owner[week - 1];
        } else {
          currentOwner = GA.None;
        }
      } else {
        currentOwner = GA.None
      }
    } else {
      defender = GA.None;
      attacker = GA.None;
      currentOwner = GA.None;
      battleReportId= null
    }
  })
</script> 

{#if points.length > 0}
  <Polygon
    latLngs={points} 
    weight={2} 
    opacity={1}
    color={
      noSpoiler ? "rgba(18,23,17,0.9)" : 
        $hideUI ? "rgba(0,0,0,0)" :
          "rgba(18,23,17,0.9)"
    }
    fillOpacity={$hideUI ? 0 : $contextBanner.territory === territory.name ? .3 : 
          $selectedFactions.includes(currentOwner) ? .4 : currentOwner!== GA.None ? .2 : 0.05}
    fillColor={
      ($hideUI || $hideSpoilers) ? "rgba(255,255,255,0)" : 
        $selectedWeek === 0 ? "rgba(255,255,255,1)" : 
          $selectedFactions.includes(currentOwner) ?
            GAColor[currentOwner] : GAColor[currentOwner]
        }
    options={{noClip: true, className: "polygon-class-123" }}
    events={{
      mouseover: () => {
        contextBanner.set({
          territory: territory.name,
          owner: defender,
          attacker: attacker === GA.None ? null : attacker,
          properties: territory.properties,
        })
      },
      mouseout: () => {
        contextBanner.set(
          { 
            territory: "",
            owner: "-",
            attacker: null,
            properties: []
        })
      },
      popupopen: (e)=> {if (window.innerWidth < 640) hideUI.set(true)},
      popupclose: (e)=> {if (window.innerWidth < 640) hideUI.set(defaultHideUIState)},
    }}
  >
      
    <Tooltip options={{permanent: true ? true : false, className: "attacker", offset: [-50, 0]}}>
      <img 
        src={combat} 
        alt="Conflict"
        class={`w-[64px] h-[64px] inline animate-pulse ${currentOwner !== GA.None || (!$hideUI && !$hideConflict && attacker !== (GA.None as GAType)) ? "" :"!hidden"}`} 
      />
    </Tooltip>


    <Popup options={{keepInView: false, autoPanPadding: [0, 100], closeOnEscapeKey: true}}>
      <div class="flex flex-col gap-2 max-w-[80vw] pb-8">
            {#if !$hideConflict && !$hideUI}
              <div class={`flex w-full justify-between items-center ${attacker !== GA.None ? "flex-col gap-2" : "flex-row"}`}>
                <div class="text-2xl font-semibold">{territory.name}</div>
                <div class="flex items-center gap-2">
                  <GrandAllianceCrest ga={defender}/>
                  {#if attacker !== GA.None}
                    <img 
                    class="w-6 h-6 animate-pulse"
                    src={combat} 
                    alt="Conflict"
                    />
                    <GrandAllianceCrest ga={attacker}/>
                  {/if}
                </div>
              </div>
            {:else}
              <div class={`flex w-full justify-between items-center flex-row`}>
                <div class="text-2xl font-semibold">{territory.name}</div>
                {#if !$hideUI}
                  <div class="flex items-center gap-2">
                    <GrandAllianceCrest ga={$hideSpoilers ? GA.None : defender}/>
                  </div>
                {/if}
              </div>
          {/if}
          <div class="px-1 text-xs">{territory.description}</div>
            {#if battleReportId && !$hideUI && !$hideConflict && attacker !== GA.None}
              {#if !battleReportId.includes("http")}
                <a target="_blank" class="group relative w-full h-40 overflow-hidden rounded-md" href={`https://www.youtube.com/watch?v=${battleReportId}`}>
                  <img alt="Battle Report Thumbnail" class={`absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/4`} src={`https://img.youtube.com/vi/${battleReportId}/0.jpg`}>
                  <img src={playButton} alt="Play Video" class="absolute hover:opacity-80 contrast-200 brightness-200 left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/4" />
                </a>
              {:else}
                <a target="_blank" class="w-full bg-white/90 rounded-sm text-center hover:bg-white/80 py-1 !text-black/80 uppercase animate-pulse" href={battleReportId}>View Army Lists and Vote</a>
              {/if}
          {:else}
            <div class="w-full bg-white/30 rounded-sm text-center py-1 !text-white/80 uppercase">Coming Soon</div>
          {/if}
          <div class="flex flex-col">
            <div class="py-1 px-2 bg-slate-500 rounded-sm">{territory.bonuses[0].ability}</div>
            <div class="px-1">
            <div class="flex flex-col gap-2 p-2 bg-slate-500/50 rounded-b-sm">
              {#if territory.bonuses[0].declare}
              <span><strong class="font-extrabold">Declare:</strong> {territory.bonuses[0].declare}</span>
              {/if}
              <span><strong class="font-extrabold">Effect:</strong> {territory.bonuses[0].effect}</span>
            </div>
            </div>
          </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full py-1 flex items-center justify-center gap-2 bg-white/20 rounded-b-md">
        {#each territory.properties as prop, i}
        <div class="uppercase">{prop}

          {#if i < territory.properties.length - 1}
          ,
          {/if}
        </div>
        {/each}

      </div>
    </Popup>
  </Polygon>
{/if}