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

          // APP DATA
          const appDataresponse: any = await sheets.spreadsheets.values.get({
            spreadsheetId: "1SLLxhj6kyXKlROEX9vPJEk4kNLvwTk_VJWk6apeBLlo",
            range: "Sheet1!A1:B1",
          });

          // TERRITORY DATA
          const territoryDataResponse: any =
            await sheets.spreadsheets.values.get({
              spreadsheetId: "1SLLxhj6kyXKlROEX9vPJEk4kNLvwTk_VJWk6apeBLlo",
              range: "territories!B3:I18",
            });
          const attackersDataResponse: any =
            await sheets.spreadsheets.values.get({
              spreadsheetId: "1SLLxhj6kyXKlROEX9vPJEk4kNLvwTk_VJWk6apeBLlo",
              range: "territories!B22:I37",
            });

          const linksDataResponse: any = await sheets.spreadsheets.values.get({
            spreadsheetId: "1SLLxhj6kyXKlROEX9vPJEk4kNLvwTk_VJWk6apeBLlo",
            range: "territories!B41:I56",
          });

          structuredData = {
            ...structuredData,
            week: parseInt(`${appDataresponse.data.values[0][1]}`) - 1,
            territories: Array.from(
              Array(territoryDataResponse.data.values.length)
            ).map((_, i) => {
              return {
                id: i + 1,
                owner: territoryDataResponse.data.values[i],
                attacker: attackersDataResponse.data.values[i],
                videoLinks: linksDataResponse.data.values[i],
              };
            }),
          };
        } catch (e) {
          console.log(e);
        }

        await sleep(5000);

        resolve(structuredData);
      }),
    },
  };
};

// const GOOGLE_API_KEY = "AIzaSyAFZ2vYiX0r_N4OjOsjSSncevnsc9ev6cM";
