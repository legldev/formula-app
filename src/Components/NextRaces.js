import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Loader from "./Loader";
import { formatDate } from "../Helpers/utils";

export default function NextRaces({ nextRaces, load }) {
  return (
    <React.Fragment>
      <Title>Next Races</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Circuit</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>City</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {load ? ( Object.keys(nextRaces).map((row) => 
              <TableRow key={nextRaces[row].id}>
                <TableCell>{formatDate(nextRaces[row].date)}</TableCell>
                <TableCell>{nextRaces[row].circuit.name}</TableCell>
                <TableCell>{nextRaces[row].competition.location.country}</TableCell>
                <TableCell>{nextRaces[row].competition.location.city}</TableCell>
                <TableCell align="right">{nextRaces[row].status}</TableCell>
              </TableRow>
           )) : (
              <Loader />
            )
          }
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
