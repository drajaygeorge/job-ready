import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <span role="img" aria-label="job-application">📄</span>
      <h1>Job Ready</h1>
      <p className="description">
        Job Ready is a web app that helps you create personalized and formatted resumes and cover letters using OpenAI's GPT-3. Just paste your current resume, the targeted job description, and the desired tone, and Job Ready will provide you with a recommended output.
      </p>
      <div className="buttons-container">
        <Link to="/resume"><button>Resume</button></Link>
        <Link to="/cover-letter"><button>Cover Letter</button></Link>
      </div>
    </div>
  );
}

export default Home;
