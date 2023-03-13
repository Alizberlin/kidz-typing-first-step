
let ilm = document.getElementById("ilm");
let col = document.getElementById("col");
let sco = document.getElementById("score");
let input = document.getElementById("myinput");
let inputDiv = document.querySelector('#no-outline');
let key = document.querySelector('#keyboard');
let el = document.querySelector('#el');
let score = 1;
let collection = [];
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letter = ran();
ilm.innerText = letter;

input.addEventListener ("click", (e) => {
    ilm.style.display = 'block';
    input.style.display = 'none';
    inputDiv.style.display = 'none';
    new Audio(`resources/sounds/${letter}.mp3`).play();
} )

key.addEventListener ('click', (e)=> {
    el.focus()
    el.click();
    console.log(e.target)
})

document.addEventListener ("keypress", (evt) => {
    if (evt.key.toUpperCase() == letter) {
        
        s = score++;
        letter = ran();
        sco.innerText = s;
        ilm.innerText = letter;
        let text = document.createTextNode(evt.key.toUpperCase());
        col.appendChild(text);
        new Audio(`resources/sounds/${letter}.mp3`).play();

        if(score % 11 == 0 ) {
        new Audio(`resources/sounds/Tada.mp3`).play();

        }
        
        
	} else {
        
        console.log(evt.key.charAt(0).toUpperCase())
        
        new Audio(`resources/sounds/No.mp3`).play()
        setTimeout(() => {
            new Audio(`resources/sounds/${evt.key.charAt(0).toUpperCase()}.mp3`).play()
        }, 400)
    }
});

function ran() {
    return str.charAt(Math.floor(Math.random() * 25));
}