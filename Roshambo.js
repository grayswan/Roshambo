
var userScore = 0;
var computerScore = 0;
var winner = ["You win!", "Computer Wins!"];
var choice = ["rock", "paper", "scissors"];

function welcomeMessage() {
  var userName = prompt("Hello, what is your name?");
  if (userName !== '') {
    alert('Hello, ' + userName + '. Game on!');
  }
  else if (userName === '') {
    alert("Sorry, No Name. You can't play.");
    return;
   }
};
welcomeMessage();

// GAME //
// var i = 0;
// do {
//   bout(numBouts);
//   updateTotalScore;
//   if (result != 0) {
//     numBouts--;
//   }
//
//   while (i <= 2);
//
//   if (userScore > computerScore) {
//     alert("You won the match, you lucky dog!");
//   }
//   else {
//     alert("Sorry, you lose.");
//   };

  function bout(numThrows) {
  do {
    var user = userChoice();
    var computer = computerChoice();
    var result = compareChoices(user, computer);
    updateScores(result, 3);
    var boutResult = updateScores(user, computer);
    if (result != 0) {
       numThrows--;
    }
  }
  while (numThrows > 0);

  if (userScore > computerScore) {
    alert("You won Bout!");
    return 1;
  }
  else {
    alert("You lost! Computer won Bout!");
    return 2;
  }
};

// USER //
function userChoice() {
  var userChoice = prompt("What's your choice? rock, paper, or scissors?");
  if (userChoice === choice[0], choice[1], choice[2]) {
    return userChoice;
  }
  else {
      alert("You must choose rock, paper, or scissors. Try again.");
  }
};

// COMPUTER  //
function computerChoice() {
  var computerChoice = Math.random();
    if(computerChoice <= .33) {
      return choice[0];
    }
    else if (computerChoice < .67) {
      return choice[1];
    }
    else {
        return choice[2];
    }
};

// COMPARISON //
function compareChoices(choice1, choice2) {
  alert("You chose: " + choice1 + ". Computer chose: " + choice2 + ".");
  if (choice1 === choice2) {
       alert("Stalemate. Try Again.");
       return 0;
    }
  if ((choice1 === choice[0] && choice2 === choice[2])
                             ||
      (choice1 === choice[1] && choice2 === choice[0])
                             ||
      (choice1 === choice[2] && choice2 === choice[1]))
    {
      alert(winner[0]);
        return 1;
    }
    else {
      alert(winner[1]);
      return 2;
    }
  };

// SCORE //
function updateScores(result, points) {
  if (result === 1) {
    userScore += points;
  }
  if (result === 2) {
    computerScore += points;
  }
  if (result === 0) {
    userScore += 0;
    computerScore += 0;
  }
};

bout(3);

// function updateTotalScore(boutResult, points) {
//   if (result === 1) {
//     userScore += points;
//   }
//   if (result === 2) {
//     computerScore += points;
//   }
// }



// TO KEEP TRACK OF MATCHES AND LEADERBOARD? //
// var data = {
  //    trial1: [[1,2], [3,4]],
  //    trial2: [[2.3], [4,5]]
  // };
