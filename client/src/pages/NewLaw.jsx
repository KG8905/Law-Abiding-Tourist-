import React, { useState } from 'react';
import { FormControl, Select, InputLabel, MenuItem, Box } from '@mui/material';
import Page from "../components/Page";
import { Container } from "@mui/material";

const categories = [
  'Traffic',
  'Wildlife',
  'Civil',
  'Criminal',
  'Probate',
];

const allUsStates = [
  "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA",
  "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC",
  "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV",
  "WI", "WY"
];

const NewLaw = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [comments, setComments] = useState('');
  const [source, setSource] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      category,
      description,
      location,
      comments,
      source
    };
    setSubmittedData(formData);

    setTitle('');
    setCategory('');
    setDescription('');
    setLocation('');
    setComments('');
    setSource('');
  };

  const headContent = (
    <>
      <title>Laws</title>
      <meta name="description" content="Law." />
    </>
  );

  return (
    <Page isProtected={false} headContent={headContent}>
      <Container sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            width: "50%",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h1 style={{ textAlign: "center" }}>New Law</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Title</InputLabel>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter the title"
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    marginBottom: "20px",
                  }}
                />
              </FormControl>
            </div>

            <div className="form-group">
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
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
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
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

            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write your description here"
                required
                style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "20px" }}
              />
            </div>

            <div className="form-group">
              <label>Comments:</label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Comments"
                required
                style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "20px" }}
              />
            </div>

            <div className="form-group">
              <label>Source:</label>
              <textarea
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="What is your source"
                required
                style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "20px" }}
              />
            </div>

            <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "#1976d2", color: "#fff", borderRadius: "4px", border: "none", cursor: "pointer" }}>
              Submit
            </button>
          </form>

          {submittedData && (
            <div className="submission-output" style={{ marginTop: "20px" }}>
              <h2>Submitted Data</h2>
              <p><strong>Title:</strong> {submittedData.title}</p>
              <p><strong>Category:</strong> {submittedData.category}</p>
              <p><strong>Description:</strong> {submittedData.description}</p>
              <p><strong>Location:</strong> {submittedData.location}</p>
              <p><strong>Comments:</strong> {submittedData.comments}</p>
              <p><strong>Source:</strong> {submittedData.source}</p>
            </div>
          )}
        </Box>
      </Container>
    </Page>
  );
};

export default NewLaw;
