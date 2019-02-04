var catMe = require("cat-me");
var faker = require("faker");
var randomProduct = faker.commerce.productName();
var randomPrice = faker.commerce.price();

console.log(catMe('nyan'));
console.log(randomProduct + ": " + randomPrice);