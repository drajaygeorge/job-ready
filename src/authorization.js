const API_ENDPOINT = '//api.openai.com/v1/completions';
const API_SECRET_KEY = '<YOUR_API_SECRET_KEY>';

async function generateResume(resume, jobDescription, specialRequests) {
  try {
    const response = await axios.post(API_ENDPOINT, {
      prompt: `Generate a resume for a ${jobDescription} position.\n\nResume: ${resume}\n\nSpecial requests: ${specialRequests}`,
    }, {
      headers: {
        'Authorization': `Bearer ${API_SECRET_KEY}`
      }
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    return 'Error generating resume';
  }
}

async function generateCoverLetter(name, company, content) {
  try {
    const response = await axios.post(API_ENDPOINT, {
      prompt: `Generate a cover letter for ${name} applying to ${company}.\n\nContent: ${content}`,
    }, {
      headers: {
        'Authorization': `Bearer ${API_SECRET_KEY}`
      }
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    return 'Error generating cover letter';
  }
}

export { generateResume, generateCoverLetter };
