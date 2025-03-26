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
          return re.json()
        }).then((data)=>{

          let structuredData: StructuredData = {
            week: 0,
            territories: [],
          };

          const territoryDataResponse = [...data.values].slice(2+1, 17+2);
          const attackersDataResponse = [...data.values].slice(21+1, 36+2);
          const linksDataResponse = [...data.values].slice(41, 55+2);
          const week = parseInt(`${data.values[0][0]}`);
          structuredData = {
            ...structuredData,
            week: week,
            territories: Array.from(
              Array(territoryDataResponse.length)
            ).map((_, i) => {
              return {
                id: i + 1,
                owner: (territoryDataResponse[i] as GAType[]).slice(0,week),
                attacker: (attackersDataResponse[i] as GAType[]).slice(0,week),
                videoLinks: (linksDataResponse[i] as GAType[]).slice(0,week),
              };
            }),
          };
          resolve(structuredData)}
        ).finally(()=>{
        })
      })
    },
  };
};

// const GOOGLE_API_KEY = "AIzaSyAFZ2vYiX0r_N4OjOsjSSncevnsc9ev6cM";
