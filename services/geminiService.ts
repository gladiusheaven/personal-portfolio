import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA_CONTEXT } from '../constants';

// FIX: Per @google/genai guidelines, check process.env.API_KEY directly instead of using a variable.
if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. AI Assistant will not work.");
}

// FIX: Per @google/genai guidelines, initialize GoogleGenAI with process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // FIX: Per @google/genai guidelines, check process.env.API_KEY directly.
  if (!process.env.API_KEY) {
    return "The AI assistant is currently unavailable because the API key is not configured.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: PORTFOLIO_DATA_CONTEXT,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Failed to get a response from the AI assistant.");
  }
};
