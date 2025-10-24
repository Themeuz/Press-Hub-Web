// backend/routes/games.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET: lista todos os jogos da plataforma
router.get('/', async (req, res) => {
  try {
    const games = await prisma.game.findMany();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Usado para criar uma nova tabela de jogo
router.post('/', async (req, res) => {
  const { title, platform, releaseDate } = req.body;
  try {
    const newGame = await prisma.game.create({
      data: {
        title,
        platform,
        // O Prismo só entende em formato ISO
        // O new Date() ajuda a formatar se o front mandar uma string simples
        releaseDate: new Date(releaseDate), 
      },
    });
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;