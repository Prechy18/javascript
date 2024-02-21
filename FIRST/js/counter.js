let counter = document.getElementById("counter")
let i = 0;

function increase(){
    i++;
    counter.style.color ="green";
    counter.innerText = i;
}

function decrease(){
    i--;
    counter.style.color ="red"
    counter.innerText = i;
}

function reset(){
    i = 0;
    counter.style.color = "#102A42"
    counter.innerText = i;
}