import { writable } from "svelte/store";
import type GrandAllianceCrest from "./components/GrandAllianceCrest.svelte";
import type { GAType } from "./territories";

export const CURRENT_WEEK = 3;
export const selectedWeek = writable<number>(0)
export const selectedFactions = writable<GAType[]>([])
