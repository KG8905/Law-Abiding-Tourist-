import * as React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useColorScheme } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function DarkThemeSelect() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  if (mode === "system") {
    setMode("light");
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
      {/* <MenuItem value="system">System</MenuItem> */}
      <MenuItem value="light">
        <LightModeIcon />
      </MenuItem>
      <MenuItem value="dark">
        <DarkModeIcon />
      </MenuItem>
    </Select>
  );
}
