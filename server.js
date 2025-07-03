const { PrismaClient } = require('@prisma/client');
const express = require('express');
const cors = require('cors');
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// Rota para listar todos os usuários
app.get('/users', async (request, response) => {
    const users = await prisma.user.findMany();
    response.json(users);
});

// Rota para cadastrar um novo usuário
app.post('/users', async (request, response) => {
    const { name, email } = request.body;
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
        },
    });
    response.status(201).json(newUser);
});

// Rota para buscar um usuário específico pelo ID
app.get('/users/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });

    if (!user) {
        return response.status(404).json({ error: 'User not found' });
    }

    response.json(user);
});

app.put('/users/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;

    const updatedUser = await prisma.user.update({
        where: { id: id },
        data: {
            name: name,
            email: email,
        },
    });
    response.json(updatedUser);
});

app.delete('/users/:id', async (request, response) => {
    const id = parseInt(request.params.id);

    await prisma.user.delete({
        where: { id: id },
    });
    response.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Servidor rodando e escutando em http://localhost:${PORT}`);
});

// =============================================
// ROTAS PARA O CRUD DE JOGOS (GAMES)
// =============================================

// Rota para listar todos os jogos
app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany();
    response.json(games);
});

// Rota para cadastrar um novo jogo
app.post('/games', async (request, response) => {
    const { title, platform, releaseDate } = request.body;

    console.log("--- INTERROGANDO O OBJETO PRISMA ---");
    console.log("As chaves disponíveis no 'prisma' são:", Object.keys(prisma));
    console.log("------------------------------------");
    
    const newGame = await prisma.game.create({
        data: {
            title: title,
            platform: platform,
            // Datas precisam estar no formato ISO 8601 (ex: "2025-12-31T00:00:00.000Z")
            releaseDate: new Date(releaseDate), 
        },
    });
    response.status(201).json(newGame);
});

// Rota para atualizar um jogo existente
app.put('/games/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const { title, platform, releaseDate } = request.body;

    const updatedGame = await prisma.game.update({
        where: { id: id },
        data: {
            title: title,
            platform: platform,
            releaseDate: new Date(releaseDate),
        },
    });
    response.json(updatedGame);
});

// Rota para deletar um jogo
app.delete('/games/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    await prisma.game.delete({
        where: { id: id },
    });
    response.status(204).send();
});
