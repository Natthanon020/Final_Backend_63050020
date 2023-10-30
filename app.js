const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactions');


const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Natthanon:nc213339@cluster0.750ibsn.mongodb.net/final-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Use the transaction routes
app.use('/transactions', transactionRoutes);

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
