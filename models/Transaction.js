const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  expense: {
    type: Number,
    required: true
  }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
