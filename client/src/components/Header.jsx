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
import { Stack } from "@mui/material";

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
  },
};

export default function Header() {
  const [state, dispatch] = useGlobalContext();
  const { isAuthenticated } = state;

  const handleLogout = (e) => {
    AuthServices.logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Stack direction={"row"} spacing={1} sx={{ alignItems: "center" }}>
              <Link to={"/"} style={styles.undecoratedLink}>
                <Typography variant="h5" sx={{ display: "inline-block" }}>
                  Law Abiding Tourist
                </Typography>
              </Link>

              <Link to={"/about"}>
                <Button
                  variant="contained"
                  onClick={handleLogout}
                  style={styles.button}
                >
                  About
                </Button>
              </Link>

              <Link to={"/selection"}>
                <Button
                  variant="contained"
                  onClick={handleLogout}
                  style={styles.button}
                >
                  Selection
                </Button>
              </Link>

              <Link to={"/newlaw"}>
                <Button
                  variant="contained"
                  onClick={handleLogout}
                  style={styles.button}
                >
                  Laws
                </Button>
              </Link>
            </Stack>
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
              <Button variant="contained" style={styles.button}>
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
