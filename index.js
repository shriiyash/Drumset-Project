var Total_No_Drums = document.querySelectorAll(".drum").length;

for (var i = 0; i < Total_No_Drums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        MakeSound(buttonInnerHTML);
    });
}

// Optional: Enable keyboard support
document.addEventListener("keydown", function (event) {
    MakeSound(event.key);
});

function MakeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log("Unrecognized key: " + key);
            break;
    }
}
