let homeScore = document.getElementById("home-points")
let guestScore = document.getElementById("guest-points")
let sumHome = 0
let sumGuest = 0


function addOneHome() {
    homeScore.textContent = sumHome + 1
    sumHome += 1
}

function addTwoHome() {
    homeScore.textContent = sumHome + 2
    sumHome += 2
}

function addThreeHome() {
    homeScore.textContent = sumHome + 3
    sumHome += 3
}

function addOneGuest() {
    guestScore.textContent = sumGuest + 1
    sumGuest += 1
}

function addTwoGuest() {
    guestScore.textContent = sumGuest + 2
    sumGuest += 2
}

function addThreeGuest() {
    guestScore.textContent = sumGuest + 3
    sumGuest += 3
}