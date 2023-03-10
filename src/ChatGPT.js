import axios from 'axios';

const API_ENDPOINT = '//api.openai.com/v1/completions'; // Replace this with your actual API endpoint
// API Secret key
async function generateResume(resume, jobDescription, specialRequests) {
  console.log('Sending request...'); // Log that the request is being sent
  try {
    const response = await axios.post(API_ENDPOINT, {
      prompt: `Generate a resume for a ${jobDescription} position.\n\nResume: ${resume}\n\nSpecial requests: ${specialRequests}`,
    }, {
      headers: {
        'Authorization': `Bearer ${API_SECRET_KEY}`
      }
    });

    console.log(response.data); // Log the response data to the console
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    return 'Error generating resume';
  } finally {
    console.log('Request completed.'); // Log that the request is completed, whether successful or not
  }
}

async function generateCoverLetter(name, company, content) {
  try {
    const response = await axios.post(API_ENDPOINT, {
      prompt: `Generate a cover letter for ${name} applying to ${company}.\n\nContent: ${content}`,
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    return 'Error generating cover letter';
  }
}

export { generateResume, generateCoverLetter };
