import * as React from "react";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { indigo, pink, teal, blueGrey } from "@mui/material/colors";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#2c6ec3",
        },
        secondary: {
          main: "#f7055f",
        },
        background: {
          footer: '#ffc107',
          default: "#EAF1F9",
        },
        text: {
          primary: "#000000",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#272727",
        },
        secondary: {
          main: "#f7055f",
        },
        background: {
          footer: '#b28704',
          default: "#212121",
        },
        text: {
          primary: "#f5e8e8",
        },
      },
    },
  },
});

export default function MuiTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
