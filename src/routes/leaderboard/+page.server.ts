import { google } from "googleapis";
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
    maxDuration: 100
};

const CONTEXT_DATA = [
  "Form Responses 1",
  "Form Responses 2",
  "Form Responses 3",
  "Form Responses 4",
  "Form Responses 5",
  "Form Responses 6",
  "Form Responses 7",
  "Form Responses 8",
]

const boolToInt = (b: boolean) => b ? 1 : 0;

function isValidDate(dateString: string) {
  const date = new Date(dateString);
  return date && date.toString() !== "Invalid Date";
}

export const load = async () => {
  let week = 0;
  let userVoteData: { [name: string]: {[week: string]: number } } = {}
  
  return { 
    response : 200,
    data:  {week: week, scores: userVoteData},
  };
  // try {
  //   // Auth
  //   const auth = await google.auth.getClient({
  //     apiKey: "AIzaSyAFZ2vYiX0r_N4OjOsjSSncevnsc9ev6cM",
  //     scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  //   });
  //   const sheets = google.sheets({version: "v4", auth});
    
  //   // Data
  //   let continueParsing = true;
  //   let i = 1
  //   while (i <= 8 && continueParsing) {
  //     const linksDataResponse : any = await sheets.spreadsheets.values.get({
  //       spreadsheetId: "1SLLxhj6kyXKlROEX9vPJEk4kNLvwTk_VJWk6apeBLlo",
  //       range: `Form Responses ${i}!A1:E108`,
  //     })
  //     const context = linksDataResponse.data.values[0]
  //     let [start, end, winner1, winner2] = context;
  //     if (!start || !end || !winner1 || !winner2) {
  //       continueParsing = false
  //     } else if (new Date() < new Date(start)) {
  //       continueParsing = false
  //     } else {
  //       week = i;
  //       linksDataResponse.data.values.forEach((formSubmission: string[], j: number)=> {
  //           const [date, username, show, guess1, guess2, ] = formSubmission;
  //           if (j > 1 && date !== "Timestamp" && isValidDate(date) && show !== "No") {
  //               if (!Object.keys(userVoteData).includes(username)) {
  //                 userVoteData[username] = {}
  //               }
  //               if (new Date(date) < new Date(end)) {
  //                 userVoteData[username][`${i}`] = boolToInt(guess1 === winner1) + boolToInt(guess2 === winner2);
  //               } else {
  //                 userVoteData[username][`${i}`] = 0;
  //               }
  //           }
  //       })
  //     }
  //     i++;
  //   }
  // } catch (e) {
  //   console.log(e)
  // }
  // return { 
  //   response : 200,
  //   data:  {week: week, scores: userVoteData},
  // };
};