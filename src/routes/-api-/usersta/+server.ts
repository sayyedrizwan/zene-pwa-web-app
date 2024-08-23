import { MongoDBLocalService } from "../ApiService/dbmongo/MongoDBLocalService.js";
import { MySqlLocalService } from "../ApiService/dbmysql/MySqlLocalService.js";

export async function GET({ setHeaders }) {
  let usersinLast24Hours: number = -0;
  let yesterday24HourUsers: number = -0;
  let last7DaysUsers: number = -0;
  let totalUsers: number = -0;
  let oldUsers: number = -0;
  let newUsers: number = -0;

  let countrywithcity: any[] = [];
  let country: any[] = [];

  let songPlayedToday: number = -0;
  let songPlayedYesterday: number = -0;
  let totalSongPlayed: number = -0;

  await Promise.all(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(async (i) => {
      if (i == 1) usersinLast24Hours = await MySqlLocalService.instance.today24HourUsers();
      if (i == 2) yesterday24HourUsers = await MySqlLocalService.instance.yesterday24HourUsers();
      if (i == 3) last7DaysUsers = await MySqlLocalService.instance.last7DaysUsers();
      if (i == 4) totalUsers = await MySqlLocalService.instance.totalUsers();
      if (i == 5) oldUsers = await MySqlLocalService.instance.oldUsers();
      if (i == 6) newUsers = await MySqlLocalService.instance.newUsers();
      if (i == 7) countrywithcity = await MySqlLocalService.instance.allCountriesCityofUsers();

      if (i == 8) songPlayedToday = await MongoDBLocalService.instance.songPlayedToday();
      if (i == 9) songPlayedYesterday = await MongoDBLocalService.instance.songPlayedYesterday();
      if (i == 10) totalSongPlayed = await MongoDBLocalService.instance.totalSongPlayed();


      if (i == 11) country = await MySqlLocalService.instance.allCountriesUsers();
    })
  );

  setHeaders({ "Content-Type": "text/html" });
  return new Response(await htmlTable(usersinLast24Hours, yesterday24HourUsers, last7DaysUsers, totalUsers, oldUsers, newUsers, songPlayedToday, songPlayedYesterday, totalSongPlayed, country, countrywithcity));
}

async function htmlTable(usersinLast24Hours: number, yesterday24HourUsers: number, last7DaysUsers: number, totalUsers: number, oldUsers: number, newUsers: number, songPlayedToday: number, songPlayedYesterday: number, totalSongPlayed: number, country: any[], countrywithcity: any[]) {
  let countryString = "";
  let countrywithCityString = "";

  await Promise.all(
    country.map(async (e) => {
      countryString += `<tr>
        <td>${e.country}</td>
        <td>${e.count}</td>
    </tr>`;
    })
  );

  await Promise.all(
    countrywithcity.map(async (e) => {
        countrywithCityString += `<tr>
        <td>${e.city} - ${e.country}</td>
        <td>${e.count}</td>
    </tr>`;
    })
  );

  return `
    <!DOCTYPE html>
    <html>
    <style>
    table, th, td {
    border:1px solid black;
    }
    </style>
    <body>

    <h2>Zene Analytics</h2>

    <table style="width:100%">
    <tr>
        <th>Users</th>
        <th>Counts</th>
    </tr>
    <tr>
        <td>User Active today from 12:00 AM</td>
        <td>${usersinLast24Hours}</td>
    </tr>
    <tr>
        <td>User Active yesterday till 12:00 AM today</td>
        <td>${yesterday24HourUsers}</td>
    </tr>
    <tr>
        <td>User Active in last 7 days</td>
        <td>${last7DaysUsers}</td>
    </tr>
    <tr>
        <td>Old user in last from last 24 Hours (Signup more then 2 days ago)</td>
        <td>${oldUsers}</td>
    </tr>
    <tr>
        <td>New user in last from last 24 Hours</td>
        <td>${newUsers}</td>
    </tr>

    <tr>
        <td>Total user</td>
        <td>${totalUsers}</td>
    </tr>

    </table>

    <br/><br/><br/>

    <table style="width:100%">
    <tr>
        <th>Songs</th>
        <th>Counts</th>
    </tr>
    <tr>
        <td>Song Played today from 12:00 AM</td>
        <td>${songPlayedToday}</td>
    </tr>
    <tr>
        <td>Song Played yesterday till 12:00 AM today</td>
        <td>${songPlayedYesterday}</td>
    </tr>
    <tr>
        <td>Total songs played</td>
        <td>${totalSongPlayed}</td>
    </tr>

    </table>

    
    <br/><br/><br/>

    <table style="width:100%">
    <tr>
        <th>Countries</th>
        <th>Counts</th>
    </tr>

    ${countryString}
    
    </table>
    
    <br/><br/><br/>

    <table style="width:100%">
    <tr>
        <th>Countries with City</th>
        <th>Counts</th>
    </tr>

    ${countrywithCityString}
    
    </table>

    </body>
    </html>
`;
}
