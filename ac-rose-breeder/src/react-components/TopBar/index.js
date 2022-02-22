import React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import YardIcon from '@mui/icons-material/Yard';

class TopBar extends React.Component {
    render() {
        return (<Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: "#000000"}}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <YardIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  AC Rose Breeder
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>);
    }
}

export default TopBar;