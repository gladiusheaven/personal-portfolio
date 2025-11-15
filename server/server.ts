import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import { PORTFOLIO_DATA_CONTEXT } from './context';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3001;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Gemini AI Setup ---
if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set. Please create a .env file and add your API_KEY.");
}
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// --- API Routes ---
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required in the request body.' });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: PORTFOLIO_DATA_CONTEXT,
      }
    });
    
    res.json({ text: response.text });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: 'An error occurred while communicating with the AI assistant.' });
  }
});

// --- Server Startup ---
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
  console.log('You can now open the index.html file in your browser to use the portfolio.');
});
