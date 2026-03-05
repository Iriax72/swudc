// charger les images:
const cards = [];

const urls = [];
for(i = 1; i <= 252; i++) {
    urls.push(`./assets/images/cards/${i}.png`);
}

let index = 0;
function loadNext() {
    if (index >= urls.length) return;

    const img = new Image();
    img.src = urls[index];

    img.onload = () => {
        cards.push(img);
        index++;
        loadNext();
    };

    img.onerror = () => {
        img.src = './assets/images/cardError.png';
        cards.push(img);
        index++;
        loadNext()
    }
}
loadNext();
// les images sont maintenant chargées

const cardsBtn = [...document.querySelectorAll(".card-btn")];

const choiceWindow = '<div class="choiceWindow"></div>'

const cardImages = {x: 'pomme', y: 'pomme'}

cardsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        openChoice(btn)
    })
});

let div = null;
function openChoice(card) {
    div = document.createElement("div");
    div.className = "choiceWindow";
    document.body.appendChild(div);
    cards.forEach(card => {
        const btn = document.createElement("button");
        btn.className = "cardBtn";
        div.appendChild(btn);
    });
}