let homeScore = 29;
let guestScore = 22;

document.getElementById("homeScores").textContent = homeScore;
document.getElementById("guestScore").textContent = guestScore;

function add1Home() {
  let scorersHome = (homeScore += 1);
  console.log(scorersHome);
  homeScore = scorersHome
}
