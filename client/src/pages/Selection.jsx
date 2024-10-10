import { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  CircularProgress,
  CardContent,
  Card,
  Stack,
  Divider,
} from "@mui/material";
import Page from "../components/Page";
import { QUERY_LAWS_BY_LOCATION } from "../graphql/queries";
import { useLazyQuery } from "@apollo/client";

// Memoized list of all U.S. states to avoid recreation on each render
const allUsStates = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const headContent = (
  <>
    <title>Laws by Location</title>
    <meta name="description" content="Select a location to view its laws." />
  </>
);

export default function Selection() {
  const [location, setLocation] = useState("");

  // Lazy query hook to fetch laws
  const [getLaws, { loading, error, data }] = useLazyQuery(
    QUERY_LAWS_BY_LOCATION
  );

  // Handler for location change
  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setLocation(selectedLocation);
    getLaws({ variables: { location: selectedLocation } });
  };

  return (
    <Page isProtected={false} headContent={headContent}>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              id="location-select"
              value={location}
              label="Location"
              onChange={handleLocationChange}
            >
              {allUsStates.map((local) => (
                <MenuItem key={local} value={local}>
                  {local}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {loading && <CircularProgress />}

          {error && (
            <Typography color="error">
              Error fetching data. Please try again later.
            </Typography>
          )}

          {data && data.location && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Laws for {location}:
              </Typography>
              {data.location.map((law) => (
                <Card key={law.id} sx={{ margin: 2, width: "100%" }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h6">Title: {law.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Category: {law.category}
                      </Typography>
                      <Typography variant="body1">Description: {law.description}</Typography>
                      <Typography variant="caption">
                        Source: {law.source}
                      </Typography>

                      <Divider sx={{ marginY: 1 }} />

                      <Typography variant="h6">Comments</Typography>
                      {law.comments.length > 0 ? (
                        law.comments.map((comment, index) => (
                          <Box
                            key={index}
                            sx={{
                              padding: 1,
                              borderBottom: "1px solid #e0e0e0",
                            }}
                          >
                            <Typography variant="subtitle2">
                              {comment.user}:
                            </Typography>
                            <Typography variant="body2">
                              {comment.text}
                            </Typography>
                          </Box>
                        ))
                      ) : (
                        <Typography variant="body2">
                          No comments yet.
                        </Typography>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Page>
  );
}
