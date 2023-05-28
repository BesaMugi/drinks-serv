const Drinks = require("../models/Drinks.model")

module.exports.drinksController = {
    getDrinks: async (req, res) => {
        const data = await Drinks.find({})
        res.json(data)
        // GET /drinks – список всех напитков
    },
    getDrinksInStock: async (req,res) => {
        const data = await Drinks.find({}, {inStock: 1})
        res.json(data)
        // GET /drinks/in-stock – список всех напитков, которые есть в наличии
    },
    getDrinksById: async (req, res) => {
        const data = await Drinks.findById(req.params.id)
        res.json(data)
        // GET /drinks/:id – подробная информация о конкретном напитке
    },
    createDrinks: (req, res) => {
        Drinks.create({
            name: req.body.name,
            price: req.body.price,
            inStock: req.body.inStock,
            caffeine: req.body.caffeine,
            volume: req.body.volume,
            description: req.body.description
        }).then(() => {
            res.json('Создана запись')
        })
        // POST /drinks – добавление нового напитка
    },
    deleteDrinks: async (req, res) => {
        const data = await Drinks.findByIdAndRemove(req.params.id)
        res.json("Новость удалена")
        // DELETE /drinks/:id – удаление конкретного напитка
    },
    patchDrinks: async (req, res) => {
        const data = await Drinks.findByIdAndUpdate(req.params.id,{
            name: String,
            price: Number,
            inStock: Boolean,
            caffeine: Boolean,
            volume: String,
            description: String
        }).then(() => {
            res.json('Изменено')
        })
        // PATCH /drinks/:id – изменение конкретного напитка
    }
}