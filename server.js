// Passo 1: Importar o nosso "controle remoto" inteligente do Prisma
import { PrismaClient } from '@prisma/client';

// Importar o Express (como antes)
import express from 'express';

// Passo 2: Criar uma instância do nosso controle remoto
// É como pegar o controle remoto da caixa e colocar pilha nele.
const prisma = new PrismaClient();
const app = express();
    
app.use(express.json());

const PORT = 3000;

// ROTA Nº 1: LISTAR TODOS OS USUÁRIOS (AGORA DO BANCO DE DADOS)
// Marcamos a função com 'async' porque ela vai ter que esperar o banco de dados.
app.get('/users', async (request, response) => {
    // Usamos o Prisma para encontrar todos ('findMany') os registros na tabela 'user'.
    const users = await prisma.user.findMany();
    
    response.json(users);
});

// ROTA Nº 2: CADASTRAR UM NOVO USUÁRIO (AGORA NO BANCO DE DADOS)
// Também é 'async'
app.post('/users', async (request, response) => {
    // Pega os dados do corpo da requisição (como antes).
    const { name, email } = request.body;

    // Usa o Prisma para criar ('create') um novo registro na tabela 'user'.
    // A gente passa um objeto 'data' com os dados que queremos inserir.
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
        },
    });

    response.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando e escutando em http://localhost:${PORT}`);
});