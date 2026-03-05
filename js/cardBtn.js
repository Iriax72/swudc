// charger les images:
const cards = [];

const urls = [];
for(let i = 1; i <= 252; i++) {
    urls.push(`./assets/images/cards/${i}.png`);
}

/*
 * Préchargement asynchrone des images. `cardsLoaded` est une promesse
 * que l'on peut attendre si nécessaire, mais l'appel ci‑dessous ne
 * bloque pas l'exécution du reste du script.
 */
let cardsLoaded = preloadCards();

function preloadCards() {
    return new Promise(resolve => {
        let index = 0;

        function loadNext() {
            if (index >= urls.length) {
                resolve();
                return;
            }

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
                loadNext();
            };
        }

        loadNext();
    });
}
// les images sont maintenant en cours de chargement en tâche de fond


const cardsBtn = [...document.querySelectorAll(".card-btn")];

cardsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        openChoice(btn);
    })
});

let div = null;
function openChoice(cardBtn) {
    div = document.createElement("div");
    div.className = "choiceWindow";
    document.body.appendChild(div);
    cards.forEach(card => {
        const btn = document.createElement("button");
        btn.className = "cardImageBtn";
        btn.appendChild(card.cloneNode());
        div.appendChild(btn);
    });
}