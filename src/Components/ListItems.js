import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from '@mui/icons-material/Home';
import StarRateIcon from "@mui/icons-material/StarRate";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component="a" href="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton component="a" href="/rankings">
      <ListItemIcon>
        <StarRateIcon />
      </ListItemIcon>
      <ListItemText primary="Rankings" />
    </ListItemButton>
    <ListItemButton component="a" href="/drivers">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Drivers" />
    </ListItemButton>
  </React.Fragment>
);
