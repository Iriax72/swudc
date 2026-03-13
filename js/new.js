import {openChoice} from './cardChoice.js';

const cardButtons = [...document.querySelectorAll(".card-btn")];

cardButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        openChoice(btn);
    });
});