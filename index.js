let homeScore = 0;
let guestScore = 0;
let homingReaction = "lead";

let homeScoreHS = document.getElementById("homeScores");
let guestScoreGS = document.getElementById("guestScores");

function gameReaction() {
  if (homeScore > guestScore) {
    document.getElementById("homeReaction").innerText = "Winning";
    document.getElementById("guestReaction").innerText = "Losing";
  } else if (homeScore == guestScore) {
    document.getElementById("homeReaction").innerText = "Tie";
    document.getElementById("guestReaction").innerText = "Tie";
  } else {
    document.getElementById("homeReaction").innerText = "Loosing";
    document.getElementById("guestReaction").innerText = "Winning";
  }
}

function add1Home() {
  homeScore += 1;
  homeScoreHS.textContent = homeScore;
  gameReaction();
}

function add2Home() {
  homeScore += 2;
  homeScoreHS.textContent = homeScore;
  gameReaction();
}

function add3Home() {
  homeScore += 3;
  homeScoreHS.textContent = homeScore;
  gameReaction();
}

function add1Guest() {
  guestScore += 1;
  guestScoreGS.textContent = guestScore;
  gameReaction();
}

function add2Guest() {
  guestScore += 2;
  guestScoreGS.textContent = guestScore;
  gameReaction();
}

function add3Guest() {
  guestScore += 3;
  guestScoreGS.textContent = guestScore;
  gameReaction();
}
