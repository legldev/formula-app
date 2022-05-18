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
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const apiCalls = async () => {
      try {
        const firstPos = await api.getDrivers(2022);
        const nextRaces = await api.nextRace();
        const lastRace = await api.lastRace();
        setFirstPosition(firstPos.response);
        setNextRaces(nextRaces.response);
        setLastRace(lastRace.response);
      }
      catch(err) {
        console.error(err.error)
      }
      setLoading(true);
    };

    apiCalls();
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
              <FirstPosition load={loading} firstPosition={firstPosition[0]} />
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
              <LastRace load={loading} lastRace={lastRace[0]} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <NextRaces load={loading} nextRaces={nextRaces} />
            </Paper>
          </Grid>
        </Grid>
        <Footer sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}

export default Home;
