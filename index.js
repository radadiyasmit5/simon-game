colours = ["red", "green", "blue", "yellow"]
gamepattern = []
userClickedPattern = []

var started = false
var level = 0

$(document).keypress(function () {
    if (!started) {
        setTimeout(() => {
            $("#level-title").text("level " + level)
            checksequence()
            started = true
        }, 100);

    }

})
$(".btn").click(function () {
    
    var chosencolor = $(this).attr("id")
    userClickedPattern.push(chosencolor)

    animation(chosencolor)
    sound(chosencolor)

    checkanswer(userClickedPattern.length - 1)
    console.log("user clicked pattern length-------->",userClickedPattern.length);



})

function checkanswer(currentlevel) {

    if (userClickedPattern[currentlevel] === gamepattern[currentlevel]) {
        // console.log(userClickedPattern[currentlevel]);

        

        console.log("succes");
        if (userClickedPattern.length === gamepattern.length) {
            
        setTimeout(() => {
            checksequence()
            // console.log(userClickedPattern, "userclickedpattern");
        
            // console.log(gamepattern[currentlevel]);
            // console.log(gamepattern, "gamepattern");
        }, 1000);
    }
}
    else {
        console.log("wrong");

        $("*").addClass("game-over ")
        setTimeout(() => {
            $("*").removeClass("game-over ") 
        }, 200);
        $("#level-title").text("game over please press any key to start again")
        var sound = new Audio("sounds/wrong.mp3")
        sound.play()
        reset()

    }
   


}



function reset() {
    level = 0
    gamepattern = []
    started=false 
}


function checksequence() {
    userClickedPattern = []

    randomnumber = Math.floor(Math.random() * 4)
    randomchosencolor = colours[randomnumber]
    level++
    $("#level-title").text("Level " + level);

    $("#" + randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100)
    sound(randomchosencolor)
    gamepattern.push(randomchosencolor)
    console.log(" ");



}

function animation(name) {

    $("#" + name).addClass("pressed")
    setTimeout(() => {
        $("#" + name).removeClass("pressed")
    }, 100);
}

function sound(name) {
    var sound = new Audio("sounds/" + name + ".mp3")
    sound.play()
}