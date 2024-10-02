import { Link } from "react-router-dom";
import AuthServices from "../utils/auth";
import { useGlobalContext } from "../context/GlobalContext";
import DarkThemeSelect from "./DarkThemeSelect";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"} style={styles.undecoratedLink}>
        <h1> Law Abiding Tourist</h1>
          </Link>
          </Typography>
          <DarkThemeSelect />
        {isAuthenticated && (
          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        )}
        {!isAuthenticated && (
          <Link to={"/signup"}>
            <button style={styles.button}>Sign Up</button>
          </Link>
        )}
        {!isAuthenticated && (
          <Link to={"/login"}>
            <button style={styles.button}>Login</button>
          </Link>
        )}
        {isAuthenticated && (
          <Link to={"/dashboard"}>
            <button style={styles.button}>Dashboard</button>
          </Link>
        )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
//   return (
//     <nav style={styles.container}>
//       <div style={styles.buttonDiv}>
//       </div>
//     </nav>
//   );
