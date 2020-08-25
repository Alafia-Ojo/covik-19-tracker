import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    //get anly the needed data, corresponding to the current country's data
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(changeableUrl);

    const neededData = { confirmed, recovered, deaths, lastUpdate };

    return neededData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    //console.log("Modified Data", modifiedData);
    //Modified Data is an array of objects
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    //console.log("countries", countries);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
