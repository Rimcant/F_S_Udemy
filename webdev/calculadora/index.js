

 
// // document.querySelector("button").addEventListener("click", handleclick);

// // function handleclick() {
// //     alert("i got clicked!")
// // };



// /*var n = document.querySelectorAll(".drum").length;
//  console.log(n)
 
// for (var i = 0; i <= n; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("i got clicked!")
//     });
// }
// */

// // var n = 9

// // /for (var i = 0; i <= n; i++) {
    
// //     var numero = ".num" + i
// //     var numero1= String(numero)
// //     console.log (numero1)
 
// //     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
// //         alert(`${i} + ${numero} + ${numero1} `)
// //     });
// // }

// //document.querySelector(`.${n}`).addEventListener("click", handleclick);

//  //function handleclick() {
// //     alert(`${}`)
// // };

// //for (var i=0 n<7)
// //document.querySelectorAll(`.${n}`)[0]

var numeros = document.querySelectorAll(".drum");
console.log(numeros);
var numarray = []

for (var i = 0; i <= 14; i++) {
    console.log(numeros[i].textContent);
    numarray.push(numeros[i].textContent)
}
console.log(numarray)
