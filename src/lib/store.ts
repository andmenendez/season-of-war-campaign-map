import { writable } from "svelte/store";
import type GrandAllianceCrest from "./components/GrandAllianceCrest.svelte";
import { GA, type GAType } from "./territories";

export type ContextBannerType = { territory: string; owner: string; properties: string[]}
export const CURRENT_WEEK = 3;
export const selectedWeek = writable<number>(0);
export const selectedFactions = writable<GAType[]>([]);
export const contextBanner = writable<ContextBannerType>(
  { territory: "", owner: "-", properties: []}

);
export const hideUI = writable<boolean>(false);
export const hideConflict = writable<boolean>(false);
export const hideSpoilers = writable<boolean>(false);
