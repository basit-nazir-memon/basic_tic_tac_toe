let currentTurn = "X";
let currentPlayer = 1;
let p1Score = 0;
let p2Score = 0;

let pos1 = " ";
let pos2 = " ";
let pos3 = " ";
let pos4 = " ";
let pos5 = " ";
let pos6 = " ";
let pos7 = " ";
let pos8 = " ";
let pos9 = " ";

function f(a) {
  if (currentPlayer === 1) {
    if (a == 1 && pos1 == " ") {
      pos1 = "X";
      document.getElementById("1").innerText = "X";
    } else if (a == 2 && pos2 == " ") {
      pos2 = "X";
      document.getElementById("2").innerText = "X";
    } else if (a == 3 && pos3 == " ") {
      pos3 = "X";
      document.getElementById("3").innerText = "X";
    } else if (a == 4 && pos4 == " ") {
      pos4 = "X";
      document.getElementById("4").innerText = "X";
    } else if (a == 5 && pos5 == " ") {
      pos5 = "X";
      document.getElementById("5").innerText = "X";
    } else if (a == 6 && pos6 == " ") {
      pos6 = "X";
      document.getElementById("6").innerText = "X";
    } else if (a == 7 && pos7 == " ") {
      pos7 = "X";
      document.getElementById("7").innerText = "X";
    } else if (a == 8 && pos8 == " ") {
      pos8 = "X";
      document.getElementById("8").innerText = "X";
    } else if (a == 9 && pos9 == " ") {
      pos9 = "X";
      document.getElementById("9").innerText = "X";
    } else {
      return;
    }
    document.getElementById("turn").innerText = "Current Turn: Player 2";
    currentPlayer++;
  } else {
    if (a == 1 && pos1 == " ") {
      pos1 = "O";
      document.getElementById("1").innerText = "O";
    } else if (a == 2 && pos2 == " ") {
      pos2 = "O";
      document.getElementById("2").innerText = "O";
    } else if (a == 3 && pos3 == " ") {
      pos3 = "O";
      document.getElementById("3").innerText = "O";
    } else if (a == 4 && pos4 == " ") {
      pos4 = "O";
      document.getElementById("4").innerText = "O";
    } else if (a == 5 && pos5 == " ") {
      pos5 = "O";
      document.getElementById("5").innerText = "O";
    } else if (a == 6 && pos6 == " ") {
      pos6 = "O";
      document.getElementById("6").innerText = "O";
    } else if (a == 7 && pos7 == " ") {
      pos7 = "O";
      document.getElementById("7").innerText = "O";
    } else if (a == 8 && pos8 == " ") {
      pos8 = "O";
      document.getElementById("8").innerText = "O";
    } else if (a == 9 && pos9 == " ") {
      pos9 = "O";
      document.getElementById("9").innerText = "O";
    } else {
      return;
    }
    document.getElementById("turn").innerText = "Current Turn: Player 1";
    currentPlayer--;
  }
  if (
    (pos1 == pos2 && pos1 == pos3 && pos1 == "X") ||
    (pos4 == pos5 && pos5 == pos6 && pos5 == "X") ||
    (pos7 == pos8 && pos7 == pos9 && pos9 == "X") ||
    (pos1 == pos4 && pos1 == pos7 && pos1 == "X") ||
    (pos2 == pos5 && pos5 == pos8 && pos5 == "X") ||
    (pos3 == pos6 && pos6 == pos9 && pos9 == "X") ||
    (pos1 == pos5 && pos1 == pos9 && pos1 == "X") ||
    (pos3 == pos5 && pos5 == pos7 && pos5 == "X")
  ) {
    p1Score++;
    document.getElementById("player1").innerText = "Score: " + p1Score;
    document.getElementById("result").innerText = "Player 1 wins!";
    document.getElementById("ResultScreen").style.display = "block";
    document.getElementById("GameBoard").style.display = "none";
  } else if (
    (pos1 == pos2 && pos1 == pos3 && pos1 == "O") ||
    (pos4 == pos5 && pos5 == pos6 && pos5 == "O") ||
    (pos7 == pos8 && pos7 == pos9 && pos9 == "O") ||
    (pos1 == pos4 && pos1 == pos7 && pos1 == "O") ||
    (pos2 == pos5 && pos5 == pos8 && pos5 == "O") ||
    (pos3 == pos6 && pos6 == pos9 && pos9 == "O") ||
    (pos1 == pos5 && pos1 == pos9 && pos1 == "O") ||
    (pos3 == pos5 && pos5 == pos7 && pos5 == "O")
  ) {
    p2Score++;
    document.getElementById("player2").innerText = "Score: " + p2Score;
    document.getElementById("result").innerText = "Player 2 wins!";
    document.getElementById("ResultScreen").style.display = "block";
    document.getElementById("GameBoard").style.display = "none";
  } else if (
    pos1 != " " &&
    pos2 != "" &&
    pos3 != " " &&
    pos4 != "" &&
    pos5 != " " &&
    pos6 != "" &&
    pos7 != " " &&
    pos8 != "" &&
    pos9 != " "
  ) {
    document.getElementById("result").innerText = "Game Draw";
    document.getElementById("ResultScreen").style.display = "block";
    document.getElementById("GameBoard").style.display = "none";
  }
}

function nextGame() {
  pos1 = " ";
  pos2 = " ";
  pos3 = " ";
  pos4 = " ";
  pos5 = " ";
  pos6 = " ";
  pos7 = " ";
  pos8 = " ";
  pos9 = " ";
  document.getElementById("ResultScreen").style.display = "none";
  document.getElementById("GameBoard").style.display = "block";
  document.getElementById("1").innerText = "";
  document.getElementById("2").innerText = "";
  document.getElementById("3").innerText = "";
  document.getElementById("4").innerText = "";
  document.getElementById("5").innerText = "";
  document.getElementById("6").innerText = "";
  document.getElementById("7").innerText = "";
  document.getElementById("8").innerText = "";
  document.getElementById("9").innerText = "";
}
