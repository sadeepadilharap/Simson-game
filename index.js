
var gamePattern = ["red", "blue", "green", "yellow"];
var randomInteger = Math.floor(Math.random() * 4 + 1);
var runner = 1;
var i = 0;

while (runner == 1) {
    console.log("hello");
    waitForInput();
    runner = 0;
}


function waitForInput() {
    $(".btn").click(function () {
        if ($(this).hasClass("red")) {
            console.log("Red button clicked");
            pressedButton(this);
            if ((buttonValidator(i, this))) {
                i = i + 1;
            }else{
                playSound("wrong");
                gamePattern = [];
            }
            runner = 1;

        } else if ($(this).hasClass("blue")) {
            console.log("Blue button clicked");
            pressedButton(this);
            if ((buttonValidator(i, this))) {
                i = i + 1;
            }else{
                playSound("wrong");
                gamePattern = [];
            }
            runner = 1;

        } else if ($(this).hasClass("green")) {
            console.log("Green button clicked");
            pressedButton(this);
            if ((buttonValidator(i, this))) {
                i = i + 1;
            }else{
                playSound("wrong");
                gamePattern = [];
            }
            runner = 1;

        } else if ($(this).hasClass("yellow")) {
            console.log("Yellow button clicked");
            pressedButton(this);
            if ((buttonValidator(i, this))) {
                i = i + 1;
            }else{
                playSound("wrong");
                gamePattern = [];
            }
            runner = 1;

        }
    });
}




function buttonValidator(index, button) {
    // console.log(gamePattern[index]) ;
    // console.log(this.id);
    if (gamePattern[index] === button.id) {
        return true;
    } else {
        return false;
    }
}



function pushColor() {
    var randomInteger = Math.floor(Math.random() * 4 + 1);
    if (randomInteger === 1) {
        gamePattern.push("red");
    } else if (randomInteger === 2) {
        gamePattern.push("blue");
    } else if (randomInteger === 3) {
        gamePattern.push("green");
    } else if (randomInteger === 4) {
        gamePattern.push("yellow");
    }
}






function pressedButton(button) {
    $(button).addClass("pressed");
    setTimeout(function () {
        $(button).removeClass("pressed");
    }, 100);
    playSound(button.id);
}

function playSound(action) {
    var audio = new Audio("sounds/" + action + ".mp3");
    audio.play();
}



// var gamePattern = []; // Array to store the game pattern
// var playerPattern = []; // Array to store the player's input pattern

// // Function to add a random color to gamePattern
// function pushColor() {
//     var randomInteger = Math.floor(Math.random() * 4 + 1);
//     if (randomInteger === 1) {
//         gamePattern.push("red");
//     } else if (randomInteger === 2) {
//         gamePattern.push("blue");
//     } else if (randomInteger === 3) {
//         gamePattern.push("green");
//     } else if (randomInteger === 4) {
//         gamePattern.push("yellow");
//     }
// }

// // Function to play the game pattern
// function playGamePattern() {
//     for (let i = 0; i < gamePattern.length; i++) {
//         setTimeout(function() {
//             simulatePattern(gamePattern[i]); // Simulate showing the pattern
//         }, i * 1000); // Delay between each pattern element (adjust timing as needed)
//     }

//     // After showing the pattern, wait for player input
//     waitForPlayerInput();
// }

// // Function to simulate showing pattern (example function)
// function simulatePattern(color) {
//     $("#" + color).addClass("active"); // Add visual effect for the pattern
//     setTimeout(function() {
//         $("#" + color).removeClass("active"); // Remove visual effect after delay
//     }, 500); // Example: Remove visual cue after 500ms
// }

// // Function to wait for player input
// function waitForPlayerInput() {
//     $(".btn").off("click").on("click", function() {
//         var clickedColor = $(this).attr("id"); // Get ID of clicked button
//         pressedButton(this); // Visual effect for button press
//         playerPattern.push(clickedColor); // Store player's pattern

//         // Check if player pattern matches game pattern so far
//         if (!checkPattern()) {
//             console.log("Incorrect pattern!");
//             playSound("wrong");
//             gamePattern = []; // Reset game pattern for new round
//             playerPattern = []; // Reset player pattern for new round
//             setTimeout(function() {
//                 playGamePattern(); // Start new game pattern after delay
//             }, 1000);
//         } else {
//             console.log("Correct!");
//             // Continue waiting for player input until patterns match
//             if (playerPattern.length === gamePattern.length) {
//                 setTimeout(function() {
//                     playerPattern = []; // Clear player pattern for next round
//                     pushColor(); // Add another color to game pattern
//                     playGamePattern(); // Show new game pattern
//                 }, 1000); // Delay before showing new pattern
//             }
//         }
//     });
// }

// // Function to check if player pattern matches game pattern so far
// function checkPattern() {
//     for (let i = 0; i < playerPattern.length; i++) {
//         if (playerPattern[i] !== gamePattern[i]) {
//             return false; // Incorrect pattern
//         }
//     }
//     return true; // Correct pattern so far
// }

// // Initial setup: Start the game
// pushColor(); // Add initial color to game pattern
// playGamePattern(); // Start showing game pattern
