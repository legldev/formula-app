import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Title from "../Components/Title";
import Footer from "../Components/Footer";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import * as api from "../Services";

function Drivers() {
  const [drivers, setDrivers] = React.useState([]);

  React.useEffect(() => {
    const apiCalls = async () => {
      try {
        const driverRes = await api.getDrivers(2022);
        setDrivers(driverRes.response);
      }
      catch(err) {
        console.error(err.error)
      }
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
        <Title>Drivers Positions Season 2022</Title>
        <Grid container spacing={3}>
          {/* Drivers Positions Table */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Position</TableCell>
                      <TableCell>Driver</TableCell>
                      <TableCell>Team</TableCell>
                      <TableCell align="right">Points</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {drivers.map((row) => (
                      <TableRow
                        key={row.position}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left">{row.position}</TableCell>
                        <TableCell component="th" scope="row">
                          <img
                            src={row.driver.image}
                            width="50"
                            alt={row.driver.name}
                          />
                          {row.driver.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <img
                            src={row.team.logo}
                            width="50"
                            alt={row.team.name}
                          />
                          {row.team.name}
                        </TableCell>
                        <TableCell align="right">{row.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
        <Footer sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}

export default Drivers;
