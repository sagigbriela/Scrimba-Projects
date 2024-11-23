// Home score
let homeScore = document.getElementById("home-score")
// Guest score
let guestScore = document.getElementById("guest-score")

// total points
let totalHome = 0
let totalGuest = 0

//Home Add
function addOneToHome(){
    totalHome += 1
    homeScore.textContent = totalHome
}

function addTwoToHome(){
    totalHome += 2
    homeScore.textContent = totalHome
}

function addThreeToHome(){
    totalHome += 3
    homeScore.textContent = totalHome
}

//Guest Add
function addOneToGuest(){
    totalGuest += 1
    guestScore.textContent = totalGuest
}

function addTwoToGuest(){
    totalGuest += 2
    guestScore.textContent = totalGuest
}

function addThreeToGuest(){
    totalGuest += 3
    guestScore.textContent = totalGuest
}
