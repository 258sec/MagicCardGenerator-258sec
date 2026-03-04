



const symbols = ["♠", "♥", "♦", "♣"];  // palos
const numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];  // valores


//Generamos un indice aleatorio
function getRandomIndex(array){
    return Math.floor(Math.random()*array.length)
}

function generateRandomCard(){
//Escogemos un simbolo y numero aleatorios
const randomSymbol=symbols[getRandomIndex(symbols)];
const randomNumber=numbers[getRandomIndex(numbers)];


//Enlazamos html con js
const valueTop= document.getElementById("value-top");
valueTop.textContent=randomSymbol;

const numberValue= document.getElementById("number");
numberValue.textContent=randomNumber;

const valueBottom=document.getElementById("value-bottom") 
valueBottom.textContent=randomSymbol;

//Cambiamos el color de los elementos//
if (randomSymbol=== "♥" || randomSymbol==="♦"){
    document.getElementById("value-top").style.color="red";
    document.getElementById("value-bottom").style.color="red";
}else {
    document.getElementById("value-top").style.color="black";
    document.getElementById("value-bottom").style.color="black";
};
};

window.onload=generateRandomCard;


