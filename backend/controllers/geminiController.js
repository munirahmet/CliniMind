const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI("GEMINIAPI");

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const prompt = `Respond to the following message(Reply using text only, no titles etc.): ${message}`;
        const response = await model.generateContent([prompt]);
        res.json({ reply: response.response.text() });
    } catch (error) {
        console.error('Gemini API Error:', error.message);
        res.status(500).json({ error: 'Failed to process the message.' });
    }
};

module.exports = { sendMessage };
