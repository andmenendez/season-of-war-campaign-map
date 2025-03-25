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
      data: new Promise<any>(async (resolve) => {
        let allData: any = []
        try {
          // Auth
          const auth = await google.auth.getClient({
            apiKey: "AIzaSyAFZ2vYiX0r_N4OjOsjSSncevnsc9ev6cM",
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
          });

          const sheets = google.sheets({ version: "v4", auth });
          // TERRITORY DATA
          allData =
          await sheets.spreadsheets.values.get({
            spreadsheetId: "1SLLxhj6kyXKlROEX9vPJEk4kNLvwTk_VJWk6apeBLlo",
            range: "territories!B1:I57",
          });
        } catch (e) {
          console.log(e);
        }
        resolve(allData.data.values);
      }),
    },
  };
};

// const GOOGLE_API_KEY = "AIzaSyAFZ2vYiX0r_N4OjOsjSSncevnsc9ev6cM";
