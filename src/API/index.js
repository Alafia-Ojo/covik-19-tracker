import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    //get anly the needed data
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(url);

    const neededData = { confirmed, recovered, deaths, lastUpdate };

    return neededData;
  } catch (error) {}
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
