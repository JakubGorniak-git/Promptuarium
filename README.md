# 🤖 Promptuarium

**AI-powered prompt improvement tool** - zamienia zwykłe prompty w zaawansowane, skuteczne instrukcje dla AI.

![Promptuarium Demo](https://via.placeholder.com/800x400/1a1a2e/white?text=Promptuarium+Interface)

## ✨ Features

- 🎯 **Prompt Enhancement** - automatycznie poprawia i rozszerza prompty
- 🚀 **Fast AI Integration** - wykorzystuje Groq API (Llama 3)
- 🎨 **Modern UI** - glassmorphism design z animacjami
- 📱 **Responsive** - działa na desktop i mobile

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, CSS3, HTML5
- **Backend**: Node.js, Express
- **AI Model**: Groq (Llama 3-8B-8192)

## 🚀 Quick Start

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

## 📝 How It Works

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

## 📁 Project Structure
```
Promptuarium/
├── server.js      # Express backend
├── client.js      # Frontend logic  
├── index.html     # UI interface
├── prompts.js     # Meta-prompt templates (planned)
├── package.json   # Dependencies
└── .env          # API keys (not in repo)
```

## 🔑 Getting Groq API Key

1. Zarejestruj się na [console.groq.com](https://console.groq.com)
2. Przejdź do sekcji "API Keys"
3. Wygeneruj nowy klucz
4. Dodaj do pliku `.env`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is open source - feel free to use and modify!

## 🎯 Next Features

- [ ] Multiple prompt templates
- [ ] Prompt history
- [ ] Different AI models
- [ ] Prompt categories
- [ ] Export/Import functionality

---

**Made with ❤️ by [JakubGorniak](https://github.com/JakubGorniak-git)**