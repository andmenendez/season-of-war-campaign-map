import { writable } from "svelte/store";
import type GrandAllianceCrest from "./components/GrandAllianceCrest.svelte";
import { GA, INIT_TERRITORIES, type GAType, type TerritoryType } from "./territories";

export type ContextBannerType = { territory: string; owner: string; properties: string[]}
const CURRENT_WEEK = 0;
export const loadingData = writable<boolean>(true);
export const currentWeek = writable<number>(CURRENT_WEEK);
export const selectedWeek = writable<number>(0);
export const selectedFactions = writable<GAType[]>([]);
export const contextBanner = writable<ContextBannerType>(
  { territory: "", owner: "-", properties: []}
);

export const territories = writable<TerritoryType[]>(INIT_TERRITORIES);
export const hideUI = writable<boolean>(false);
export const hideConflict = writable<boolean>(false);
export const hideSpoilers = writable<boolean>(false);
// export const data = writable<any>({});
