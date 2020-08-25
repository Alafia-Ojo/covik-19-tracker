//This file contains all the named exports pertaining to fetcing DATA from the API

//js library for making http requests
import axios from "axios";

//Project API
const url = "https://covid19.mathdro.id/api";

//1. Function to fetch Data Based on Country selected

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    //Get Only Needed Data Based on Country
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(changeableUrl);

    const neededData = { confirmed, recovered, deaths, lastUpdate };
    return neededData;
  } catch (error) {
    console.log(error);
  }
};

//2. Function to fetch DailyData
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    //Modified Data is an array of objects
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

//3. Function to fetch Individual Countries from the API
export const fetchCountries = async () => {
  try {
    const {
      //Destructure data to get only the countries object
      data: { countries },
    } = await axios.get(`${url}/countries`);
    //Map over that object and return only the country names
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
