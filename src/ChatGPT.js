import axios from 'axios';

const API_ENDPOINT = '<YOUR_API_ENDPOINT>'; // Replace this with your actual API endpoint

async function generateResume(resume, jobDescription, specialRequests) {
  try {
    const response = await axios.post(API_ENDPOINT, {
      prompt: `Generate a resume for a ${jobDescription} position.\n\nResume: ${resume}\n\nSpecial requests: ${specialRequests}`,
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    return 'Error generating resume';
  }
}

export default generateResume;
