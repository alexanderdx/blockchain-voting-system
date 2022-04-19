import {
  AppBar,
  Button,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h5" sx={{ mr: "8rem" }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Voteroo
              </Link>
            </Typography>
            <Button
              component={Link}
              to="/elections"
              color="inherit"
              sx={{ textTransform: "none", fontSize: "16px" }}
            >
              Elections
            </Button>
            <Button
              component={Link}
              to="/poll"
              color="inherit"
              sx={{ textTransform: "none", fontSize: "16px" }}
            >
              Poll
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </div>
  );
}
