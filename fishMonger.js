// Import & invoke boatInventory from database
// Create & export mongerInventory. Fish monger buys exactly 10 fish caught by the boat. If any of the boats'  
// fish quantity is less than 10, the monger does not buy it. 
// The fish monger does not buy anything priced higher than $7.50.
// Once we get array of fish objects, need to determine which of these meet chef requirements.
// Chef constraints (arguments passed): our own set dollar value that we can provide to the monger inventory function. 
// Return final array of fish.
const { boatInventory } = require("./fishingBoat.js")

// const mongerInventory = (chefsPrice) => {

// let mongerInv = []
// for (const item of boatInventory()) {
//     if (item.price <= 7.5 && item.amount >= 10)
//       item.amount = 10
//       mongerInv.push(item)
// }
// }

// let chefsFish = []
// for (const obj of mongerInv) {
//   if (obj.price <= chefsPrice) {
//     chefsFish.push(obj.species)
//   }
// }
// return chefsFish
// }

// mongerInventory(5)


function chefPurchases(maxChefPrice) {
 let mongerStock = boatInventory().filter(fish => fish.price <= 7.50 && fish.amount >= 10);

  let fixedMongerStock = mongerStock.map(fish => ({
     species: fish.species,
     weight: fish.weight,
     price: fish.price,
     amount: 10
   }));

  let chefStock = fixedMongerStock.filter(fish => fish.price <= maxChefPrice);
  return chefStock

  }
const log = chefPurchases()
console.log(log)

// console.log(mongerInventory(5))

// const mongerInv = boatInventory()
// .filter((item) => item.price <= 7.5 && item.amount >= 10)
// .map((item) => {
//     let fishNum = [];
//     for (let i = 0; i < 10; i++) {
//       fishNum.push(item.species);
//     }
//     return fishNum;
//   });

// }
// let chefsFish = []
// for (const obj of mongerInv) {
//   if (obj.price <= chefsPrice) {
//     chefsFish.push(obj.species)
//   }
  
// }
// return chefsFish
// const }