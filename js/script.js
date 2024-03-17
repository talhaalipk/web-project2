const divToAddBalls = document.querySelector(".balls-box");
const timerClock = document.querySelector("#TimerClock");
const hitTarget = document.querySelector("#HitTarget");
const score = document.querySelector("#Score");
const ballBox = document.querySelector(".balls-box");
let ballString = "";
let scoreValue = 0;
let time = 60;

function createNewBalls()
{
    ballString = "";
    for (let i = 0; i < 230; i++) {
        ballString += `<div class="ball">${Math.floor(Math.random()*10)}</div>`;
    }
    divToAddBalls.innerHTML = ballString;
}

//restart game 
function restartGame() {
    // Reset variables
    time = 60;
    scoreValue = 0;
    score.innerHTML = scoreValue;
    ballBox.classList.remove("centreCenter");
    createNewBalls();
    creteNewTarget();
    runClock();
}


function runClock()
{
    let timer = setInterval(function(){
        if(time > 0)
        {
        time -=1;
        timerClock.innerHTML = time;
        }
        else{
            clearInterval(timer);
            ballBox.removeEventListener('click',handleEvent);
            ballBox.innerHTML = `<h1 class="gameOver">Game Over</h1> <button class="restart-button">Restart game</button>`;
            ballBox.classList.add("centreCenter");

            const restartButton = document.querySelector(".restart-button");
            restartButton.addEventListener('click', restartGame);
        }
    },1000);
}

let hitValue;
function creteNewTarget()
{
    hitValue = Math.floor(Math.random()*10);
    hitTarget.innerHTML =  hitValue;
}

function increseScore()
{
    scoreValue += 10; 
    score.innerHTML = scoreValue; 
}

function handleEvent(e){
    console.log("Dfsdv");
    let value = Number(e.target.innerText);
    console.log(value);
    console.log(hitValue);

    if(value === hitValue)
    {
        creteNewTarget();
        increseScore();
        createNewBalls();
    }
    else
    {
        creteNewTarget();
        createNewBalls();
    }
}

//Event lisener
ballBox.addEventListener('click' , handleEvent)

//calling functions 
createNewBalls();
creteNewTarget();
runClock();
// increseScore();

