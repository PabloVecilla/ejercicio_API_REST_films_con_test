// IMPORT router
const router = require('express').Router(); 

// IMPORT controller
const filmsController = require('../controllers/films.controller'); 

// GET :title
router.get("/api/film/:title", filmsController.getFilm); 

// POST film
router.post("/api/film/", filmsController.createFilm); 

// PUt film
router.put("/api/film/", filmsController.updateFilm); 

// DELETE film
router.delete("/api/film/", filmsController.deleteFilm); 

module.exports = router; 