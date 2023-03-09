import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ type }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [company, setCompany] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary action with the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      {type === 'resume' && (
        <>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="experience">Experience</label>
          <textarea
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Enter your work experience"
            required
          ></textarea>

          <label htmlFor="skills">Skills</label>
          <textarea
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Enter your skills"
            required
          ></textarea>
        </>
      )}
      {type === 'cover-letter' && (
        <>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter the company name"
            required
          />

          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your cover letter content"
            required
          ></textarea>
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf(['resume', 'cover-letter']).isRequired,
};

export default Form;
