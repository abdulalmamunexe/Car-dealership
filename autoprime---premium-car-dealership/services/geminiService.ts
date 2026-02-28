
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "AutoPrime AI Assistant". Your goal is to help users with:
1. Finding the right car in our inventory based on their needs (budget, family size, usage).
2. Providing estimated market valuations for their old cars.
3. Answering technical questions about specific car makes and models.

Be professional, helpful, and concise. 
If a user wants to sell a car, ask for the Year, Make, Model, Mileage, and Condition to give a rough "Dealer Quote" range.
Always encourage users to visit our showroom for a final inspection.
Our current inventory includes brands like Tesla, Toyota, Ford, Porsche, and Honda.
`;

export async function getChatResponse(history: Message[], userInput: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later!";
  }
}
