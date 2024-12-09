
let humanScore = 0;
let computerScore = 0; 
let computerChoice;
let humanChoice;
let winner = "computer";

function getComputerChoice() 
 {
    let choice = Math.random() * 100;

    if (choice < 33)
     {
        let computerChoice = "Scissors";
        computerChoice = computerChoice.toUpperCase();
        return computerChoice;
     }
     else if (choice < 66) 
     {
        let computerChoice = "Rock";
        computerChoice = computerChoice.toUpperCase();
        return computerChoice;
     }
     else {
        let computerChoice = "Paper";
        computerChoice = computerChoice.toUpperCase();
        return computerChoice;
     }

 }

function getHumanChoice()
 {
   let humanChoice = prompt("Enter in Rock, Paper, or Scissors");
   humanChoice = humanChoice.toUpperCase();
   console.log("You chose: " + humanChoice);
   return humanChoice;
 }

function playRound(computerChoice, humanChoice)
 {
    if (humanChoice == computerChoice)
    {
        console.log("Computer chooses: " + computerChoice)
        console.log("Its a TIE!!")
    }
    else if ((humanChoice == "ROCK" && computerChoice == "SCISSORS") 
              || (humanChoice == "SCISSORS" && computerChoice == "PAPER")
              || (humanChoice == "PAPER" && computerChoice == "ROCK"))
        {
            console.log("Computer chooses: " + computerChoice)
            console.log("You WON!!")
            return winner = "human";
        }
        else if ((computerChoice == "ROCK" && humanChoice == "SCISSORS") 
            || (computerChoice == "SCISSORS" && humanChoice == "PAPER")
            || (computerChoice == "PAPER" && humanChoice == "ROCK"))
            {
                console.log("Computer chooses: " + computerChoice)
                console.log("Computer WON!!");
                return winner = "computer";
            }
    else 
     {
        console.log("You entered an incorrect option, please try again")
        
     }
}

function playGame()
 {
   humanScore = 0;
   computerScore = 0;

   for (let i=1; i < 6; i++) 
    {
        console.log("Round: " + i)
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        winner = playRound(computerChoice, humanChoice);

        if (winner == "computer")
        {
            computerScore++;
            console.log("Computer score: " + computerScore)
            console.log("Your score: " + humanScore);
        }

        else if (winner == "human")
        {
            humanScore++;
            console.log("Computer score: " + computerScore)
            console.log("Your score: " + humanScore);
        }
        else 
        {
            console.log("Computer score: " + computerScore)
            console.log("Your score: " + humanScore);
        }
    }
    
    if (computerScore > humanScore)
    {
        console.log("Computer wins!!");
    }
    else 
    {
        console.log("CONGRATULATIONS! Human wins!!");
    }

 }

 playGame();







 



