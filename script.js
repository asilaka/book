const catalog = [
{
    name: 'Гарри Потер',
    img:'https://cdn.europosters.eu/image/1300/art-photo/harry-potter-deathly-hallows-book-cover-i214933.jpg',
    year: 1950,
    description: 'Афигенная книга',
    price: 100000,
},

{
    name: 'Маленький принц',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZX9nKdABum0rFQHA_GuTiL4I1qz26yqU3pA&s',
    year: 2000,
    description: 'Интересная книга',
    price: 70000,
},

{
    name: 'Красная шапочка',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SJakBLpHyY2u90rr5TgFEPd2WC7BIjxgWg&s',
    year: 1999,
    description: 'пойдет нормально',
    price: 50000,
}

]

const cards = document.querySelector('.cards');

catalog.forEach(card => {
    cards.innerHTML += `
          <div class="card">
                <img src=${card.img} alt="">
                <h3>${card.name}</h3>
                <p>${card.description}</p>
                <h4>${card.price}</h4>
            </div>
    `
})