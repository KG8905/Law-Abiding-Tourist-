import * as React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useColorScheme } from "@mui/material/styles";

export default function DarkThemeSelect() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  //! Changed the style of the box to make it more stream-line (pn)
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     width: '80px',
    //     height: '55px',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     bgcolor: 'background.default',
    //     color: 'text.primary',
    //     borderRadius: 1,
    //     p: 3,
    //     minHeight: '50px',
    //   }}
    // >
    // </Box>
    <Select
      value={mode}
      onChange={(event) => setMode(event.target.value)}
      size="small"
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}
