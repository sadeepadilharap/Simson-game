var gamePattern = [];
var index;
var level;



$(document).on("keypress", keyPressHandler);
waitForInput();



function waitForInput() {
    $(".btn").click(function () {
        if ($(this).hasClass("green")) {
            console.log("Green button clicked");
            pressedButton(this.id);
            buttonValidator(this);

        } else if ($(this).hasClass("red")) {
            console.log("Red button clicked");
            pressedButton(this.id);
            buttonValidator(this);

        } else if ($(this).hasClass("yellow")) {
            console.log("Yellow button clicked");
            pressedButton(this.id);
            buttonValidator(this);

        } else if ($(this).hasClass("blue")) {
            console.log("Blue button clicked");
            pressedButton(this.id);
            buttonValidator(this);
        }

    });

}




function buttonValidator(button) {

    if (gamePattern[index] === button.id) {

        index = index + 1;

        if (index === gamePattern.length) {

            level = level + 1;
            $("#level-title").text("level " + level);

            setTimeout(function () {
                $("body").addClass("gold");
            }, 200);
            setTimeout(function () {
                $("body").removeClass("gold");
            }, 300);

            setTimeout(function () {
                pushColor();
                index = 0;
            }, 2000);

        }
    } else {

        playSound("wrong");
        gamePattern = [];
        $("#level-title").text("Press any key to restart");

        setTimeout(function () {
            $("body").addClass("red");
        }, 200);
        setTimeout(function () {
            $("body").removeClass("red");
        }, 300);

        $(document).on("keypress", keyPressHandler);

    }
}

function keyPressHandler() {
    index = 0;
    level = 0;
    $("#level-title").text("level " + level);

    setTimeout(function () {
        pushColor();
    }, 1000);

    $(document).off("keypress", keyPressHandler);

}



function pushColor() {

    var randomInteger = Math.floor(Math.random() * 4 + 1);

    if (randomInteger === 1) {
        gamePattern.push("green");
        pressedButton("green");

    } else if (randomInteger === 2) {
        gamePattern.push("red");
        pressedButton("red");

    } else if (randomInteger === 3) {
        gamePattern.push("yellow");
        pressedButton("yellow");

    } else if (randomInteger === 4) {
        gamePattern.push("blue");
        pressedButton("blue");

    }
}






function pressedButton(button) {

    $("#" + button).addClass("pressed");

    setTimeout(function () {
        $("#" + button).removeClass("pressed");
    }, 100);

    playSound(button);
}

function playSound(action) {

    var audio = new Audio("sounds/" + action + ".mp3");
    audio.play();
}



