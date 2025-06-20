# WhatsApp Bot

## Description
An AI-powered WhatsApp bot designed to reply to messages on behalf of Darshan, a developer. This bot leverages the Groq API for intelligent responses and is capable of communicating in both English and Kanglish (a blend of Kannada and English), adapting its tone based on the context of the conversation.

## Features
*   **AI-Powered Responses:** Utilizes the Groq API for intelligent and context-aware replies.
*   **WhatsApp Integration:** Seamlessly integrates with WhatsApp for sending and receiving messages.
*   **Contextual Communication:** Adapts communication style (friendly/chill for friends, professional for clients).
*   **Multilingual Support:** Supports communication in both English and Kanglish.

## Technologies Used
*   [Node.js](https://nodejs.org/)
*   [whatsapp-web.js](https://wwebjs.dev/)
*   [Groq SDK](https://console.groq.com/docs/)
*   [dotenv](https://www.npmjs.com/package/dotenv)

## Installation and Setup

### Prerequisites
*   Node.js (LTS version recommended)
*   npm or pnpm

### Installation Steps
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Darshan7017/WhatsApp-bot.git
    cd WhatsApp-bot
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use pnpm
    pnpm install
    ```

### Configuration
1.  **Create a `.env` file:**
    Create a file named `.env` in the root directory of the project.
2.  **Add your Groq API Key:**
    Obtain your API key from [Groq Console](https://console.groq.com/) and add it to your `.env` file:
    ```
    GROQ_API_KEY="YOUR_GROQ_API_KEY"
    ```

## How to Run

To start the bot, run the following command in your terminal:

```bash
node index.js
# or if you have configured a "start" script in package.json
npm start
# or
pnpm start
```

Upon running, a QR code will be displayed in your terminal. Scan this QR code using your WhatsApp mobile app to link your account.

## Contribution
Feel free to fork the repository, open issues, or submit pull requests. Any contributions are welcome!

## License
This project is open-source and available under the MIT License.

## Contact
For any inquiries, please reach out to Darshan at darshangangadhar201@gmail.com.
