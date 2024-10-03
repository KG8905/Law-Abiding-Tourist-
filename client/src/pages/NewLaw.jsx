import React, { useState } from 'react';

const categories = [
  'Traffic',
  'Hunting'
]

const allUsStates = [
  
]

const NewLaw = () => {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title,
            subject,
            content,
        };
        setSubmittedData(formData);

        setTitle('');  
        setSubject('');
        setContent('');
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
        <label>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter the subject"
          required
        />
      </div>

      <div className="form-group">
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content here"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>

    {submittedData && (
      <div className="submission-output">
        <h2>Submitted Data</h2>
        <p><strong>Title:</strong> {submittedData.title}</p>
        <p><strong>Subject:</strong> {submittedData.subject}</p>
        <p><strong>Content:</strong> {submittedData.content}</p>
      </div>
    )}
  </div>
);
};

export default NewLaw;