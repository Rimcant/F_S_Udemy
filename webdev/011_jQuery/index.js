alert("working")

// $("h1").css("color", "red");
$("h1").addClass("big-title margin-50")

// document.querySelector("h1");
//$("h1.title")
$("button").text("Don't Click Me!")

// for (var i = 0; i < 5; i++)
// document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//     document.querySelector("body").style.backgroundColor = "white";

// }
//     )

$("button").click(function () {
    $("h1").css("color", "purple");
    $("body").css("backgroundColor" , "white")
})
    

$("input").keypress(function (event) {
    console.log(event.key);
    //$("h1").html(event. key);
    $("h1").text(event. key);
    
    
})
$("button").on("mouseover", function () {
    $("button").css("backgroundColor", "red")
})

$("button").on("click", function () {
    $("h1").toggle();
})
