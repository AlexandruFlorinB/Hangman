let wordsList = ["american", "bolovan", "armament", "european", "muzician", "filozof", "bombardament", "trandafir", "fotbal", "inginerie", "armonie", "cronologie", "matematica", "bucurie", "pilot", "informatica"]
let wordToGuess = wordsList[Math.floor(Math.random() * wordsList.length)]
let lines
let nrLives = 5
let textDisplayed = []
let wrongLetters = []

function printInterface() {
    wordToGuess = wordsList[Math.floor(Math.random() * wordsList.length)]
    alert(wordToGuess)
    underLines(wordToGuess)
}

function underLines(wordToGuess) {
    for (let i = 0; i < wordToGuess.length; ++i) {
        textDisplayed[i] = "_"
    }
    lines = textDisplayed.join(" ")
    document.getElementById("generate").innerHTML = lines
}

function letter() {
    let letter = document.getElementById("letter").value
    if (letter.length > 0) {
        let flag = 0
        for (let i = 0; i < wordToGuess.length; ++i) {
            if (wordToGuess[i] === letter) {
                textDisplayed[i] = letter
                flag = 1
            }   
        }
        if (flag === 0) {
            wrongLetters.push(letter)
            document.getElementById("recicled").value = wrongLetters
            flag = 1
            --nrLives
        }
        document.getElementById("generate").innerHTML = textDisplayed.join(" ")
        document.getElementById("lives").value = nrLives
        document.getElementById("letter").value = "" 
    }
    if (nrLives === 0) {
        document.getElementById("message").innerHTML = "You died"
    } 
    flag = 0
    for (let i = 0; i < wordToGuess.length; ++i) {
        if (textDisplayed[i] === "_") {
            flag = 1
            break
        }
    }
    if (flag === 0) {
        document.getElementById("message").innerHTML = "You won"
    }   
}

function resetPage() {
    textDisplayed = []
    wrongLetters = []
    nrLives = 5
    document.getElementById("generate").value = ""
    document.getElementById("letter").value = ""
    document.getElementById("recicled").value = ""
    document.getElementById("lives").value = 5
    document.getElementById("message").innerText = ""
    printInterface()
}





