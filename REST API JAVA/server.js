require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const port = 8080;
const app = express();

// Connect to the database
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("prisijungta prie duombazes"));

app.use(express.json());

const kelias = require('./routes/reviews');
// Endpoint changed from /tasks to /reviews
app.use('/reviews', kelias);

// localhost:8080/reviews
app.listen(port, () => console.log(`serveris startavo on port ${port}`));



//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