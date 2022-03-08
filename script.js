'use strict'



const mockGameData = [
    {
        image: '',
        name: 'Super Game',
        gameBadges: ['Action', 'Multiplayer RPG'],
        stars: 3,
        votes: 1000,
        text: 'The best game you have played so far',
        price: ['Free', '1200RUB'],
        priceBadge: '-150%',
    },
    {
        image: '',
        name: 'Mega Game',
        gameBadges: ['Multiplayer RPG'],
        stars: 5,
        votes: 177,
        text: 'Not the best game you have played so far',
        price: ['50RUB'],
        priceBadge: '',
    },
    {
        image: '',
        name: 'Awesome Game',
        gameBadges: ['Action'],
        stars: 1.5,
        votes: 100000,
        text: 'The best game you have played so far',
        price: ['2000RUB', '1200RUB'],
        priceBadge: '-1%',
    },

];

const getRandomGame = () => {
    return Math.round(Math.random()*mockGameData.length);
};

const getCard = ({image = '', name = 'NoName', gameBadges = [], stars = 0, votes = 0, text ='', price = [], priceBadge = ''}) => {
    return `<li class="games-list__item game">
    <img src="${image}" alt="${name}: Game Preview" class="game__image">
    <span class="game__badge">${gameBadges}</span>
    <h3 class="game__header">${name}</h3>
    <div class="game__rating">
        <span class="game__rating-number">${votes}</span>
    </div>
    <p class="game__text">${text}</p>
    <p class="game__price">
        <span class="game__price-tag game__price-tag--old">${price[0]? price[0]: ''}</span>
        <span class="game__price-tag game__price-tag--actual">${price[1]? price[1]: ''}</span>
        <span class="game__price-badge">${priceBadge}</span>
    </p>
    </li>`;
};

const newGame = document.querySelector('.games-list__item--new');
const newGameButton = newGame.querySelector('.game__link--new');

newGameButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    newGame.insertAdjacentHTML('afterend', getCard(mockGameData[getRandomGame()]));
});