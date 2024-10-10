import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Page from "../components/Page";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const styles = {
  page: {
    py: 4,
  },

  //   container: {
  //     // display: "flex",
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     // alignItems: "center",
  //     position: "fixed",
  //     top: "0",
  //     width: "100%",
  //   },
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

const headContent = (
  <>
    <title>About</title>
    <meta name="description" content="Law." />
  </>
);

const About = () => {
  return (
    <Page isProtected={false} headContent={headContent}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={4}>
          <Grid size={12}>
            <Typography variant="h3">About</Typography>
            <Typography variant="body1">
              {" "}
              Law Abiding Tourist was created to help people who love to travel
              have the best experiences on vacation. We wanted to ensure that
              the laws for each state were represented correctly for each person
              and also provide a central location for laws instead of having to
              scour the internet using Google or Yahoo.{" "}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  m: 6,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: "5rem" }} />
                </Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Shaketa Giles
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Description: Project Manger & The Queen of Sitcoms
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button variant="contained" style={styles.button} size="small">
                  Share
                </Button>
                <a href="https://github.com/KG8905" target="_blank">
                  <Button
                    variant="contained"
                    style={styles.button}
                    size="small"
                  >
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  m: 6,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: "5rem" }} />
                </Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Emmanuel Jatto
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Description: Backend Developer & Master of The Matrix
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button variant="contained" style={styles.button} size="small">
                  Share
                </Button>
                <a href="https://github.com/Emmanueljatto" target="_blank">
                  <Button
                    variant="contained"
                    style={styles.button}
                    size="small"
                  >
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  m: 6,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: "5rem" }} />
                </Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Zeke Tinch
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Description: Front/Backend & Jack of All Trades
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button variant="contained" style={styles.button} size="small">
                  Share
                </Button>
                <a href="https://github.com/ZekeTinch" target="_blank">
                  <Button
                    variant="contained"
                    style={styles.button}
                    size="small"
                  >
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  m: 6,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: "5rem" }} />
                </Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Jeremy Brown
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Description: Back End Developer & Master of Cleaver Puns
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button variant="contained" style={styles.button} size="small">
                  Share
                </Button>
                <a href="https://github.com/JB0341" target="_blank">
                  <Button
                    variant="contained"
                    style={styles.button}
                    size="small"
                  >
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  m: 6,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: "5rem" }} />
                </Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Phillip Navarre
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Description: Lead Designer & Master of Nations
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button variant="contained" style={styles.button} size="small">
                  Share
                </Button>
                <a href="https://github.com/One4TheNation" target="_blank">
                  <Button
                    variant="contained"
                    style={styles.button}
                    size="small"
                  >
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  m: 6,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: "5rem" }} />
                </Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Matthew Comer
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Description: Front End Developer & Resident Lego Master
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button variant="contained" style={styles.button} size="small">
                  Share
                </Button>
                <a href="https://github.com/ut463" target="_blank">
                  <Button
                    variant="contained"
                    style={styles.button}
                    size="small"
                  >
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default About;
