import * as React from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { indigo, pink, teal, blueGrey } from '@mui/material/colors';

function MyApp() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        minHeight: '56px',
      }}
    >
      <Select value={mode} onChange={(event) => setMode(event.target.value)}>
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </Box>
  );
}

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#2c6ec3',
        },
        secondary: {
          main: '#f7055f',
        },
        background: {
          default: '#b6f3f3',
        },
        text: {
          primary: '#000000',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#0d47a1',
        },
        secondary: {
          main: '#f7055f',
        },
        background: {
          default: '#1b3734',
        },
        text: {
          primary: '#f5e8e8',
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