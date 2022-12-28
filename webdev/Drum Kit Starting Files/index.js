

 
// document.querySelector("button").addEventListener("click", handleclick);

// function handleclick() {
//     alert("i got clicked!")
// };






// ########################################################
// //detecting keyboard press!!
// #######################################################

document.addEventListener("keydown", function (event) {
    var key = event.key
    
    makeSound(key)
});

// ################################################
//detecting click press
// ##############################################
var n = document.querySelectorAll(".drum").length;
for (var i = 0; i <= n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        makeSound(key)
    });
}

// ######################################################
// function de fazer SOM
// #######################################################
function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()
            break;
        case "s":
            var tom2 = new Audio('./sounds/tom-3.mp3')
            tom2.play()
            break;
        case "d":
            var tom2 = new Audio('./sounds/tom-4.mp3')
            tom2.play()
            break;
        case "j":
            var tom2 = new Audio('./sounds/snare.mp3')
            tom2.play()
            break;
        case "k":
            var tom2 = new Audio('./sounds/crash.mp3')
            tom2.play()
            break;
        case "l":
            var tom2 = new Audio('./sounds/kick-bass.mp3')
            tom2.play()
            break;
        
        default:
            break;
    }

}
// ########################################################################
// ####################################################################




