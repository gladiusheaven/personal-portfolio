import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA_CONTEXT } from '../context';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string): Promise<string> => {
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
    console.error("Error calling Gemini API:", error);
    return "Sorry, I'm having trouble connecting to the AI right now. Please check the console for more details and make sure the API key is configured correctly.";
  }
};
