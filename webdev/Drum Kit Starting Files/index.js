

 
// document.querySelector("button").addEventListener("click", handleclick);

// function handleclick() {
//     alert("i got clicked!")
// };



var n = document.querySelectorAll(".drum").length;
 console.log(n)   
 
for (var i = 0; i <= n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("i got clicked!")
    });
}



