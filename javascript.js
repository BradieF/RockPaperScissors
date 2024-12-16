let humanScore = 0;
let computerScore = 0; 
let rounds = 1;
    

const header = createElement("h1")
  updateText(header, "Select a button below to begin playing Rock  Paper Scissors!" )
  header.className = "header"
  document.body.appendChild(header);

const buttonDiv = createElement('div')
  document.body.appendChild(buttonDiv);
  buttonDiv.id = "button-container";

const scissorButton = createElement("button");
  scissorButton.className = "buttons"
  updateText(scissorButton, 'Scissors')
  buttonDiv.appendChild(scissorButton);

const paperButton = createElement("button");
  paperButton.className = "buttons"
  updateText(paperButton, 'Paper')
  buttonDiv.appendChild(paperButton);

const rockButton = createElement("button");
  rockButton.className = "buttons"
  updateText(rockButton, 'Rock')
  buttonDiv.appendChild(rockButton);

const scoreDiv = createElement('div')
  buttonDiv.appendChild(scoreDiv);
  scoreDiv.className = "scoreDiv"

const resultDiv = createElement("div");
  resultDiv.className = "resultDiv"
  document.body.appendChild(resultDiv);


const compScore = createElement('h3');
  scoreDiv.appendChild(compScore)
  updateText(compScore, "Computer Score: " + computerScore)
  compScore.className = "compScore scores";


const humScore = createElement('h3');
  scoreDiv.appendChild(humScore)
  humScore.textContent = "Your Score: " + humanScore;
  humScore.className = "humScore scores";

scissorButton.addEventListener("click", () => onClick("SCISSORS"));
paperButton.addEventListener("click", () =>onClick("PAPER"));
rockButton.addEventListener("click", () =>onClick("ROCK"));


function onClick(selection){
    if (humanScore == 5 || computerScore == 5){
        restartRound()
    }
    const round = createElement("h5");
    round.className = "round";
    updateText(round, "Round " + rounds);
    resultDiv.appendChild(round);
    rounds++;

    let computerChoice = getComputerChoice();
    let roundWinner = playRound(computerChoice, selection)
    calcScore(roundWinner);
    gameOver(humanScore, computerScore);

}

function updateText(element, text){
  return element.textContent = text;
}

function createElement(element){
  return document.createElement(element)
}

function getComputerChoice() {
  let choice = Math.random() * 100;

  if (choice < 33) return "SCISSORS";
    else if (choice < 66) return "ROCK";
    else return "PAPER";
 }

function calcScore (winner){
  if (winner == "computer" ){
    computerScore++;
    updateText(compScore, "Computer Score: " + computerScore)
    }
  else if (winner == "human"){
    humanScore++;
    updateText(humScore, "Your Score: " + humanScore)
    } 
 }

function gameOver (humanScore, computerScore){
  if (humanScore == 5 || computerScore == 5){
    const gameWinner = createElement("h2")
  if (humanScore == 5){
    updateText(gameWinner, "Game Over: You Win!")
    resultDiv.appendChild(gameWinner);
  }
  else if (computerScore == 5) {
    updateText(gameWinner, "Game Over: Computer Wins!")
    resultDiv.appendChild(gameWinner);
  }
  else if (computerScore == 5 && humanScore == 5) {
    updateText(gameWinner, "Game Over: It's a TIE!")
    resultDiv.appendChild(gameWinner);
  } 
    }
 }

function restartRound (){
  updateText(resultDiv, '')
  updateText(compScore, 'Computer Score: 0')
  updateText(humScore, 'Human Score: 0')
  humanScore = 0;
  computerScore = 0;
  rounds = 1;
 }

function playRound(computerChoice, humanChoice)
 {
    const comInput = createElement("p")
      updateText(comInput, "Computer chose: " + computerChoice)
      resultDiv.appendChild(comInput);

    const humInput = createElement("p")
      updateText(humInput, "You chose: " + humanChoice)
      resultDiv.appendChild(humInput);

    if (humanChoice == computerChoice){
      const tie = createElement("p")
        tie.className = "whoWon tie"
        updateText(tie, 'Its a TIE!')
        resultDiv.appendChild(tie);

      return "tie";
    }
    else if ((humanChoice == "ROCK" && computerChoice == "SCISSORS") 
              || (humanChoice == "SCISSORS" && computerChoice == "PAPER")
              || (humanChoice == "PAPER" && computerChoice == "ROCK")) {
        const humanWon = createElement("p")
          humanWon.className = "whoWon humanWon"
          updateText(humanWon, 'You win!')
          resultDiv.appendChild(humanWon);
    
        return "human";
        }
        else if ((computerChoice == "ROCK" && humanChoice == "SCISSORS") 
            || (computerChoice == "SCISSORS" && humanChoice == "PAPER")
            || (computerChoice == "PAPER" && humanChoice == "ROCK"))
            {
            const computerWon = createElement("p")
              computerWon.className = "whoWon computerWon"
              updateText(computerWon, 'Computer wins!')
              resultDiv.appendChild(computerWon);

            return "computer";
            }
    else {
        const error = createElement("p")
          updateText(error, "Error, incorrect option selected")
          resultDiv.appendChild(error);       
     }
}


