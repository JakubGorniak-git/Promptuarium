const evaluationPrompt = {
    improvePrompt: `# BEZLITOSNY PROMPT AUDYTOR

Twoim zadaniem jest OSZCZĘDZANIE PIENIĘDZY klienta. Bądź surowy!

ORYGINALNY: "{originalPrompt}"
ULEPSZONY: "{improvedPrompt}"

KRYTERIA ODRZUCENIA:
- Jeśli oryginalny prompt jest już jasny → NIE OPŁACA SIĘ
- Jeśli to proste pytanie matematyczne → NIE OPŁACA SIĘ  
- Jeśli ulepszenie dodaje niepotrzebne "bla bla" → NIE OPŁACA SIĘ
- Jeśli koszt wzrasta >200% a jakość <50% → NIE OPŁACA SIĘ

Odpowiedz TYLKO:
"OPŁACA SIĘ: 
[powód]" 
LUB 
"NIE OPŁACA SIĘ: 
[powód]"`
};

module.exports = evaluationPrompt;