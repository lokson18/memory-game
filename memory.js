const cardArray = [
    {
        name: "Shile",
        img: "./images/shile.jpg"
    },
    {
        name: "Tosin",
        img: "./images/tosin.jpg"
    },
    {
        name: "Papa",
        img: "./images/papa.jpg"
    },
    {
        name: "Grace",
        img: "./images/Grace.jpg"
    },
    {
        name: "Lokson",
        img: "./images/lokson.jpg"

    },
    {
        name: "Deji",
        img: "./images/deji.jpg"
    },
    {
        name: "Shile",
        img: "./images/shile.jpg"
    },
    {
        name: "Tosin",
        img: "./images/tosin.jpg"
    },
    {
        name: "Papa",
        img: "./images/papa.jpg"
    },
    {
        name: "Grace",
        img: "./images/Grace.jpg"
    },
    {
        name: "Lokson",
        img: "./images/lokson.jpg"

    },
    {
        name: "Deji",
        img: "./images/deji.jpg"
    }
];
cardArray.sort(() => 0.2 - Math.random());
console.log(cardArray);

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let cardChosen = [];
let cardChosenId = [];
const cardWon = [];

console.log(gridDisplay);

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img");
        card.setAttribute("src", "./images/black.jpg");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    };
};
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll("img");
    // console.log("check for match");
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if (optionOneId == optionTwoId){
        // alert("You have clicked the same image!");
        cards[optionOneId].setAttribute("src", "./images/black.jpg");
        cards[optionTwoId].setAttribute("src", "./images/black.jpg");

    }

    if (cardChosen[0] == cardChosen[1]){
        // alert("You found a match");
        cards[optionOneId].setAttribute("src", "./images/white.jpg");
        cards[optionTwoId].setAttribute("src", "./images/white.jpg");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardWon.push(cardChosen);
    } else{
        cards[optionOneId].setAttribute("src", "./images/black.jpg");
        cards[optionTwoId].setAttribute("src", "./images/black.jpg");
        // alert("Sorry try again!")
    }
    resultDisplay.textContent = cardWon.length
    cardChosen = [];
    cardChosenId = [];
    
    if (cardWon.length == cardArray.length/2){
        resultDisplay.textContent = " Congratulations  You Found Them All!"
    }
}

function flipCard(){
    console.log(cardArray)
    const  cardId = this.getAttribute("data-id");
    console.log(cardArray[cardId].name);
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    console.log(cardChosenId);
    console.log("clicked", cardId);
    console.log(cardChosen);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosen.length === 2){
        setTimeout( checkMatch, 500)
    }
};
