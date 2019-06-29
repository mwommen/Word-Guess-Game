document.addEventListener("DOMContentLoaded", function() {
  
    
 

var songNames = ["paris",  "closer", "roses", "hope", "young", "selfie", "somebody", "honest"]
//This is master copy
var randomWord = "";
//This is user version
var lettersOfWord = []//['_', '_', '_'] => '_ _ _'
var wrongGuess = [];// empty array that will input number of wrong guesses, with a max of 10;
// var updateDisplay 
var wins = 0;
document.getElementById("totalWins").innerHTML = wins;
var remainingGuesses = 10; 
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
var letters = genCharArray('a', 'z');





var getRndomSong = function(array) {
    console.log(songNames)
    return array[Math.floor(Math.random() * array.length)]  
}
    
    randomWord = getRndomSong(songNames);
    console.log('randomWord', randomWord);
    
//give underscores to the length of the random word. 
var underScores = [];
for (var i = 0; i < randomWord.length; i++){
    underScores.push('_');
}
//creating a new varaible that is grabbing the id from HTML document 
var currentWordEl = document.getElementById('currentWord');
currentWordEl.innerText = underScores.join(' ');



// NEXT STEP
//We need to accept some user input
//Stack Overflow: https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-alphabet-in-jquery
function genCharArray(charA, charZ) {
    var letters = []; 
    var beginningChar = charA.charCodeAt(0); 
    var endingChar = charZ.charCodeAt(0);
    for (var i = beginningChar ; i <= endingChar; ++i) {
        letters.push(String.fromCharCode(i));
    }
    return letters;
}


//Listen to some event in the dom that will be triggered when a key is pressed
//keypress, keypressup, keypressdown
document.onkeypress = function(event){
    console.log('You guessed', event.key);
    var userGuess = event.key.toLowerCase();
}

    // this function makes sure if you press an uppercase letter it will still recognize the letter as lowercase. if any key other than a letter is pressed then alert will show.
    var userGuess = [];
    if(letters.includes(userGuess)){
        for(var i = 0; i < randomWord.length; i++){
            if(userGuess === randomWord[i]) {
                // console.log(`user guess = ${randomWord[i]}`)
                 console.log("user guess " + randomWord[i])
                
            }
        }
    }
    
    
    // letters === randomWord[i] 
    for (var j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === letters) {
        answerArray[j] = userGuess;
        remainingLetters--;
    }

}




 });
