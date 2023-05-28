const { Router } = require('express');
const { drinksController } = require('../controllers/drinks.controller');

const router = Router();

router.get('/drinks', drinksController.getDrinks);
router.get('/drinks/inStock', drinksController.getDrinksInStock);
router.get('/drinks/:id', drinksController.getDrinksById);
router.post('/drinks', drinksController.createDrinks);
router.delete('/drinks/:id', drinksController.deleteDrinks);
router.patch('/drinks/:id', drinksController.patchDrinks);

// GET /drinks – список всех напитков
// GET /drinks/in-stock – список всех напитков, которые есть в наличии
// GET /drinks/:id – подробная информация о конкретном напитке
// POST /drinks – добавление нового напитка
// DELETE /drinks/:id – удаление конкретного напитка
// PATCH /drinks/:id – изменение конкретного напитка

module.exports = router;