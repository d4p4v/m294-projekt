import { grab } from './helper.js'

const list = document.querySelector(".item-cards")

grab('https://prices.runescape.wiki/api/v1/osrs/mapping').then(data => {
    data.forEach((item) => {
        const imgLink = `https://oldschool.runescape.wiki/images/${item.icon.replaceAll(' ', '_')}`
        const e = list.insertAdjacentHTML('beforeend', `
        <div class="card">
            <p class="name">${item.name}</p>
            <div class="info">
                <img class="icon" src="${imgLink}">
            <p class="examine">${item.examine}</p>
            </div>
        </div>
        `)
    })
})

/*
https://prices.runescape.wiki/api/v1/osrs/mapping
Format
examine: "A fiery glow emanates from this necklace."
highalch: 121200
icon: "Zenyte necklace.png (synthax: https://oldschool.runescape.wiki/images/Zenyte_necklace.png)
"id: 19535
limit: 8
lowalch: 80800
members: true
name: "Zenyte necklace"
value: 202000
*/
