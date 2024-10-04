import { Typography, Box, ThemeProvider} from "@mui/material";
import DarkThemeSelect from "./DarkThemeSelect";


const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
};



export default function Footer() {
  return (
    <Box sx={{ backgroundColor: 'background.footer' }}>
      <typography variant="h5" component="h2" style={styles.container}>
        This is the Starter Code Footer
      </typography>

    </Box>
    
  );
}
