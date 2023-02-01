
// #####################PROGRAMA CALCULADORA ######################

//Só com click, selecionar o valor do ecrã com event listener
for (var i = 0; i <= 14; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    



        //tenho de gravar 2 variaveis diferentes uma antes do operador e outra depois do operador
        //mas a variavel antes do operador pode ter um + ou -
        //selecionares *ou/ ou = o resultado tem de dizer erro
        

        var antesDoOperador
        var depoisDoOperador

        
        

        
        var numeroSelecionado = this.innerHTML
        document.querySelector(".resultado").innerHTML += numeroSelecionado; //coloca no visor o 




        if (numeroSelecionado === "=")
            console.log("igual")
        if (numeroSelecionado === "+")
           console.log(conta(1,7,soma))
        if (numeroSelecionado === "=")
            console.log("igual")  
        
        
    });
}

function soma(n,m) {
return n+m
    
}

function conta(n, m, soma) {
    return soma(n,m)
    
}

console.log ()






