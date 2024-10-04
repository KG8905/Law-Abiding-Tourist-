import React, { useState } from 'react';
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';

const categories = [
  'Traffic',
  'Wildlife',
  'Civil',
  'Criminal',
  'Probate',
]

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
  "WY"
]

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



return (
    <div className="form-container">
    <h1>New Law</h1>
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title"
          required
        />
      </div>

        {/* Select from MUI */}
        <div className="form-group">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={categories}
              label="Category"
              // onChange={handleChange}
            >
              {categories.map((category) => {
                return (
                  <MenuItem value={category}>category</MenuItem>
                )
              })}
              {/* <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </div>
        
      <div className="form-group">
        <label>Location:</label>
        <textarea
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="What is your location"
          required
        />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write your description here"
          required
        />
      </div>


      <div className="form-group">
        <label>Comments:</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Comments"
          required
        />
      </div>

      <div className="form-group">
        <label>Source:</label>
        <textarea
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="What is your source"
          required
        />
      </div>



      <button type="submit">Submit</button>
    </form>

    {submittedData && (
      <div className="submission-output">
        <h2>Submitted Data</h2>
        <p><strong>Title:</strong> {submittedData.title}</p>
        <p><strong>Category:</strong> {submittedData.category}</p>
        <p><strong>Description:</strong> {submittedData.description}</p>
        <p><strong>Location:</strong> {submittedData.location}</p>
        <p><strong>Comments:</strong> {submittedData.comments}</p>
        <p><strong>Source</strong> {submittedData.source}</p>
      </div>
    )}
  </div>
);
};

export default NewLaw;