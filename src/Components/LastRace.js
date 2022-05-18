import * as React from "react";
import Typography from "@mui/material/Typography";
import Loader from "./Loader";
import Title from "./Title";

export default function LastRace({ lastRace, load }) {
  return (
    <React.Fragment>
      <Title>Last Race</Title>
      {load ? (
        <>
          <Typography component="p" variant="h6">
            {lastRace.competition.name}
          </Typography>

          <div>
            <img
              src={lastRace.circuit.image}
              alt={lastRace.competition.name}
              width="200"
            />
          </div>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {lastRace.distance}| {lastRace.laps.total} Laps |{" "}
            {lastRace.competition.location.country}
          </Typography>

          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {lastRace.circuit.name}
          </Typography>
        </>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
}
