import { Link } from "react-router-dom";
import AuthServices from "../utils/auth";
import { useGlobalContext } from "../context/GlobalContext";
import DarkThemeSelect from "./DarkThemeSelect";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack, useColorScheme, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: "0",
    width: "100%",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    margin: "0.5rem",
  },
  undecoratedLink: {
    textDecoration: "none",
    color: "inherit",
  },
};

export default function Header() {
  const [state, dispatch] = useGlobalContext();
  const { isAuthenticated } = state;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleLogout = (e) => {
    AuthServices.logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack direction={"row"} spacing={1} sx={{ alignItems: "center" }}>
              <Link to={"/"} style={styles.undecoratedLink}>
                <Typography
                  variant="h5"
                  sx={{ display: "inline-block", color: "inherit" }}
                >
                  Law Abiding Tourist
                </Typography>
              </Link>

              <Link to={"/about"}>
                <Button variant="contained" style={styles.button}>
                  About
                </Button>
              </Link>

              <Link to={"/selection"}>
                <Button variant="contained" style={styles.button}>
                  Selection
                </Button>
              </Link>

              <Link to={"/newlaw"}>
                <Button variant="contained" style={styles.button}>
                  Laws
                </Button>
              </Link>
            </Stack>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="x-large"
              edge="start"
              color="inherit"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              id="menu-btn"
            >
              <MenuIcon sx={{ m: 2 }} />
            </IconButton>
            <Menu
              open={open}
              onClose={() => setAnchorEl(null)}
              id="menu-btn"
              anchorEl={anchorEl}
            >
              <MenuItem sx={{ color: "#2c6ec3" }}>
                <Link to={"/signup"} style={styles.undecoratedLink}>
                  <Typography>Sign Up</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/dashboard"} style={styles.undecoratedLink}>
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/about"} style={styles.undecoratedLink}>
                  About
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/selection"} style={styles.undecoratedLink}>
                  Selection
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/newlaw"} style={styles.undecoratedLink}>
                  Laws
                </Link>
              </MenuItem>
            </Menu>
            <Typography
              variant="h6"
              sx={{
                display: "inline-block",
                px: 4,
                m: "auto",
                align: "center",
              }}
            >
              Law Abiding Tourist
            </Typography>
          </Box>
          <DarkThemeSelect />
          {isAuthenticated && (
            <Button
              variant="contained"
              onClick={handleLogout}
              style={styles.button}
            >
              Logout
            </Button>
          )}
          {!isAuthenticated && (
            <Link to={"/signup"}>
              <Button
                variant="contained"
                style={styles.button}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Sign Up
              </Button>
            </Link>
          )}
          {!isAuthenticated && (
            <Link to={"/login"}>
              <Button variant="contained" style={styles.button}>
                Login
              </Button>
            </Link>
          )}
          {isAuthenticated && (
            <Link to={"/dashboard"}>
              <Button variant="contained" style={styles.button}>
                Dashboard
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
