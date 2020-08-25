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
