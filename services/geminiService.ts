import { GoogleGenAI } from "@google/genai";
import { PACKAGES } from "../constants";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION_CHAT = `
You are 'Tropicam Bot', the AI assistant for Tropicam Voyage, Morocco's #1 travel agency. 
Your goal is to help Moroccans plan their trips, suggesting packages, and encouraging them to book via WhatsApp.

Tone: Professional, warm, welcoming. 
Languages: French (primary), but you can use some Moroccan Darija expressions (e.g., "Merhba", "Inchaallah", "Machi mouchkil") to build trust.

Key Information to know:
- We offer Flights, Hotels, Omra, Turkey, Dubai, Europe, Asia.
- We focus on best prices and premium service.
- If a user asks for a price, refer to general "starting from" prices if exact ones aren't available, or refer to the provided context.
- ALWAYS encourage the user to contact us on WhatsApp for the final booking.

Context (Current Packages):
${JSON.stringify(PACKAGES.map(p => `${p.title} to ${p.destination} for ${p.price} MAD`))}

If the user asks for something we don't have, offer to create a "Voyage à la carte" (Custom trip).
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: string[] }[]) => {
  try {
    const model = 'gemini-2.5-flash';
    // Construct chat history format for the API
    const chat = ai.chats.create({
        model: model,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION_CHAT,
        }
    });

    // NOTE: In a real app, we would hydrate 'chat' with 'history' here.
    // For this demo, we'll just send the new message as a single turn or rely on internal state if persistent.
    // To keep it simple and functional for this "stateless" service call pattern:
    
    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Désolé, je rencontre un problème technique. Veuillez nous contacter sur WhatsApp directement.";
  }
};

export const generateBlogPost = async (topic: string) => {
  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
        model: model,
        contents: `Write a short, SEO-optimized travel blog post title and summary (max 100 words) in French for a Moroccan audience about: "${topic}". 
        Include a title and body. Format plain text.
        Make it sound exciting and urgent.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Blog Error:", error);
    return null;
  }
};