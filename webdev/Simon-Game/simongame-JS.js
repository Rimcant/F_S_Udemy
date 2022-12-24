

//colocar som nos botoes

$(".contentor").click(function (event) { 
    var cor = event.target.id;
    somdobotao(cor)
}) //da-te output de qual cor carregaste? 


function somdobotao(cor) {
    var SomBotao = new Audio(`./sounds/${cor}.mp3`);
    SomBotao.play();    
} // toca o som da cor que carregaste
    

//pressionar qq tecla para mudar titulo para nivel 1

function jogo() {
    $("h1").html("level 1")



    $("h1").html("Game Over, Press Any Key to Restart")
    
}

$(document).keydown(function (event) {
    var jogocomeça = event.key
    console.log(jogo)
    if (jogocomeça != "") {
        console.log("começa jogo")
        jogo()        
    }
}) 
    

        
    

    

//em nivel 1 luz acende 