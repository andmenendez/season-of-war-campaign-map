<script lang="ts">
  import "leaflet/dist/leaflet.css";
  import "./leaflet-override.css"
  import mapImage from "$lib/assets/map.png";
  import numberedMapImage from "$lib/assets/numbered-map.png";
  import fadedMapImage from "$lib/assets/faded-map.png";
  import {
    type MapOptions,
    CRS,
    type TileLayerOptions,
    type GeoJSONOptions,
    ImageOverlay,
    type LatLngBoundsExpression,
  } from "leaflet";
  import { onMount } from "svelte";
  import { LeafletMap } from "svelte-leafletjs";
  import Territory from "./territory.svelte";
  import { TERRITORIES } from "$lib/territories";
  import { MAX_H, MAX_W } from "$lib/constants";

  const mapOptions: MapOptions = {
    center: [0, 0],
    zoom: 1,
    minZoom: 0,
    maxZoom: 1.5,
    inertia: false,
    easeLinearity: 0,
    crs: CRS.Simple,
    preferCanvas: true,
    zoomAnimation: true,
    zoomControl: false,
    maxBoundsViscosity: 1,
    maxBounds: [
      [-1*MAX_H, -1*MAX_W],
      [2*MAX_H, 2*MAX_W],
    ]
  };

  let leafletMap: LeafletMap;

  const bounds = [
    [MAX_H, MAX_W],
    [0, 0],
  ] as LatLngBoundsExpression;

  onMount(() => {
    if (leafletMap) {
      const map = leafletMap.getMap();
      if (map) {
        map.fitBounds(bounds);
        new ImageOverlay(fadedMapImage, bounds).addTo(map);
      }
    }
  });
</script>

<div class="fixed left-0 top-0 w-screen h-full">
  <div class="relative w-full h-full">
    <LeafletMap
      bind:this={leafletMap}
      options={mapOptions}
    >
      {#each TERRITORIES as territory}
        <Territory {territory}></Territory>
      {/each}
    </LeafletMap>
  </div>
</div>
