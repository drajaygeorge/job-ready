import React from 'react';

const CoverLetterForm = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" name="phone" />
      </label>
      <br />
      <label>
        Cover Letter:
        <textarea name="coverLetter"></textarea>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CoverLetterForm;
