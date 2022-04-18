import { AppBar, Button, Toolbar, Typography, styled } from "@mui/material";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" sx={{ mr: 8 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Voteroo
            </Link>
          </Typography>
          <Button
            component={Link}
            to="/elections"
            color="inherit"
            sx={{ textTransform: "none", fontSize: "18px" }}
          >
            Elections
          </Button>
          <Button
            component={Link}
            to="/poll"
            color="inherit"
            sx={{ textTransform: "none", fontSize: "18px" }}
          >
            Poll
          </Button>
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
}
