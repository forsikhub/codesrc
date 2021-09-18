import { Box, AppBar, Toolbar, Typography } from "@material-ui/core";
import React from 'react'
import BadgePopper from "./BadgePopper";

export default function ButtonAppBar() {
   
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
        </Typography>
        <BadgePopper />
        </Toolbar>
      </AppBar>
    </Box>
  );
}