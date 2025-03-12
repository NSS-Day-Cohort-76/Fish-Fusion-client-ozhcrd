const { boatInventory } = require("./fishingBoat.js")

function mongerInventory(maxChefPrice) {
const mongerStock = boatInventory().filter(fish => fish.price <= 7.50 && fish.amount >= 10)
.map(fish => ({
species: fish.species,
weight: fish.weight,
price: fish.price,
amount: 10
}));
 
const chefStock = mongerStock.filter(fish => fish.price <= maxChefPrice);

return chefStock
}

module.exports = {mongerInventory}


