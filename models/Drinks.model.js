const mongoose = require("mongoose");

const drinksSchema = mongoose.Schema({
    name: String,
    price: Number,
    inStock: Number,
    caffeine: Boolean,
    volume: String,
    description: String
});

// Название
// Цена
// Есть ли напиток в наличии
// Содержит ли напиток кофеин
// Объем
// Описание напитка

const Drinks = mongoose.model('Drinks', drinksSchema);

module.exports = Drinks