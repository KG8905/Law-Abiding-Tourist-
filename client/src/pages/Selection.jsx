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
  Stack
} from "@mui/material";
import Page from "../components/Page";
import { QUERY_LAWS_BY_LOCATION } from "../graphql/queries";
import { useLazyQuery } from "@apollo/client";

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
  // State to track the selected location
  const [location, setLocation] = useState("");

  // Lazy query hook to fetch laws
  const [getLaws, { loading, error, data }] = useLazyQuery(QUERY_LAWS_BY_LOCATION);

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
          {data && data.location && (
            <Box>
              <Typography variant="h6">Laws for {location}:</Typography>
              {data.location.map((law) => (
                <Card>
                  <CardContent>
                    <Stack spacing={4}>
                    <Typography key={law.id} variant="body1">
                        {law.title}
                      </Typography>
                      <Typography key={law.id} variant="body1">
                        {law.description}
                      </Typography>

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
