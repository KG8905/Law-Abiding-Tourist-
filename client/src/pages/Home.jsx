import Page from "../components/Page";
import { Box, Grid, Paper, Typography } from "@mui/material";

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
      sx={{ p: 2, maxWidth: 1920, mx: "auto" }}
    ></Page>
  );
}
