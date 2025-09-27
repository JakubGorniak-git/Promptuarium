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

app.post('/api/generate', async (req, res) => {  //req = request, res = response
    console.log("Otrzymano żądanie z danymi:", req.body);
    const userPrompt = req.body.prompt;
    const metaPrompt = metaPrompts.improvePrompt.replace('{userPrompt}', userPrompt);

    try {
        const response = await groq.chat.completions.create({
            messages: [{ role: 'user', content: metaPrompt }],
            model: 'moonshotai/kimi-k2-instruct-0905', // Szybki model Groq
        });

        const evaluationPrompts = evaluationPrompt.improvePrompt.replace('{userPrompt}', userPrompt).replace('{improvedPrompt}', response.choices[0].message.content);

        const evaluationResponse = await groq.chat.completions.create({
            messages: [{ role: 'user', content: evaluationPrompts }],
            model: 'moonshotai/kimi-k2-instruct-0905', // Szybki model Groq
        });

        //console.log("Wygenerowano odpowiedź:", response.choices[0].message.content);
        //console.log("Liczba użytych tokenów:", response.usage.total_tokens);

        //const userPromptCost = enc.encode(userPrompt); 
        //const metaPromptCost = enc.encode(response.choices[0].message.content);

        //console.log("Koszt prostego promptu:", userPromptCost.length, "tokenów");
        //console.log("Koszt ulepszonego promptu:", metaPromptCost.length, "tokenów");
        //console.log("Wzrost kosztów:", metaPromptCost.length - userPromptCost.length, "tokenów");
        res.json({
            message: response.choices[0].message.content,
            evaluation: evaluationResponse.choices[0].message.content
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