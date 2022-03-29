let wordList = ["american", "bolovan", "armament", "european", "muzician", "filozof", "bombardament", "trandafir", "fotbal", "inginerie", "armonie", "cronologie", "matematica", "bucurie", "pilot", "informatica"]
let getWord = wordList[Math.floor(Math.random() * wordList.length)]

let lines
let nrLifes = 5
let textShown = []
let wrongLetter = []


function generateWord() {
    getWord = wordList[Math.floor(Math.random() * wordList.length)]
    for (let i = 0; i < getWord.length; ++i) {
        textShown[i] = "_"
    }
    lines = textShown.join(" ")
    document.getElementById("generate").innerHTML = lines
}

function letter() {
    var letter = document.getElementById("letter").value

    if (letter.length > 0) {
        let flag = 0
        for (let i = 0; i < getWord.length; ++i) {
            if (getWord[i] === letter) {
                textShown[i] = letter
                flag = 1
            }   
        }
        if (flag === 0) {
            wrongLetter.push(letter)
            document.getElementById("recicled").value = wrongLetter
            flag = 1
            --nrLifes
        }
        document.getElementById("generate").innerHTML = textShown.join(" ")
        document.getElementById("lifes").value = nrLifes
        document.getElementById("letter").value = "" 
    }
    if (nrLifes === 0) {
        document.getElementById("lives").innerHTML = "You died"
    } 
    flag = 0
    for (let i = 0; i < getWord.length; ++i) {
        if (textShown[i] === "_") {
            flag = 1
            break
        }
    }
    if (flag === 0) {
        document.getElementById("lives").innerHTML = "You won"
    }   
}

function resetPage() {
    textShown = []
    wrongLetter = []
    nrLifes = 5
    document.getElementById("generate").value = ""
    document.getElementById("letter").value = ""
    document.getElementById("recicled").value = ""
    document.getElementById("lifes").value = 5
    document.getElementById("lives").innerText = ""
    generateWord()
}





