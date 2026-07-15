import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

async function listModels() {
  if (!apiKey) {
    console.error("No API key found in .env");
    return;
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.models) {
      console.log("Available models:");
      data.models.forEach((m: any) => {
        if (m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent')) {
          console.log(`- ${m.name} (Version: ${m.version}, Description: ${m.description})`);
        }
      });
    } else {
      console.error("Error fetching models:", data);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
}

listModels();
