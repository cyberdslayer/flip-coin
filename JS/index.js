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
    console.log(i);
})
resetBtn.addEventListener("click", () =>{
    let i = Math.floor(Math.random()*2);
    console.log(i);
})