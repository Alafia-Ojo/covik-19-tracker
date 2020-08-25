import React, { Component } from "react";
import styles from "./App.module.css";
import { fetchData } from "./API";
// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/Country/Country";

import { Cards, Chart, CountryPicker } from "./components";

class App extends Component {
  state = {
    //Only properties of classes can be passed down
    //this will hold the data from the componentDidMount();
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    //console.log("This's state", this.state.data);
  }
  render() {
    //const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards passedData={this.state.data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
