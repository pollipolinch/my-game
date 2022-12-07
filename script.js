let levelNumber = prompt('Напишите свой level(1,2,3)')
let timerNumber = prompt('Напишите, сколько секунд будете играть')
let game = document.querySelector('.game')
let gameOver = document.querySelector('.game-over')
let indicator = document.querySelector('.indicator')
let level = document.querySelector('.levelNumber')
let counterNumber = document.querySelector('.counterNumber')
level.textContent = levelNumber
let timer = document.querySelector('.timerNumber')
timer.textContent = timerNumber
document.querySelector('.game-over__level-number').textContent = levelNumber
let counter = 0
counterNumber.textContent = counter
document.querySelector('.game-over__counter-number').textContent = counter

indicator.addEventListener('click', () => {
    counter++
    counterNumber.textContent = counter
    document.querySelector('.game-over__counter-number').textContent = counter
})


let interval = setInterval(() => {
    timerNumber = timerNumber - 1
    timer.textContent = timerNumber
    if (timerNumber > 0 ) {
        gameOver.style.display = 'none'
    } else if(timerNumber <= 0) {
        clearInterval(interval)
        gameOver.style.display = 'block'
        game.style.display = 'none'

    }
}, 1000)

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}

function generatePositionBottom() {
    let max = 280
    let min = 5
    return Math.floor((Math.random()) * (max - min + 1)) + min;
}

if (levelNumber == 1 ){
    setInterval(()=> {
        indicator.style.left = generatePositionBottom() + 'px'
        indicator.style.right = generatePositionBottom() + 'px'
        indicator.style.bottom = generatePositionBottom() + 'px'
        indicator.style.top = generatePositionBottom() + 'px'
        indicator.style.background = generateRandomColor()
    }, 1000)
} else if ( levelNumber == 2 ){
    setInterval(()=> {
        indicator.style.left = generatePositionBottom() + 'px'
        indicator.style.right = generatePositionBottom() + 'px'
        indicator.style.bottom = generatePositionBottom() + 'px'
        indicator.style.top = generatePositionBottom() + 'px'
        indicator.style.background = generateRandomColor()
    }, 800)
} else if ( levelNumber == 3){
    setInterval(()=> {
        indicator.style.left = generatePositionBottom() + 'px'
        indicator.style.right = generatePositionBottom() + 'px'
        indicator.style.bottom = generatePositionBottom() + 'px'
        indicator.style.top = generatePositionBottom() + 'px'
        indicator.style.background = generateRandomColor()
    }, 600)
}



