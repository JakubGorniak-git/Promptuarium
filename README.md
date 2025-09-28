# 🤖 Promptuarium

**AI-powered prompt improvement tool** - zamienia zwykłe prompty w zaawansowane, skuteczne instrukcje dla AI.

## Features

- **Prompt Enhancement** - automatycznie poprawia i rozszerza prompty
- **Fast AI Integration** - wykorzystuje Groq API
- **Evaluation Techniques** - porównanie starego i nowego promptu

## Tech Stack

- **Frontend**: Vanilla JavaScript, CSS3, HTML5
- **Backend**: Node.js, Express
- **AI Model**: Groq (Kimi-K2-Instruct-0905)

## Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/JakubGorniak-git/Promptuarium.git
cd Promptuarium
npm install
```

### 2. Setup Environment
Stwórz plik `.env`:
```
GROQ_API_KEY=your_groq_api_key_here
```

### 3. Install Dependencies
```bash
npm install express groq-sdk dotenv
```

### 4. Run
```bash
node server.js
```

Otwórz http://localhost:3000

## How It Works

1. **Input**: Wpisz prosty prompt (np. "napisz artykuł o kotach")
2. **AI Enhancement**: System używa meta-promptu do ulepszenia
3. **Output**: Otrzymujesz zaawansowany, strukturalny prompt

**Przykład transformacji:**
```
Input:  "napisz artykuł o kotach"
Output: "Jesteś ekspertem copywriterem. Napisz szczegółowy artykuł 
        o kotach (800 słów). Uwzględnij: zachowanie, rasy, 
        pielęgnację. Użyj engaging tone. Format: tytuł + 
        5 sekcji z podtytułami."
```


## Getting Groq API Key

1. Zarejestruj się na [console.groq.com](https://console.groq.com)
2. Przejdź do sekcji "API Keys"
3. Wygeneruj nowy klucz
4. Dodaj do pliku `.env`


---

**Made by [JakubGorniak](https://github.com/JakubGorniak-git)**
