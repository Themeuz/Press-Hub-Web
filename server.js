// Linha 1: Garante que as variáveis de ambiente (do .env) sejam carregadas
require('dotenv').config(); 
console.log("--- server.js INICIADO ---"); 

// Importações necessárias
const { PrismaClient } = require('@prisma/client');
const express = require('express');
const cors = require('cors');

// Cria a instância do Prisma
const prisma = new PrismaClient(); // Garanta que essa linha exista e não esteja comentada

// Cria a aplicação Express
const app = express();

// Define a porta (deve ser 3000 para o back-end)
const PORT = 3000; 

// === Middlewares ===
// app.use(cors()); // Temporariamente comentado
// app.use(express.json()); // Temporariamente comentado

// === ROTA DE TESTE ULTRA-BÁSICA ===
app.get('/games', (request, response) => {
  console.log(">>> ROTA GET /games FOI ACIONADA! <<<"); 
  response.send("A ROTA GET /games FUNCIONOU!"); 
});

// === TODAS AS ROTAS ORIGINAIS TEMPORARIAMENTE COMENTADAS ===
/*
// Rota para listar todos os usuários
app.get('/users', async (request, response) => {
    // ... código antigo ...
});

// Rota para cadastrar um novo usuário
app.post('/users', async (request, response) => {
    // ... código antigo ...
});

// Rota para buscar um usuário específico pelo ID
app.get('/users/:id', async (request, response) => {
    // ... código antigo ...
});

app.put('/users/:id', async (request, response) => {
    // ... código antigo ...
});

app.delete('/users/:id', async (request, response) => {
    // ... código antigo ...
});

// =============================================
// ROTAS PARA O CRUD DE JOGOS (GAMES) - ANTIGAS
// =============================================

// Rota para listar todos os jogos
app.get('/games', async (request, response) => { // <<< COMENTADA TEMPORARIAMENTE
   // ... código antigo ...
});

// Rota para cadastrar um novo jogo
app.post('/games', async (request, response) => { // <<< COMENTADA TEMPORARIAMENTE
    // ... código antigo ...
});

// Rota para atualizar um jogo existente
app.put('/games/:id', async (request, response) => { // <<< COMENTADA TEMPORARIAMENTE
    // ... código antigo ...
});

// Rota para deletar um jogo
app.delete('/games/:id', async (request, response) => { // <<< COMENTADA TEMPORARIAMENTE
    // ... código antigo ...
});
*/

// === LIGA O SERVIDOR (PRECISA SER A ÚLTIMA COISA!) ===
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
});

// (Opcional, mas bom: fechar a conexão do prisma ao desligar o server)
process.on('SIGINT', async () => {
  if (prisma) { // Verifica se prisma foi inicializado
      await prisma.$disconnect();
  }
  process.exit();
});