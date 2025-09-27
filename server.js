// Import biblioteki Express
require('dotenv').config();
const express = require('express');
const Groq = require('groq-sdk');
const metaPrompts = require('./metaPrompt');
const groq = new Groq(process.env.GROQ_API_KEY);
// Stwórz aplikację
const app = express();
const port = 3000;
// Middleware - pozwala czytać JSON z żądań
app.use(express.json());
// Serwuj pliki statyczne (HTML, CSS, JS)
app.use(express.static('.'));


//nasłuchuj na post na endpoincie /api/generate
app.post('/api/generate', async (req, res) => {  //req = request, res = response
    console.log("Otrzymano żądanie z danymi:", req.body);
    const userPrompt = req.body.prompt;
    const metaPrompt = metaPrompts.improvePrompt.replace('{userPrompt}', userPrompt);
    try {
        const response = await groq.chat.completions.create({
            messages: [{ role: 'user', content: metaPrompt }],
            model: 'moonshotai/kimi-k2-instruct-0905', // Szybki model Groq
        });
        res.json({
            message: response.choices[0].message.content
        });
    } catch (error) {
        console.error("Błąd podczas generowania odpowiedzi:", error);
        res.status(500).json({ error: 'Wystąpił błąd podczas generowania odpowiedzi.' });
        return;
    }
});

app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});