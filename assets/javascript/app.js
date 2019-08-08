let time = 30;
const correctA = ["Summer", "Ramsey Bolton", "Roose Bolton", "The Prince of Flowers", "Five", "Three"];
let timer = setInterval(countdown, 1000);
let correct = 0;
let inCorrect = 0;

//creates a function that counts the timer down to 0 and runs endgame function and stoptimer function
    function countdown() {
        console.log("Count down: " + time);
        time--;
        if (time < 1) {
            endGame();
            stopTimer();
        }
        //gets the element timer in HTML and gives it the text content of the time variable.
        document.getElementById("timer").textContent = time;
    }
    // stops the timer at 0 instead of continuing to negatives
    function stopTimer() {
        clearInterval(timer);
    }
    //ends the game
    function endGame() {
        console.log("end game trig")
        correct = 0;
        inCorrect = 0;
        //ends the game early if they finish before the 30 seconds are up
        document.getElementById("end-game-early").style.display = "none";
        //picks out the correect answers and adds them to the correct answer variable
        //picks out the wrong answers and adds them to the incorrect answer variable
        for (let i = 0; i < correctA.length; i++) {
            const answer = document.getElementById("q" + i).value;
            if (answer === correctA[i]){
                correct++;
            }
            else {
                inCorrect++;
            }
            console.log(i, answer);
            //shows the score block div which has the # of correct and incorrect answers
            document.getElementById("score").style.display = "block";
            //no longer displays the questions and replaces them with the score
            document.getElementById("questions").style.display = "none";
            //sets the divs to the variable correct and incorrect
            document.getElementById("correct").textContent = correct;
            document.getElementById("incorrect").textContent = inCorrect;
            
            
        }
        resetGame()
    }
    //make a function that resets the game after 3 seconds of looking at the endgame page.
    function resetGame() {
        // make timer that triggers location.reload after 3 seconds
        
         setTimeout(function(){
            console.log("k")
            location.reload()
        }, 3000)
    }
        //make page refresh after 3 seconds
       





document.getElementById("end-game-early").addEventListener("click", function(){
    endGame();
});

// function reload() {
//     time = 3;
//     time--;
//     if (time === 0);
//     document.getElementById("questions").style.display = "block";
// }





// function reset() {
//     document.getElementById("reset").addEventListener.onclick = endGame();
// }

// function finish() {
//     document.getElementById("end-game-early").addEventListener("click").onclick = endGame();
// }

// have each question have a set of answers with one correct one

// display a page that adds up all of the correct answers and incorrect answers