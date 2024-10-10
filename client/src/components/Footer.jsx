import { Typography, Box, ThemeProvider} from "@mui/material";
import DarkThemeSelect from "./DarkThemeSelect";


const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
};



export default function Footer() {
  return (
    <Box sx={{ backgroundColor: 'background.footer' }}>
      <typography variant="h5" component="h2" style={styles.container}>
        Copyrights to Team L.O.T @ 2024
      </typography>

    </Box>
    
  );
}
