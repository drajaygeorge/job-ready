import { useState } from 'react';
import './App.css';
import generateResume from './ChatGPT';
import axios from 'axios';

function App() {
  const [showResumeFields, setShowResumeFields] = useState(false);
  const [showCoverLetterFields, setShowCoverLetterFields] = useState(false);
  const [output, setOutput] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const resume = document.getElementById('current-resume').value;
    const jobDescription = document.getElementById('job-description').value;
    const specialRequests = document.getElementById('special-requests').value;

    const response = await generateResume(resume, jobDescription, specialRequests);
    setOutput(response);
  }

  const generateCoverLetter = async () => {
    const name = document.getElementById('cover-letter-name').value;
    const company = document.getElementById('cover-letter-company').value;
    const content = document.getElementById('cover-letter-content').value;

    const response = await axios.post('/api/generateCoverLetter', {
      name,
      company,
      content,
    });

    setOutput(response.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <span role="img" aria-label="job-application">📄</span>
        <h1>Job Ready</h1>
        <p className="description">
          Job Ready is a web app that helps you create personalized and formatted resumes and cover letters using OpenAI's GPT-3. Just paste your current resume, the targeted job description, and the desired tone, and Job Ready will provide you with a recommended output.
        </p>
        <div className="buttons-container">
          <button onClick={() => {setShowResumeFields(true); setShowCoverLetterFields(false)}}>Resume</button>
          <button onClick={() => {setShowCoverLetterFields(true); setShowResumeFields(false)}}>Cover Letter</button>
        </div>
        {showResumeFields && (
          <form onSubmit={handleSubmit}>
            <div className="text-fields-container">
              <label htmlFor="current-resume">Current Resume</label>
              <textarea type="text" id="current-resume" className="large-textarea" placeholder="Enter your current resume"></textarea>

              <label htmlFor="job-description">Description and details of job you are applying to</label>
              <textarea type="text" id="job-description" className="large-textarea" placeholder="Enter the job description"></textarea>

              <label htmlFor="special-requests">Any special requests</label>
              <textarea id="special-requests" className="large-textarea" placeholder="Enter any special requests"></textarea>

              <button type="submit">Generate Resume</button>
            </div>
          </form>
        )}
        {showCoverLetterFields && (
          <div className="form-fields-container">
            <label htmlFor="cover-letter-name">Name</label>
            <input type="text" id="cover-letter-name" className="large-input" placeholder="Enter your name" />

            <label htmlFor="cover-letter-company">Company</label>
            <input type="text" id="cover-letter-company" className="large-input" placeholder="Enter the company name" />

            <label htmlFor="cover-letter-content">Content</label>
            <textarea id="cover-letter-content" className="large-textarea" placeholder="Enter your cover letter content"></textarea>

            <button onClick={generateCoverLetter}>Generate Cover Letter</button>
          </div>
        )}
        <div className="output-container">
          {output}
        </div>
      </header>
    </div>
  );

}

export default App;
