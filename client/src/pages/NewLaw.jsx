import React, { useState } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Box,
  Card,
  Stack,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import Page from "../components/Page";
import { useMutation } from "@apollo/client";
import { ADD_LAW } from "../graphql/mutations";
import Grid from "@mui/material/Grid2";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Form } from "react-router-dom";
import { QUERY_ME } from "../graphql/queries";
// import CardActions from "@mui/material/CardActions";

const styles = {
  form: {
    display: "flex",
    flexDirection: "Column",
    width: "300px",
  },
  submitBtn: {
    cursor: "pointer",
  },
};

const categories = ["Traffic", "Wildlife", "Civil", "Criminal", "Probate"];

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

const NewLaw = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [comments, setComments] = useState("");
  const [source, setSource] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const [createLaw, { loading }] = useMutation(ADD_LAW, {
    refetchQueries: [
      {
        query: QUERY_ME,
      },
    ],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      category,
      description,
      location,
      // comments,
      source,
    };
    // setSubmittedData(formData);

    await createLaw({
      variables: {
        lawInput: formData,
      },
    });

    setTitle("");
    setCategory("");
    setDescription("");
    setLocation("");
    setComments("");
    setSource("");
  };

  const headContent = (
    <>
      <title>Laws</title>
      <meta name="description" content="Law." />
    </>
  );

  return (
    <Page isProtected={false} headContent={headContent}>
      <Container
        sx={{
          height: "100vh",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ marginTop: 4 }}>
              <CardContent>
                <Stack spacing={4}>
                  <Typography
                    component="h1"
                    style={{ textAlign: "center" }}
                    variant="h4"
                    sx={{ width: "100%", fontSize: "clamp(12px)" }}
                  >
                    New Law
                  </Typography>
                  <Form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                      <TextField
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter the title"
                        required
                        fullWidth
                        sx={{
                          mb: 3,
                        }}
                        // multiline
                        // rows={2}
                      />
                      <div className="form-group">
                        <FormControl fullWidth>
                          <InputLabel id="category-label">Category</InputLabel>
                          <Select
                            labelId="category-label"
                            id="category-select"
                            value={category}
                            label="Category"
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            {categories.map((cat) => (
                              <MenuItem key={cat} value={cat}>
                                {cat}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                      <div className="form-group">
                        <FormControl fullWidth>
                          <InputLabel id="location-label">Location</InputLabel>
                          <Select
                            labelId="location-label"
                            id="location-select"
                            value={location}
                            label="Location"
                            onChange={(e) => setLocation(e.target.value)}
                          >
                            {allUsStates.map((local) => (
                              <MenuItem key={local} value={local}>
                                {local}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                      <TextField
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Write your description here"
                        required
                        fullWidth
                        multiline
                        rows={2}
                      />
                      {/* comments section */}
                      <TextField
                        type="text"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        placeholder="Write your description here"
                        required
                        fullWidth
                        multiline
                        rows={2}
                      />
                      <TextField
                        type="text"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        placeholder="What is your source"
                        required
                        fullWidth
                        multiline
                        rows={2}
                      />
                      <Button
                        type="submit"
                        style={styles.submitBtn}
                        variant="contained"
                      >
                        Submit
                      </Button>
                    </Stack>
                  </Form>

                  {submittedData && (
                    <div
                      className="submission-output"
                      style={{ marginTop: "20px" }}
                    >
                      <h2>Submitted Data</h2>
                      <p>
                        <strong>Title:</strong> {submittedData.title}
                      </p>
                      <p>
                        <strong>Category:</strong> {submittedData.category}
                      </p>
                      <p>
                        <strong>Description:</strong>{" "}
                        {submittedData.description}
                      </p>
                      <p>
                        <strong>Location:</strong> {submittedData.location}
                      </p>
                      <p>
                        <strong>Comments:</strong> {submittedData.comments}
                      </p>
                      <p>
                        <strong>Source:</strong> {submittedData.source}
                      </p>
                    </div>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* <Box
          sx={{
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            minWidth: "250px",
            backgroundColor: "",
          }}
        >
        </Box> */}
      </Container>
    </Page>
  );
};

export default NewLaw;
