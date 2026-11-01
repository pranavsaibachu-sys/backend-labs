// Part 2: the same server rewritten with Express
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Logs the status code returned for every request (Task 7)
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode}`);
  });
  next();
});

// GET /  -> welcome text
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Lab 1 Express server!');
});

// GET /about -> JSON with name and section
app.get('/about', (req, res) => {
  res.status(200).json({
    name: "BACHU PRANAV SAI",
    section:"CSE - GEN-AI(304)" ,
  });
});

// GET /time -> current date and time
app.get('/time', (req, res) => {
  res.status(200).send(new Date().toString());
});

// 404 for any unknown path (must come after all routes)
app.use((req, res) => {
  res.status(404).send('404 - Route not found');
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
