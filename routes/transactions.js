const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// POST /transactions - Create a new transaction
router.post('/', async (req, res) => {
  try {
    const { title, income, expense } = req.body;
    const transaction = new Transaction({ title, income, expense });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /transactions - Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

  