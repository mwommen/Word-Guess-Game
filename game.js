document.addEventListener("DOMContentLoaded", function() {
  
 

var songNames = ["paris",  "closer", "roses", "hope", "young", "selfie", "somebody", "honest"]
//This is master copy
var randomWord = "";
//This is user version
var lettersOfWord = []//['_', '_', '_'] => '_ _ _'
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var letters = genCharArray('a', 'z');
//['r', 'o', 's', 'e', 's'] => 'roses'



var getRndomSong = function(array) {
    console.log(songNames)
    return array[Math.floor(Math.random() * array.length)]  
}
    
    randomWord = getRndomSong(songNames);
    console.log('randomWord', randomWord);
    
    // function game() {
        //     randomWord = songNames[Math.floor](Math.random() * word.length)];


var underScores = [];
for (var i = 0; i < randomWord.length; i++){
    underScores.push('_');
}
//creating a new varaible that is grabbing the id from HTML document 
var currentWordEl = document.getElementById('currentWord');
currentWordEl.innerText = underScores.join(' ');



//BIG NEXT STEP

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


//Listen to some event in teh dom that will be triggered when a key is pressed
//keypress, keypressup, keypressdown
document.onkeypress = function(event){
    console.log('hi', event.key);

    if(letters.includes(event.key.toLowerCase())){
        console.log('We ahve valid info and we can continue forward with app');
    }
    else {
        alert('Please press a lettter....');
    }
}

// 



});
