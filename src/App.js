import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ResumeForm from './components/ResumeForm';
import CoverLetterForm from './components/CoverLetterForm';
import Navigation from './components/Navigation';

function App() {
  const [showResumeFields, setShowResumeFields] = useState(false);
  const [showCoverLetterFields, setShowCoverLetterFields] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <span role="img" aria-label="job-application">📄</span>
          <h1>Job Ready</h1>
          <p className="description">
            Job Ready is a web app that helps you create personalized and formatted resumes and cover letters using OpenAI's GPT-3. Just paste your current resume, the targeted job description, and the desired tone, and Job Ready will provide you with a recommended output.
          </p>
          <Navigation />
          <Switch>
            <Route exact path="/resume" component={ResumeForm} />
            <Route exact path="/cover-letter" component={CoverLetterForm} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
