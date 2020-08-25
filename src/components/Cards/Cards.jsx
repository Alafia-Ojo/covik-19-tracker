import React from "react";
//Use this to allow multiple styles in module.css
import cx from "classnames";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

//Destructure the passedData gotten as props from the Cards component in App.js
const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {
  console.log("Confirmed", confirmed);
  //If any of the data is unavailable or still awaiting fulfillment, return 'Loading..'. Great practice
  if (!confirmed) {
    return "Loading";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {/* Card 1 */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography variant="body2">Number of COVID 19 cases</Typography>
          </CardContent>
        </Grid>
        {/* Card 2 */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography variant="body2">
              Number of COVID 19 recoveries
            </Typography>
          </CardContent>
        </Grid>
        {/* Card 3 */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography variant="body2">Number of COVID 19 deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
