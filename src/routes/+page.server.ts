import { google } from "googleapis";
import type { GAType } from "../lib/territories";
import { sleep } from "$lib/utlils";

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
      data: new Promise<StructuredData>(async (resolve) => {
        console.log("Start Loader");
        let structuredData: StructuredData = {
          week: 0,
          territories: [],
        };
        try {
          // Auth
          const auth = await google.auth.getClient({
            apiKey: "AIzaSyAFZ2vYiX0r_N4OjOsjSSncevnsc9ev6cM",
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
          });
          const sheets = google.sheets({ version: "v4", auth });
          
          // TERRITORY DATA
          const allData: any =
            await sheets.spreadsheets.values.get({
              spreadsheetId: "1SLLxhj6kyXKlROEX9vPJEk4kNLvwTk_VJWk6apeBLlo",
              range: "territories!B1:I57",
            });
          
          const territoryDataResponse = [...allData.data.values].slice(2+1,17+2);
          const attackersDataResponse = [...allData.data.values].slice(21+1,36+2);
          const linksDataResponse = [...allData.data.values].slice(41,55+2);

          structuredData = {
            ...structuredData,
            week: parseInt(`${allData.data.values[0][0]}`),
            territories: Array.from(
              Array(territoryDataResponse.length)
            ).map((_, i) => {
              return {
                id: i + 1,
                owner: territoryDataResponse[i],
                attacker: attackersDataResponse[i],
                videoLinks: linksDataResponse[i],
              };
            }),
          };
        } catch (e) {
          console.log(e);
        }
        console.log("Loader resolving")
        resolve(structuredData);
      }),
    },
  };
};

// const GOOGLE_API_KEY = "AIzaSyAFZ2vYiX0r_N4OjOsjSSncevnsc9ev6cM";
