const cardsBtn = [...document.querySelectorAll(".card-btn")];

const choiceWindow = '<div class="choiceWindow"></div>'

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
}