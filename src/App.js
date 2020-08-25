import React, { Component } from "react";
import styles from "./App.module.css";
//Our named function to get data from API. You remember, right?
import { fetchData } from "./API";
import coronaImage from "./images/image.png";

//Import our three components in here
import { Cards, Chart, CountryPicker } from "./components";

class App extends Component {
  state = {
    //Holds data that our App needs to function, including those to be passed down to sub components
    data: {},
    country: "",
  };
  //Helper Methods

  //1. When the component is mounted, the data is fetched and set
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  //2. This handles the event of changing from global classes to specific country cases
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    //1. Fetch the data, based on the given country
    console.log(fetchedData);

    //2. Override state's data to the one of the country or else the global one and sets the country's name
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    //destructure data dnd country from current app state
    const { data, country } = this.state;
    return (
      //Note: The data of this parent component is being passed down to the children components as props. Then the handleCountryChange event as a prop to the CountryPicker Component
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="CORONA VIRUS" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
