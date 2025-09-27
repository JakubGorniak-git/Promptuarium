const form = document.getElementById('promptForm');
const responseDiv = document.getElementById('response');
const evaluationDiv = document.getElementById('evaluation');

async function sendPrompt(prompt) {
    const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    return data;
}


form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const promptText = document.getElementById('prompt').value;
    console.log("Wysyłam prompt:", promptText);
    
    const result = await sendPrompt(promptText);
    console.log("Odpowiedź:", result);
    
    // Wyświetl w responseDiv
    responseDiv.innerHTML = result.message; // lub jak będzie nazywać się pole w odpowiedzi
    responseDiv.classList.add('show');

    // Wyświetl w evaluationDiv
    const evaluationDiv = document.getElementById('evaluation');
    evaluationDiv.innerHTML = result.evaluation; // lub jak będzie nazywać się pole w odpowiedzi
    evaluationDiv.classList.add('show');
});