// IMPORT dotenv
require('dotenv').config(); 
// IMPORT express
const express = require('express');
// IMPORT routes
const filmsRoutes = require('./routes/films.routes'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// use routes
app.use(filmsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Temporary test route:: 
app.get("/test", (req, res) => {
  res.json({ message: "App works" });
});

//  Export app to execute tests
module.exports = app;