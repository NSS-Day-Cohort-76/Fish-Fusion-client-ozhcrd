const {mongerInventory} = require("./fishMonger.js")

function fishMenu(chefPrice) {
    const halfAmount = mongerInventory(chefPrice).map((inv) => ({
    species: inv.species,
    amount: (inv.amount / 2) }))
    
    const htmlString = halfAmount
    .map(item => `
        <h2>${item.species}</h2>
        <section class="menu__item">${item.species} Soup</section>
        <section class="menu__item">${item.species} Sandwich</section>
        <section class="menu__item">Grilled ${item.species}</section>
    `)
    .join('')

    const htmlMenu = `<h1>Menu</h1>

<article class="menu">
${htmlString}
</article>`

return htmlMenu
}

module.exports = {fishMenu}