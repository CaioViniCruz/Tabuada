const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Envia o arquivo HTML
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
