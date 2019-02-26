
//game counters
var gamesWon = 0;
var gamesLost = 0;
//array containing all possible generated words
var generatedWord = ["anthony", "eliza", "petrell", "cadin", "edward", "andrew", "erik", "scott", "coco", "bernard"];
//Randomly choose a word
var currentWord;
//answer array
var answerArray = [];
//variables that hold #ofgameswon, guesses remaining, letters guessed
var remainingLetters;
var guessesRemaining = 6;
var incorrectLetters = [];
var findmatch = false;

//variables that hold references to the places in the HTML where we want to display things
var gamesWonText = document.getElementById("gamesWon");
var currentWordText = document.getElementById("currentWord");
var guessesRemainingText = document.getElementById("guessesRemaining");
var incorrectLettersText = document.getElementById("incorrectLetters");
var remainingLettersText = document.getElementById("remainingLetters");
var answerArrayText = document.getElementById("answerArray");
var gamesLostText = document.getElementById("gamesLost");


//function for entire game
gameReset = function (on) {

    //Randomly choose a word
    currentWord = generatedWord[Math.floor(Math.random() * generatedWord.length)];
    remainingLetters = currentWord.length;

    //answer array
    answerArray = [];
    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }
    //always display word first
    answerArrayText.textContent = "Current Word: " + answerArray;


    //variables that hold #ofgameswon, guesses remaining, letters guessed
    remainingLetters = currentWord.length;
    guessesRemaining = 6;
    incorrectLetters = [];
    // display current #ofgameswon, guesses remaining, incorrectLetters
    guessesRemainingText.textContent = "Guesses remaining: " + guessesRemaining;
    incorrectLettersText.textContent = "Incorrect Letters: " + incorrectLetters;
    remainingLettersText.textContent = "# of letters remaining: " + remainingLetters;
    gamesWonText.textContent = "Games Won: " + gamesWon;
    answerArrayText.textContent = "Current Word: " + answerArray;
    gamesLostText.textContent = "Games Lost: " + gamesLost;
} // end of gameReset

//function run whenever the user guesses a letter
document.onkeyup = function (event) {


    // determining which key was pressed
    var userGuess = event.key;
    findmatch = false;

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

        

        //Checking is guess is in currentWord
        if (remainingLetters > 0) {
            answerArray.join(" ");

            for (var i = 0; i < currentWord.length; i++) {

                if (currentWord[i] === userGuess) {
                    answerArray[i] = userGuess;
                    remainingLetters--;
                    findmatch = true;
                }

            }
        }

        if (findmatch === false) {
            guessesRemaining--;
            incorrectLetters.push(userGuess);
        }


        // display current #ofgameswon, guesses remaining, incorrectLetters
        guessesRemainingText.textContent = "Guesses remaining: " + guessesRemaining;
        incorrectLettersText.textContent = "Incorrect Letters: " + incorrectLetters;
        remainingLettersText.textContent = "# of letters remaining: " + remainingLetters;
        gamesWonText.textContent = "Games Won: " + gamesWon;
        answerArrayText.textContent = "Current Word: " + answerArray;
        gamesLostText.textContent = "Games Lost: " + gamesLost;

        if (remainingLetters === 0) {
            gamesWon++;
            alert("You won! The answer was " + currentWord);
            gameReset();
        }

        if (guessesRemaining === 0) {
            gamesLost++;
            alert("You lost! The correct answer was " + currentWord);
            gameReset();
        }
    }//valid key input

}

gameReset();



