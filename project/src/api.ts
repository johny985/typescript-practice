export interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  Message: string;
}

interface Global {
  NewConfirmed: number;
  NewDeath: number;
  NewRecorded: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  NewConfirmed: string;
  NewDeaths: string;
  NewRecovered: string;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CountrySummaryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}

export type CountrySummaryResponse = CountrySummaryInfo[];
