const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Dados fictícios dos projetos de IA
const projects = [
    { id: 1, title: "Reconhecimento Facial com TensorFlow", description: "Um projeto de reconhecimento facial usando TensorFlow e Python." },
    { id: 2, title: "Chatbot com Processamento de Linguagem Natural", description: "Um chatbot que usa NLP para interagir com os usuários." },
    { id: 3, title: "Classificação de Imagens com Redes Neurais", description: "Um modelo de IA que classifica imagens usando redes neurais convolucionais." }
];

// Rota para obter todos os projetos de IA
app.get('/projects', (req, res) => {
    res.json(projects);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
