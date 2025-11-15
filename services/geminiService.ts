export const sendMessageToGemini = async (message: string): Promise<string> => {
  // The backend server is expected to be running on localhost:3001 during development.
  const API_URL = 'http://localhost:3001/api/chat';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server responded with an error:", errorData);
      return `Sorry, there was an error from the server: ${errorData.error || 'Unknown error'}`;
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error communicating with the backend:", error);
    // This error often means the backend server isn't running.
    if (error instanceof TypeError) { 
        return "I can't seem to reach my own brain right now (the backend server). Have you started it with `npm run dev`?";
    }
    return "Sorry, I'm having trouble connecting right now. Please try again later.";
  }
};
