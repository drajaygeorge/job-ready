import { useState } from 'react';
import './App.css';

function App() {
  const [showResumeFields, setShowResumeFields] = useState(false);
  const [showCoverLetterFields, setShowCoverLetterFields] = useState(false);

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
          <div className="text-fields-container">
            <label htmlFor="resume-name">Name</label>
            <input type="text" id="resume-name" placeholder="Enter your name" />

            <label htmlFor="resume-experience">Experience</label>
            <textarea id="resume-experience" placeholder="Enter your work experience"></textarea>

            <label htmlFor="resume-skills">Skills</label>
            <textarea id="resume-skills" placeholder="Enter your skills"></textarea>
          </div>
        )}
        {showCoverLetterFields && (
          <div className="text-fields-container">
            <label htmlFor="cover-letter-name">Name</label>
            <input type="text" id="cover-letter-name" placeholder="Enter your name" />

            <label htmlFor="cover-letter-company">Company</label>
            <input type="text" id="cover-letter-company" placeholder="Enter the company name" />

            <label htmlFor="cover-letter-content">Content</label>
            <textarea id="cover-letter-content" placeholder="Enter your cover letter content"></textarea>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
