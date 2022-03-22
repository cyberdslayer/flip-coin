var aAudio = new Audio('audio/click.mp3');
var bAudio = new Audio('audio/reset.wav');

function myAudioFunction(letter) {
    if (letter == 'A') {
        aAudio.play();
    } else if (letter == 'B') {
        bAudio.play();
    }
}


// !flipping the coin on bitton click

let heads = 0;
let tails = 0;

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip");
let resetBtn = document.querySelector("#reset");


flipBtn.addEventListener("click", () =>{
    let i = Math.floor(Math.random()*2);
    coin.style.animation = "none";
    if (i) {
        setTimeout(function () {
            coin.style.animation = "spin-heads 1.1s forwards";
        }, 100);
        heads++;

    }
    else {
        setTimeout(function () {
            coin.style.animation = "spin-tails 1.1s forwards"
        }, 100);
        tails++;
    }

    //updating head tail count
    setTimeout(updateStats, 3000);
    disableButton();
})


// !  heads & tails count function

function updateStats(){
    document.querySelector("#heads-count").textContent = 'Heads: ${heads}';

    document.querySelector("#tails-count").textContent = 'Tails: $(tails)';
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.transform = "rotateX(0)";
    heads = 0;
    tails = 0;
    updateStats();    
})