const express = require('express');
const app = express();
app.use(express.json()); // Nosso porteiro/tradutor de JSON

const PORT = 3000;

// NOSSA "MEMÓRIA" TEMPORÁRIA (nosso banco de dados falso)
const users = [];

// ROTA Nº 1: LISTAR TODOS OS USUÁRIOS (READ)
// Método GET: usado para buscar/ler informações.
app.get('/users', (request, response) => {
    response.json(users); // Responde com a lista completa de usuários em formato JSON.
});

// ROTA Nº 2: CADASTRAR UM NOVO USUÁRIO (CREATE)
// Método POST: usado para criar/enviar informações novas.
app.post('/users', (request, response) => {
    // Pega o nome e o email que foram enviados no "corpo" da requisição.
    const { name, email } = request.body;

    // Cria um novo objeto de usuário.
    const newUser = {
        id: users.length + 1, // Cria um ID simples (não faça isso em produção!)
        name: name,
        email: email
    };

    // Adiciona o novo usuário na nossa lista.
    users.push(newUser);

    // Responde com o usuário que acabou de ser criado e um status 201 (Created).
    response.status(201).json(newUser);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando e escutando em http://localhost:${PORT}`);
    console.log('Para derrubar o servidor, aperte Ctrl + C no terminal.');
});