//Loading up the images
const rockImg = new Image();
rockImg.src = "../assets/images/rock.png";

const paperImg = new Image();
paperImg.src = "../assets/images/paper.png";

const scissorsImg = new Image();
scissorsImg.src = "../assets/images/scissors.png";

const lizardImg = new Image();
lizardImg.src = "../assets/images/lizard.jpg";

const spockImg = new Image();
spockImg.src = "../assets/images/spock.jpg";

//Storing images into an array
const images = [rockImg, paperImg, scissorsImg, lizardImg, spockImg];

function computerChoice() {
  let compChoice = Math.floor(Math.random() * 5 + 1);

  return compChoice;
}

function checkResult(userChoice) {
  let compChoice = computerChoice();
  displayChoices(userChoice, compChoice);

  //Tie
  if (userChoice == compChoice) {
    $(".result").css("color", "orange");
    $(".result").text("Tie!");
    return;
  }

  // Rock Beats (Scissors or Lizard)
  if (userChoice == 1 && (compChoice == 3 || compChoice == 4)) {
    $(".result").css("color", "green");
    $(".result").text("You Win!");
    return;
  }
  // Paper Beats (Rock or Spock)
  else if (userChoice == 2 && (compChoice == 1 || compChoice == 5)) {
    $(".result").css("color", "green");
    $(".result").text("You Win!");
    return;
  }
  // Scissors Beats (Paper or Lizard)
  else if (userChoice == 3 && (compChoice == 2 || compChoice == 4)) {
    $(".result").css("color", "green");
    $(".result").text("You Win!");
    return;
  }
  //Lizard beats (Paper or Spock)
  else if (userChoice == 4 && (compChoice == 2 || compChoice == 5)) {
    $(".result").css("color", "green");
    $(".result").text("You Win!");
    return;
  }
  //Spock beats (Rock or Scissors)
  else if (userChoice == 5 && (compChoice == 1 || compChoice == 3)) {
    $(".result").css("color", "green");
    $(".result").text("You Win!");
    return;
  }

  // You lost
  $(".result").css("color", "red");
  $(".result").text("You Lost!");
  return;
}

function displayChoices(userChoice, compChoice) {
  $("#playerChoice").attr("src", images[userChoice - 1].src);

  $("#computerChoice").attr("src", images[compChoice - 1].src);
}
