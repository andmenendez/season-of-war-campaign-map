import { google } from "googleapis";
import type { GAType } from "../lib/territories";
import { sleep } from "$lib/utlils";
import type { Config } from "@sveltejs/adapter-vercel";

export const config: Config = {
    maxDuration: 100
};

type StructuredData = {
  week: number;
  territories: {
    id: number;
    owner: GAType[];
    attacker: GAType[];
    videoLinks: string[];
  }[];
};

export const load = async () => {
  return {
    streamed: { 
      data: new Promise<any>(async (resolve, reject) => {
        fetch("https://sheets.googleapis.com/v4/spreadsheets/1SLLxhj6kyXKlROEX9vPJEk4kNLvwTk_VJWk6apeBLlo/values/territories!B1:I57?key=AIzaSyAFZ2vYiX0r_N4OjOsjSSncevnsc9ev6cM", {
          method: "GET"
        }).then(re => {
          console.log("------------------");
          console.log(re);
          return re.json()
        }).then((data)=>{
          console.log(data)
          resolve(data.values)}
        ).finally(()=>{
          console.log("--------DONE MANUAL FETCH---------");
        })
      })
    },
  };
};

// const GOOGLE_API_KEY = "AIzaSyAFZ2vYiX0r_N4OjOsjSSncevnsc9ev6cM";
