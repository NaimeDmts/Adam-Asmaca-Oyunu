const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');


const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();

function getRandomWord(){
    const words = ["javascript", "css", "java", "html","python"];
    return words[Math.floor(Math.random() * words.length)]
}

function displayWord(){
   
    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
    <div class="letter"> ${correctLetters.includes(letter) ? letter : ''}</div>
    `).join('')}
    `;

    const w = word_el.innerText.replace(/\n/g,'');
    if(w === selectedWord){
        popup.style.display = 'flex';
        message_el.innerText = 'Tebrikler kazandınız.'
    }
}

window.addEventListener('keydown',function(e){
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                // bu harfi zaten eklediniz.
                console.log('bu harfi zaten eklediniz.')
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                //hatalı harfleri güncelle.
                console.log('hatalı harfleri güncelle.')
            }
        }
    }
});
displayWord();