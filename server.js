// backend/server.js
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

// Instancia o Prisma Client (só precisamos fazer isso uma vez aqui)
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json()); // Para o Express entender JSON
app.use(cors());         // Para o Frontend (em localhost:3000) poder acessar

// --- Importar as Rotas ---
const userRoutes = require('./routes/users');
const gameRoutes = require('./routes/games');

// --- Usar as Rotas ---
app.use('/api/users', userRoutes); // Qualquer chamada para /api/users usará o arquivo users.js
app.use('/api/games', gameRoutes); // Qualquer chamada para /api/games usará o arquivo games.js

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do Press Hub está online e conectada ao Prisma!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});

// (Opcional, mas bom: fechar a conexão do prisma ao desligar o server)
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});