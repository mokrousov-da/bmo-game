const input = document.querySelector('.input-field');
const btn = document.querySelector('.game-btn');
let answer;
const triesList = document.querySelector('.tries-list');
const triesBlock = document.querySelector('.tries-block');

function generateNumber() {
    return answer = Math.floor(Math.random()*20)+1;
}

generateNumber();

function game() {
    const userNumber = input.value;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter only the numbers from 1 to 20!',
          })
    } else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter only numbers!',
          })
    } else if (userNumber < answer) {
        Swal.fire({
            imageUrl: 'https://www.pngmart.com/files/13/Adventure-Time-BMO-PNG-Picture.png',
            imageWidth: 250,
            imageHeight: 238,
            imageAlt: 'image',
            title: 'Bimo is winning',
            text: "Bimo's number is bigger",
          })
        const yourTry = document.createElement('li');
        yourTry.classList.add('tries-item');
        yourTry.innerText = `${userNumber}: Bimo's number is bigger`;
        triesList.appendChild(yourTry);
    } else if (userNumber > answer) {
        Swal.fire({
            imageUrl: 'https://www.pngmart.com/files/13/Adventure-Time-BMO-PNG-Picture.png',
            imageWidth: 250,
            imageHeight: 238,
            imageAlt: 'image',
            title: 'Bimo is winning',
            text: "Bimo's number is lower",
          })
        const yourTry = document.createElement('li');
        yourTry.classList.add('tries-item');
        yourTry.innerText = `${userNumber}: Bimo's number is lower`;
        triesList.appendChild(yourTry);
    } else if (userNumber == answer) {
        Swal.fire({
            imageUrl: 'https://www.pngmart.com/files/13/Adventure-Time-BMO-Transparent-PNG.png',
            imageWidth: 230,
            imageHeight: 285,
            imageAlt: 'image',
            title: 'Bimo lost',
            text: "You've guessed the number!",
          })
        const yourTry = document.createElement('li');
        yourTry.classList.add('tries-item');
        yourTry.innerText = `${userNumber}: You won!`;
        triesList.appendChild(yourTry);

        const totalScore = document.createElement('p');
        totalScore.classList.add('tries-score');
        totalScore.innerText = `You made ${document.querySelectorAll('.tries-item').length} attempt(s)`;
        triesBlock.appendChild(totalScore);
    }
}

btn.addEventListener('click', () => {
    if (document.querySelector('.tries-score')) {
        Array.from(document.querySelectorAll('.tries-item')).forEach(item => {
            triesList.removeChild(item);
        })
        triesBlock.removeChild(document.querySelector('.tries-score'));
    }
    game();
})

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (document.querySelector('.tries-score')) {
            Array.from(document.querySelectorAll('.tries-item')).forEach(item => {
                triesList.removeChild(item);
            })
            triesBlock.removeChild(document.querySelector('.tries-score'));
        }
        game();
    }
})