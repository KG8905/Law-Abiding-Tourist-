import Page from "../components/Page";
import { Box, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const headContent = (
  <>
    <title>Change Me! - Home</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Home() {
  return (
    <Page
      isProtected={false}
      headContent={headContent}
      // sx={{ p: 2, maxWidth: 1920, mx: "auto" }}
    >
      <Container>
        <Grid container>
          <Grid size={6}>hi</Grid>
          <Grid size={6}>hi</Grid>
        </Grid>
      </Container>
    </Page>
  );
}
