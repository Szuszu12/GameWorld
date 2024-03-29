let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Wiedźmin 3 Dziki Gon',
        image: 'witcher3.jpg',
        price: 120.99,
        platform: 'PC',
        producer: 'CD Projekt RED'
    },
    {
        id: 2,
        name: 'Alan Wake 2',
        image: 'alan_wake2.jpg',
        price: 189.99,
        platform: 'PlayStation 5',
        producer: 'Remedy Entertainment'
    },
    {
        id: 3,
        name: 'DIABLO IV',
        image: 'diablo4.jpeg',
        price: 349.99,
        platform: 'PC',
        producer: 'Blizzard Entertainment'
    },
    {
        id: 4,
        name: 'FIFA 23',
        image: 'fifa23.jpeg',
        price: 128.99,
        platform: 'Xbox Series X',
        producer: 'Electronic Arts'
    },
    {
        id: 5,
        name: 'Elden Ring',
        image: 'eldenring.jpg',
        price: 149.99,
        platform: 'PlayStation 4',
        producer: 'FromSoftware'
    },
    {
        id: 6,
        name: 'God of War Ragnarok',
        image: 'gowrr.jpg',
        price: 219.99,
        platform: 'PlayStation 5',
        producer: 'Santa Monica Studio'
    },
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()} zł</div>
            <div class="platform">Platforma: ${value.platform}</div>
            <div class="producer">Producent: ${value.producer}</div>
            <button onclick="addToCard(${key})">Dodaj do koszyka</button>`;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price * value.quantity;
            count += value.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${(value.price * value.quantity).toLocaleString()} zł</div>
                <div class="quantity-info">
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})" class="quantity-btn">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})" class="quantity-btn">+</button>
                </div>
                <div class="platform">Platforma: ${value.platform}</div>
                <div class="producer">Producent: ${value.producer}</div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString() + ' zł';
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
    }
    reloadCard();
}
