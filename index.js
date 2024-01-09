function updateCounter(home_or_guest, countNumber) {
    
    let elId 

    if (home_or_guest === "home") {
        elId = "home-score"
    } else if (home_or_guest === "guest") {
        elId = "guest-score"
    } else {
        console.log(`home_or_guest should be either 'home' or 'guest' not ${home_or_guest}`)
    }

    let score = parseInt(document.getElementById(elId).textContent) + countNumber
    document.getElementById(elId).textContent = score;

    highLightLeader()
}

function clearHighlights(){

    let elHomeScoreContainer = document.getElementById("home-score-container")
    let elGuestScoreContainer = document.getElementById("guest-score-container")

    elHomeScoreContainer.style.background = "black";
    elGuestScoreContainer.style.background = "black";
}


function highLightLeader(){

    clearHighlights()
    
    let elHomeScore = document.getElementById("home-score")
    let elGuestScore = document.getElementById("guest-score")

    let homeCounter = parseInt(elHomeScore.textContent)
    let guestCounter = parseInt(elGuestScore.textContent)


    let leadingTeam = "";
    if (homeCounter > guestCounter){
        leadingTeam = "home"
    } else if (guestCounter > homeCounter){
        leadingTeam = "guest"
    }

    document.getElementById(`${leadingTeam}-score-container`).style.background = "#ffeb3b";

}

function clearScores(){

    clearHighlights()

    let elHomeScore = document.getElementById("home-score")
    let elGuestScore = document.getElementById("guest-score")

    elHomeScore.textContent = 0
    elGuestScore.textContent = 0

}