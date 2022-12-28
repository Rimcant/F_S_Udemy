
    function qualcor(qcor) {
        var qqcor = qcor
        return qqcor 
        
    }
//colocar som nos botoes

$(".contentor").click(function (event) { 
    
    var cor = event.target.id


    somdobotao(cor)
    qualcor(cor)
    
}) //da-te output de qual cor carregaste? ouputs sao red green blue yellow



function somdobotao(cor) {
    var SomBotao = new Audio(`./sounds/${cor}.mp3`);
    SomBotao.play();
    
} // toca o som da cor que carregaste
    

//pressionar qq tecla para mudar titulo para nivel 1


$(document).keydown(function (event) {
    var jogocomeça = event.key
    console.log(jogo)
    if (jogocomeça != "") {
        console.log("começa jogo")
        jogo()        
    }
})


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
     
    return sequenciaDeCores
}

function jogo() {


    for (let level = 1; level < 3; level++) {
        $("h1").html("level " + level)
        var a = tocaSomAleatorio()
        console.log(a)
        if (a = tocaSomAleatorio()) {

            console.log("continuar")
            
        } else {
            console.log("nao foi igual")

            console.log()
        }


        console.log()
        
        
        // var sequencia = []
        // sequencia = tocaSomAleatorio()
        
        
        
        //const element = array[index];
        
    }
    console.log(somdobotao())
    
    
    

}
    

    



    
    



    

        
    

    

//em nivel 1 luz acende 