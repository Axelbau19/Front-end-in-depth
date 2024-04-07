const choices = document.querySelectorAll('.choice');
const playerScoreHTML = document.querySelector('#player-score');
const computerScoreHTML = document.querySelector('#computer-score');
const resultHTML = document.querySelector('#result');
const playAgainBtnHTML = document.querySelector('#play-again');
const computerChoiceHTML = document.querySelector('#computer-choice');

const optionsWeapons = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;

function updateScore(userChoice,computerChoice){
    if(userChoice === computerChoice){
        computerChoiceHTML.innerHTML = `Computer choose: ${computerChoice}.`;
        resultHTML.innerHTML = "It's a tie!!";
    }else{
        switch(userChoice){
            case 'rock':
                if(computerChoice === 'paper' ){
                    resultHTML.innerHTML = "You lose!!";
                    computerChoiceHTML.innerHTML = `Computer choose: ${computerChoice}.`;
                    computerScore++;
                    computerScoreHTML.innerHTML = `Computer: ${computerScore}.`
                    
                }else{
                    resultHTML.innerHTML = "You Win!!";
                    computerChoiceHTML.innerHTML = `Computer choose: ${computerChoice}.`;
                    playerScore++;
                    playerScoreHTML.innerHTML = `Player: ${playerScore}.`;
                }
                break;
            case 'paper':
                if(computerChoice === 'scissors' ){
                    resultHTML.innerHTML = "You lose!!";
                    computerChoiceHTML.innerHTML = `Computer choose: ${computerChoice}.`;
                    computerScore++;
                    computerScoreHTML.innerHTML = `Computer: ${computerScore}.`
                }else{
                    resultHTML.innerHTML = "You Win!!";
                    computerChoiceHTML.innerHTML = `Computer choose: ${computerChoice}.`;
                    playerScore++;
                    playerScoreHTML.innerHTML = `Player: ${playerScore}.`;
                }
                break;
            case 'scissors':
                if(computerChoice === 'rock' ){
                    resultHTML.innerHTML = "You lose!!";
                    computerChoiceHTML.innerHTML = `Computer choose: ${computerChoice}.`;
                    computerScore++;
                    computerScoreHTML.innerHTML = `Computer: ${computerScore}.`
                }else{
                    resultHTML.innerHTML = "You Win!!";
                    computerChoiceHTML.innerHTML = `Computer choose: ${computerChoice}.`;
                    playerScore++;
                    playerScoreHTML.innerHTML = `Player: ${playerScore}.`;
                }
                break;  
        }
    }

}

function counterPlayComputer(){
    const indexOption = Math.floor(Math.random() * optionsWeapons.length);
    return optionsWeapons[indexOption];
}

function selectWeaponPlayer(){
    const userWeapon = this.id;
    const computerPlay = counterPlayComputer();
    updateScore(userWeapon,computerPlay);
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreHTML.innerHTML= `Player: ${playerScore}`;
    computerScoreHTML.innerHTML= `Computer: ${computerScore}`;
}

choices.forEach((choice) => choice.addEventListener('click',selectWeaponPlayer));
playAgainBtnHTML.addEventListener('click',resetGame);