import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FirstPosition from "../Components/FirstPosition";
import NextRaces from "../Components/NextRaces";
import LastRace from "../Components/LastRace";
import Footer from "../Components/Footer";
import * as api from "../Services";

function Home() {
  const [firstPosition, setFirstPosition] = React.useState([]);
  const [nextRaces, setNextRaces] = React.useState([]);
  const [lastRace, setLastRace] = React.useState([]);

  React.useEffect(() => {
    api
      .lastRace()
      .then((res) => {
        setLastRace(res.response);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .nextRace()
      .then((res) => {
        setNextRaces(res.response);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getDrivers(2022)
      .then((res) => {
        setFirstPosition(res.response[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              <FirstPosition firstPosition={firstPosition}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              <LastRace lastRace={lastRace}/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <NextRaces nextRaces={nextRaces}/>
            </Paper>
          </Grid>
        </Grid>
        <Footer sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}

export default Home;
