let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() *3);
  return choices[randomNumber];
}

function converter(letter) {
  if (letter === "r") return "Misha";
  if (letter === "p") return "Possubull";
  if (letter === "s") return "Assbutt";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUser = "user".fontsize(3).sub().fontcolor("#08a108");
  const smallComp = "comp".fontsize(3).sub().fontcolor("#09469c");
  result_p.innerHTML = `${converter(userChoice)}${(smallUser)} beats ${converter(computerChoice)}${(smallComp)}. You Win!`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 1500);
}



function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUser = "user".fontsize(3).sub().fontcolor("#08a108");
  const smallComp = "comp".fontsize(3).sub().fontcolor("#09469c");
  result_p.innerHTML = `${converter(userChoice)}${(smallUser)} loses to ${converter(computerChoice)}${(smallComp)}. You Lost!`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 1500);

}
function draw(userChoice, computerChoice) {
  const smallUser = "user".fontsize(3).sub().fontcolor("#08a108");
  const smallComp = "comp".fontsize(3).sub().fontcolor("#09469c");
  result_p.innerHTML = `${converter(userChoice)}${(smallUser)} equals to ${converter(computerChoice)}${(smallComp)}. It's a Draw!`;
  document.getElementById(userChoice).classList.add('yellow-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('yellow-glow') }, 1500);
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
    }
  }



function main(){
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })
}
main();

//by DeSqBlocki, credit goes to freeCodeCamp.org//
