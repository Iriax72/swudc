/*
 * Préchargement asynchrone des images. `cardsLoaded` est une promesse
 * que l'on peut attendre si nécessaire, mais l'appel ci‑dessous ne
 * bloque pas l'exécution du reste du script.
 */
const cards = [];

const urls = [];
for (let i = 1; i <= 252; i++) {
    urls.push(`./assets/images/cards/${i}.png`);
}

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
// les images sont maintenant en cours de chargement en tâche de fondp

let div = null;
let choiceCardButtons = [];
let selectedMainCardBtn = null;

function openChoice(cardBtn) {
    selectedMainCardBtn = cardBtn;
    div = document.createElement("div");
    div.className = "choiceWindow";
    document.body.appendChild(div);
    choiceCardButtons = [];
    
    return new Promise(resolve => {
        resolveChoicePromise = resolve;
        cards.forEach(card => {
            const choiceCardBtn = document.createElement("button");
            choiceCardBtn.className = "cardImageBtn";
            choiceCardBtn.appendChild(card.cloneNode());
            div.appendChild(choiceCardBtn);
            choiceCardButtons.push(choiceCardBtn);
            choiceCardBtn.addEventListener('click', () => {
                closeWindow(choiceCardBtn);
            });
        });
    });
}

function closeWindow(choiceCardBtn) {
    // Ajouter l'image du bouton sélectionné au bouton selectedMainCardBtn
    const selectedImage = choiceCardBtn.querySelector('img').cloneNode();
    selectedMainCardBtn.appendChild(selectedImage);
    
    // Fermer la fenêtre
    div.remove();
    
    // Résoudre la promesse avec le bouton sélectionné
    if (resolveChoicePromise) {
        resolveChoicePromise(choiceCardBtn);
    }
    
    // Réinitialiser les variables
    div = null;
    choiceCardButtons = [];
    selectedMainCardBtn = null;
    resolveChoicePromise = null;
}