import React, { Component } from "react";
import styles from "./App.module.css";
import { fetchData } from "./API";
import coronaImage from "./images/image.png";
// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/Country/Country";

import { Cards, Chart, CountryPicker } from "./components";

class App extends Component {
  state = {
    //Only properties of classes can be passed down
    //this will hold the data from the componentDidMount();
    data: {},
    country: "",
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    //fetch data
    console.log(fetchedData);

    //set state
    this.setState({ data: fetchedData, country: country });
    //console.log("Data", this.state.data);
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    //console.log("This's state", this.state.data);
  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Corona header " />
        <Cards passedData={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
