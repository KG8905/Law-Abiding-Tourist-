import React from "react";
import Page from "../components/Page";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

const headContent = (
  <>
    <title>Travel! - Home</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

const BackgroundImage = styled(Box)({
  backgroundImage:
    'url("https://images.unsplash.com/photo-1497302347632-904729bc24aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // minHeight: "100vh",
  display: "flex",
  flexGrow: 1,
  // flexDirection: "column",
  // background: "rgba(255, 255, 255, 0.2)",
  // backdropFilter: "blur(10px)",
  // "-webkit-backdrop-filter": "blur(10px)",
  // borderRadius: "10px",
  // border: "1px solid rgba(255, 255, 255, 0.3)",
  // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  // overflow: "hidden",
  // opacity: "0.9",
});

export default function Home() {
  return (
    <Page isProtected={false} headContent={headContent}>
      <BackgroundImage>
        <Container
          sx={{
            my: 4,
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Typography
              variant="h1"
              // component="h1"
              gutterBottom
              color="black"
              textAlign="center"
              sx={{
                fontWeight: "bold",
              }}
            >
              Lets Travel to a New Place
            </Typography>
            <Link to="/newlaw">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
              >
                Start Here!
              </Button>
            </Link>
            <Typography
              variant="body1"
              color="black"
              sx={{ fontWeight: "bold", marginTop: 2 }}
            >
              Discover the experience
            </Typography>
          </Box>
          <Grid item md={12} xl={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            ></Box>
          </Grid>
        </Container>
      </BackgroundImage>
    </Page>
  );
}
