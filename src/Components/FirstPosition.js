import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Loader from "./Loader";
import Title from "./Title";

export default function FirstPosition({ firstPosition, load }) {
  return (
    <React.Fragment>
      {load ? (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Title>
              {firstPosition.driver.name} | # {firstPosition.position}
            </Title>

            <div>
              <img src={firstPosition.driver.image} alt="imagen" width="200" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <Title>Points: {firstPosition.points}</Title>
            <Typography component="p" variant="h6">
              {firstPosition.team.name}
            </Typography>
            <div>
              <img src={firstPosition.team.logo} alt="imagen" width="200" />
            </div>
          </Grid>
        </Grid>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
}
