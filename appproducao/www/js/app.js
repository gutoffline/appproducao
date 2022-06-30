function incluirUmaLinha(){
    //pegar todos os valores
    let produto = document.getElementById("produto").value
    let produzido = document.getElementById("produzido").value
    let meta = document.getElementById("meta").value
    let deficit = meta - produzido

    //montar a linha da tabela
    let linhaNova = `<tr><td>${produto}</td>`
    linhaNova += `<td>${produzido}</td>`
    linhaNova += `<td>${meta}</td>`
    linhaNova += `<td>${deficit}</td>`
    linhaNova += `<td><button class="btn red" onclick="excluirUmaLinha(this)">Excluir</button></td></tr>`
    document.getElementById("controle-producao").innerHTML += linhaNova
}

function limpar(){
    document.getElementById("produto").value = ""
    document.getElementById("produzido").value = ""
    document.getElementById("meta").value = 25
}

let btSalvar = document.getElementById("salvar")
btSalvar.addEventListener("click",function(){
    incluirUmaLinha()
    limpar()
    salvar()
})

function salvar(){
    localStorage.controleProducao = document.getElementById("controle-producao").innerHTML
    navigator.vibrate(3000)
}

function excluirTudo(){
    localStorage.clear()
    document.getElementById("controle-producao").innerHTML = ""
}

btLimpar = document.getElementById("limpar")
btLimpar.addEventListener("click",function(){
    excluirTudo()
})


function excluirUmaLinha(botao){
 botao.parentNode.parentNode.remove()
 salvar()
}


function carregar(){
    if(localStorage.controleProducao){
        document.getElementById("controle-producao").innerHTML = localStorage.controleProducao
    }
}

window.addEventListener("load",function(){
    carregar()
})


function onBatteryStatus(info) { 
    alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged); 
}

onBatteryStatus()

function dialogAlert(){
    var texto = "Fique sempre alerta";
    var titulo = "ALERTA";
    var botaoTexto = "Botão do alerta";
    
    navigator.notification.alert(texto, funcaoRetorno, titulo, botaoTexto);
    
    function funcaoRetorno(){
        alert("Você foi avisado!");
    }
}

function dialogConfirm(){
    var texto = "Você está com fome?";
    var titulo="FOME";
    var nomeBotoes="SIM,NÃO,TALVEZ";
    navigator.notification.confirm(texto, funcaoRetorno, titulo, nomeBotoes);
    
    function funcaoRetorno(botao){
        alert("você apertou o botão " + botao + " !");
        if(botao == 1){
            alert("Você está com fome");
        }else if(botao == 2){
            alert("Você não está com fome");
        }else if(botao == 3){
            alert("Você não sabe se \nestá com fome");
        }
    }
}