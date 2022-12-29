

var userClickedPattern = [];
var gamePattern = [] 
var start = false;
var level = 0;


$(".contentor").click(function (event) { 
    
     var cor = event.target.id
     userClickedPattern.push(cor);


    somdobotao(cor)
    checkAnswer(cor);
     
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
    console.log(userClickedPattern)
    
    $("h1").text("Level " + level)
    gamePattern.push(tocaSomAleatorio())

    console.log(gamePattern)
    console.log("coraleatoria.target")
    
    

    //produzir uma sequencia e meter essa sequencia num array
      
        
       
   
        
    
    console.log("esta sequencia dada pela maquina " + gamePattern)
    console.log(gamePattern)

}

function checkAnswer(variavel) {
    console.log("verificar resposta")
    console.log("variavel.length - 1")
    console.log(variavel.length - 1)
    console.log("variavel")
    console.log(variavel)
    console.log("gamePattern")
    console.log(gamePattern)
    console.log("gamePattern.length")
    console.log(gamePattern.length)
    console.log("userClickedPattern")
    console.log(userClickedPattern)
    console.log(gamePattern.length)
    console.log("userClickedPattern.length")
    console.log(userClickedPattern.length)
    if (gamePattern.length == userClickedPattern.length) {

        console.log("gamePattern.length == userClickedPattern.length")

        if (gamePattern = userClickedPattern) {

            console.log("gamepattern=variavel")
        
            sequenciadeniveis()
            
            
        } else {
            console.log("gamepattern = NOT EQUAL = variavel")
            somdobotao("wrong");
        
            $("h1").text("Game Over, Press Any Key to Restart");
            start = false
            level = 0
        }

    }
    
    
    
}
    

    



    
    



    

        
    

    

//em nivel 1 luz acende 