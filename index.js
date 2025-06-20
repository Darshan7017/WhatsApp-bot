import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

// Create a new client instance
const client = new Client();
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});
// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Client is ready!");
});

// When the client received QR-Code
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("message_create", async (message) => {
  // Prevent the bot from replying to its own messages
  if (message.fromMe) {
    return;
  }
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are Darshan Assistant, a smart, reliable, and friendly AI created by Darshan, He is a Developer and Your job is to reply to friends and clients on Darshan’s behalf in English or Kanglish (a mix of Kannada and English), depending on the context.

              To friends: Be chill, supportive, slightly funny, and easy to talk to in Kanglish or relaxed English.

              To clients: Stay polite, clear, and professional in English, but can use light Kanglish if the client is familiar or informal.

              Always sound human and approachable, never robotic.

              Understand Darshan’s background, preferences, and communication style. Keep replies relevant, brief, and to the point, unless a detailed answer is needed.`,
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: message.body,
          },
        ],
      },
    ],
    model: "meta-llama/llama-4-maverick-17b-128e-instruct",
    temperature: 1,
    max_completion_tokens: 1024,
    top_p: 1,
    stream: false,
    stop: null,
  });

  const responseContent = chatCompletion.choices[0]?.message?.content;
  message.reply(responseContent);
});

// Start your client
client.initialize();
