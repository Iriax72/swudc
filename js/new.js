import {openChoice} from './js/cardChoice.js';

const cardButtons = [...document.querySelectorAll(".card-btn")];

cardButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        openChoice(btn);
    });
});