var wins = 0;
var totalLoss = 0;
var alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var numWrongGuesses = 0;
var cpuChoice = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
var userListing = [];
var guessesDown = document.getElementById("guess");


document.onkeyup = function makeChoice(event) {

    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

    // Code to avoid duplicates for fun.
    // for(let i=0;i<userListing.length;i++) 
    // {
      
    //   if (userListing[i] === userChoice) 
    //     {
    //       numWrongGuesses--;
    //       alert("Thats a Duplicate");
    //       break;
    //     }
      
    // }
      
    userListing.push(userChoice);
    document.getElementById("letters").textContent = "Letters: " + userListing;

    if(userChoice == cpuChoice) {





        wins++;
        numWrongGuesses = 0;
        userListing=[];
        cpuChoice = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
        var targetScore = document.getElementById("scorewin");
        targetScore.textContent = "Wins: " + wins;
        alert("YOU WIN");




    } 
    
    
    
    else {
        
        
        
        numWrongGuesses++;
        guessesDown.textContent = "Guesses: " + (10 - numWrongGuesses);



    }

    if (numWrongGuesses === 10) 
    
    
    
    {
        userListing = [];
        totalLoss++;
        numWrongGuesses = 0;
        cpuChoice = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
        var targetLoss = document.getElementById("scoreloss");
        targetLoss.textContent = "Loses: " + totalLoss;
        alert("YOU LOSE");


    }
};