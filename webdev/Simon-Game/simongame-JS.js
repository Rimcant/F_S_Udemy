

var userClickedPattern = [];
var gamePattern = [] 
var start = false;
var level = 0;


$(".contentor").click(function (event) { 
    
     var cor = event.target.id
     userClickedPattern.push(cor);


    somdobotao(cor)
    checkAnswer();
     
 }) //da-te output de qual cor carregaste? ouputs sao red green blue yellow


//colocar som nos botoes
function somdobotao(cor) {
    var SomBotao = new Audio(`./sounds/${cor}.mp3`);
    SomBotao.play();
    var qcor = cor
    
} // toca o som da cor que carregaste
    

//pressionar qq tecla para iniciar o jogo 

$(document).keydown(function () {
    console.log("começa jogo")
    userClickedPattern = [];
    gamePattern = []
    if (!start) {
        
        sequenciadeniveis()
        start = true
    }
})

// esta funçao toca um som aleatorio e faz piscar o sitio do som 
function tocaSomAleatorio() {
    var cores = [green, red, yellow, blue]    
    var sequenciaDeCores = []
    var corRandom = cores[Math.floor(Math.random()*4)];
    somdobotao(corRandom.id);
    sequenciaDeCores.push(corRandom.id)
    //sinalizar o botao que fez barulho 
    $("#" + corRandom.id).addClass("btnglow_active");
    setTimeout(function() {
        $("#" + corRandom.id).removeClass('btnglow_active');
    }, 400);
     
    return corRandom.id
}

function sequenciadeniveis() {
    console.log("iniciou sequencia de niveis")
    userClickedPattern = [] 
    level++
    console.log("userClickedPattern devia dar vazio"+ userClickedPattern)
    console.log(userClickedPattern)
    
    $("h1").text("Level " + level)

    gamePattern.push(tocaSomAleatorio())
    console.log("gamePattern devia receber uma cor para alem da cor existente" + gamePattern)
    console.log(gamePattern)
    
    //produzir uma sequencia e meter essa sequencia num array


}

function checkAnswer() {
    console.log("verificar resposta")
    console.log("gamePattern")
    console.log(gamePattern)
    console.log(gamePattern.toString())
    console.log("gamePattern.length")
    console.log(gamePattern.length)
    console.log("userClickedPattern")
    console.log(userClickedPattern)
    console.log("userClickedPattern.length")
    console.log(userClickedPattern.length)
    if (gamePattern.length == userClickedPattern.length) {

        console.log("gamePattern.length == userClickedPattern.length")

        if (gamePattern.toString() == userClickedPattern.toString()) {
            

            console.log("gamepattern=userClickedPattern")
        
            sequenciadeniveis()
            
            
        } else {
            console.log("gamepattern = NOT EQUAL = variavel")
            somdobotao("wrong");
        
            $("h1").text("Game Over, Press Any Key to Restart");
            start = false
            level = 0
            userClickedPattern = [];
            gamePattern = [] 

        }

    }
    console.log("fim do if awnser")
    
    
    
}
    

    



    
    



    

        
    

    

//em nivel 1 luz acende 