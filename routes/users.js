// backend/routes/users.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET: Listar todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Criar um novo usuário
router.post('/', async (req, res) => {
  const { email, name } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// (Área para adicionar GET por ID, PUT e DELETE depois)

module.exports = router;