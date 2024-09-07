const btn = document.querySelectorAll('.moves-btn');
const userScr = document.querySelector('.user-Count');
const compScr = document.querySelector('.comp-Count');
const drawScr = document.querySelector('.draw-Count');
const totalGame = document.querySelector('.gamePlayed-Count');
const resetBtn = document.querySelector('.reset-btn');
const displayGame = document.querySelector('.display-move');

let userScore = 0;
let compScore = 0;
let drawScore = 0;
let gamePlayed = 0;

    btn.forEach((move) => {
        move.addEventListener('click', () => {
            const userChoice = move.getAttribute('id');
            playGame(userChoice);
        });
    });
    const drawGame = (userChoice, compChoice) => {
        drawScore++;
        drawScr.innerText = drawScore;
        displayGame.innerText = `game draw. ${userChoice} never beats ${compChoice}`;
         displayGame.style.backgroundColor = 'blue';
    }  
    const showWinner = (userWin, userChoice, compChoice) => {
           if(userWin){
            userScore++;
            userScr.innerText = userScore;
            displayGame.innerText = `You Win. Your ${userChoice} Beats ${compChoice}`;
            displayGame.style.backgroundColor = 'green';
           }else{
            compScore++;
            compScr.innerText = compScore;
            displayGame.innerText = `You Lose. ${compChoice} Beats Your ${userChoice}`;
            displayGame.style.backgroundColor = 'red';
           }
    }
    const totalGamePlayed = () => {
        gamePlayed++;
        totalGame.innerText = gamePlayed;
    }
    const compMove = () => {
        const moves = ['rock', 'paper', 'scissor'];
        const randMove = Math.floor(Math.random() * 3);
        return moves[randMove];
    }
    
    const playGame = (userChoice) => {
        console.log('User Move = ', userChoice);
        const compChoice = compMove();
        console.log('computer Move = ', compChoice)
         if(userChoice === compChoice){
           drawGame(userChoice, compChoice);
         }else{
            let userWin = true;
            if(userChoice === 'rock'){
               userWin = compChoice === 'paper' ? false : true;
            }
            else if(userChoice === 'paper'){
                userWin = compChoice === 'scissor' ? false : true;
            }
            else{
                userWin = compChoice === 'rock' ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }  
        totalGamePlayed();
    }

    resetBtn.addEventListener('click', () => {
        alert('game is reset');
    });

   
    
