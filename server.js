require('dotenv').config();
const fs = require('fs');
const express = require('express');
const Groq = require('groq-sdk');
const { get_encoding, encodingForModel } = require("js-tiktoken");

const enc = encodingForModel("gpt-4o"); 
const metaPrompts = require('./metaPrompt');
const evaluationPrompt = require('./evaluationPrompt');

const groq = new Groq(process.env.GROQ_API_KEY);

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('.'));

app.post('/api/generate', async (req, res) => {
    const userPrompt = req.body.prompt;
    const metaPrompt = metaPrompts.improvePrompt.replace('{userPrompt}', userPrompt);
    try {
        const response = await groq.chat.completions.create({
            messages: [{ role: 'user', content: metaPrompt }],
            model: 'moonshotai/kimi-k2-instruct-0905', 
        });
        
        const evaluationPrompts = evaluationPrompt.improvePrompt.replace('{userPrompt}', userPrompt).replace('{improvedPrompt}', response.choices[0].message.content);
        
        const evaluationResponse = await groq.chat.completions.create({
            messages: [{ role: 'user', content: evaluationPrompts }],
            model: 'moonshotai/kimi-k2-instruct-0905',
        });

        res.json({
            message: response.choices[0].message.content,
            evaluation: evaluationResponse.choices[0].message.content
        });
    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ error: 'error' });
    }

});

app.listen(port, () => {
    console.log(`serwer: http://localhost:${port}`);
});