import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();

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