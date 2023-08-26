// ----------------------------- SCRIPT REFERENTE AO MENU LATERAL----------------------------------------------
function fecharMenuLateral(){
    document.getElementById("menuLateral").style.transform = "translateX(-3000px)"
}

function abrirMenuLateral(){
    document.getElementById("menuLateral").style.transform = "translateX(0px)"
}






































// ----------------------------- SCRIPT REFERENTE AO CARROSEL DE IMAGENS E AO CARROSEL DE TEXTOS ----------------------------------
function carrosel(){
    var Carrosel = setInterval (()=>{
        var contador = document.getElementById('contador').innerHTML
        var numero = parseInt(contador) + 1
        var imagemCorrente = document.getElementById('imagemCorrente')
        document.getElementById('contador').innerHTML = numero

        if (numero == 1){
            imagemCorrente.setAttribute("src", "bg1.jpg")
        }

        else if (numero == 2){
            imagemCorrente.setAttribute("src", "bg2.jpg")
        }

        else if (numero == 3){
            imagemCorrente.setAttribute("src", "bg3.jpg")
        }

        else if (numero == 4){
            imagemCorrente.setAttribute("src", "bg4.jpg")
        }

        else if (numero == 5){
            imagemCorrente.setAttribute("src", "bg5.jpg")
        }
        //Zerando o contador
        else if (numero > 5){
            document.getElementById('contador').innerHTML = 0 
        }
       

    }, 3000)



    var imagens = setInterval(()=>{
        var frases = document.querySelector("#FraseBonitinha").innerHTML
        var cont = document.getElementById("cont").innerHTML
        var soma = parseInt(cont) + 1
        var cont = document.getElementById("cont").innerHTML = soma

        if (soma == 1){
            var frases = document.querySelector("#FraseBonitinha").innerHTML = "1" 
        }
        else if (soma == 2){
            var frases = document.querySelector("#FraseBonitinha").innerHTML = "2"
        }
        else if (soma == 3){
            var frases = document.querySelector("#FraseBonitinha").innerHTML = "3"
        }
        else if (soma == 4){
            var frases = document.querySelector("#FraseBonitinha").innerHTML = "4"
        }
        else if (soma == 5){
            var frases = document.querySelector("#FraseBonitinha").innerHTML = "5"
        }
        else if (soma > 5){
            document.getElementById("cont").innerHTML = 0
        }
    }, 3000)
}



































































//-----------------------------SCRIPT PARA MUDAR AS OPÇÕES DE MENU----------------------------------------
function mostrarTradicionais(){
    var tradicionais = document.getElementById("tradicionais").style.display = "flex"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.borderBottom = "#ffbb03 4px solid"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.color = "#ffbb03"
    
    var artesanais = document.getElementById("artesanais").style.display = "none"
    var ARTESANAIS = document.getElementById("ARTESANAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("ARTESANAIS").style.color = "#1e1700"

    var doces = document.getElementById("doces").style.display = "none"
    var DOCES = document.getElementById("DOCES").style.border = "none"
    var TRADICIONAIS = document.getElementById("DOCES").style.color = "#1e1700"

    var combos = document.getElementById("combos").style.display = "none"
    var COMBOS = document.getElementById("COMBOS").style.border = "none"
    var TRADICIONAIS = document.getElementById("COMBOS").style.color = "#1e1700"
}


function mostrarArtesanais(){
    var artesanais = document.getElementById("artesanais").style.display = "flex"
    var ARTESANAIS = document.getElementById("ARTESANAIS").style.borderBottom = "#ffbb03 4px solid"
    var TRADICIONAIS = document.getElementById("ARTESANAIS").style.color = "#ffbb03"
    
    var tradicionais = document.getElementById("tradicionais").style.display = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.color = "#1e1700"
    
    var doces = document.getElementById("doces").style.display = "none"
    var DOCES = document.getElementById("DOCES").style.border = "none"
    var TRADICIONAIS = document.getElementById("DOCES").style.color = "#1e1700"

    var combos = document.getElementById("combos").style.display = "none"
    var COMBOS = document.getElementById("COMBOS").style.border = "none"
    var TRADICIONAIS = document.getElementById("COMBOS").style.color = "#1e1700"
}


function mostrarDoces(){
    var doces = document.getElementById("doces").style.display = "flex"
    var DOCES = document.getElementById("DOCES").style.borderBottom = "#ffbb03 4px solid"
    var TRADICIONAIS = document.getElementById("DOCES").style.color = "#ffbb03"
    
    var tradicionais = document.getElementById("tradicionais").style.display = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.color = "#1e1700"

    var artesanais = document.getElementById("artesanais").style.display = "none"
    var ARTESANAIS = document.getElementById("ARTESANAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("ARTESANAIS").style.color = "#1e1700"

    var combos = document.getElementById("combos").style.display = "none"
    var COMBOS = document.getElementById("COMBOS").style.border = "none"
    var TRADICIONAIS = document.getElementById("COMBOS").style.color = "#1e1700"
}


function mostrarCombos(){
    var combos = document.getElementById("combos").style.display = "flex"
    var COMBOS = document.getElementById("COMBOS").style.borderBottom = "#ffbb03 4px solid"
    var TRADICIONAIS = document.getElementById("COMBOS").style.color = "#ffbb03"

    var tradicionais = document.getElementById("tradicionais").style.display = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("TRADICIONAIS").style.color = "#1e1700"
    
    var artesanais = document.getElementById("artesanais").style.display = "none"
    var ARTESANAIS = document.getElementById("ARTESANAIS").style.border = "none"
    var TRADICIONAIS = document.getElementById("ARTESANAIS").style.color = "#1e1700"

    var doces = document.getElementById("doces").style.display = "none"
    var DOCES = document.getElementById("DOCES").style.border = "none"
    var TRADICIONAIS = document.getElementById("DOCES").style.color = "#1e1700"
}































// --------- SCRIPT REFERENTE AO BOTÃO QUE MOSTRA E O X QUE ESCONDE A LISTA DE INGREDIENTES DOS BURGUERES ---------------------------
function mostrarIgredientesTradicional1(){
    document.getElementById("igredientes-tradicional1").style.display = "block"
}
function fecharIgredientesTradicional1(){
    document.getElementById("igredientes-tradicional1").style.display = "none"
}

function mostrarIgredientesTradicional2(){
    document.getElementById("igredientes-tradicional2").style.display = "block"
}
function fecharIgredientesTradicional2(){
    document.getElementById("igredientes-tradicional2").style.display = "none"
}

function mostrarIgredientesTradicional3(){
    document.getElementById("igredientes-tradicional3").style.display = "block"
}
function fecharIgredientesTradicional3(){
    document.getElementById("igredientes-tradicional3").style.display = "none"
}

function mostrarIgredientesTradicional4(){
    document.getElementById("igredientes-tradicional4").style.display = "block"
}
function fecharIgredientesTradicional4(){
    document.getElementById("igredientes-tradicional4").style.display = "none"
}



function mostrarIgredientesArtesanal1(){
    document.getElementById("igredientes-artesanal1").style.display = "block"
}
function fecharIgredientesArtesanal1(){
    document.getElementById("igredientes-artesanal1").style.display = "none"
}

function mostrarIgredientesArtesanal2(){
    document.getElementById("igredientes-artesanal2").style.display = "block"
}
function fecharIgredientesArtesanal2(){
    document.getElementById("igredientes-artesanal2").style.display = "none"
}

function mostrarIgredientesArtesanal3(){
    document.getElementById("igredientes-artesanal3").style.display = "block"
}
function fecharIgredientesArtesanal3(){
    document.getElementById("igredientes-artesanal3").style.display = "none"
}



function mostrarIgredientesDoce1(){
    document.getElementById("igredientes-doce1").style.display = "block"
}
function fecharIgredientesDoce1(){
    document.getElementById("igredientes-doce1").style.display = "none"
}

function mostrarIgredientesDoce2(){
    document.getElementById("igredientes-doce2").style.display = "block"
}
function fecharIgredientesDoce2(){
    document.getElementById("igredientes-doce2").style.display = "none"
}

function mostrarIgredientesDoce3(){
    document.getElementById("igredientes-doce3").style.display = "block"
}
function fecharIgredientesDoce3(){
    document.getElementById("igredientes-doce3").style.display = "none"
}



function mostrarIgredientesCombo1(){
    document.getElementById("igredientes-combo1").style.display = "block"
}
function fecharIgredientesCombo1(){
    document.getElementById("igredientes-combo1").style.display = "none"
}

function mostrarIgredientesCombo2(){
    document.getElementById("igredientes-combo2").style.display = "block"
}
function fecharIgredientesCombo2(){
    document.getElementById("igredientes-combo2").style.display = "none"
}

function mostrarIgredientesCombo3(){
    document.getElementById("igredientes-combo3").style.display = "block"
}
function fecharIgredientesCombo3(){
    document.getElementById("igredientes-combo3").style.display = "none"
}























































// --------------------- Script Referente a adição dos Burgueres ao carrinho ------------------------------
function addTradicional1(){ //Função referente a adição do item1 da lista de burgueres tradicionais
    alert("Capa de Filé adicionado ao carrinho :)")
   
    var nomeTradicional1 = document.querySelector("#bt1 h1").innerHTML
    var precoTradicional1 = document.getElementById("preço-tradicional1").innerHTML
    var qtdTradicional1 = document.querySelector("#bt1 #qtdTradicional1").value
    
    if (qtdTradicional1 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdTradicional1 = document.querySelector("#bt1 #qtdTradicional1").value = 1    
    }

    else if (qtdTradicional1 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdTradicional1 = document.querySelector("#bt1 #qtdTradicional1").value = 5
    }
    
    var precoT1 = 20
    var totalTradicional1 = Number(precoT1 * qtdTradicional1)
    
    var listaTradicional1 = document.getElementById("resTradicional1").innerHTML = `Nome: ${nomeTradicional1} <br>`
    var listaTradicional1 = document.getElementById("resTradicional1").innerHTML += `Preço: ${precoTradicional1} <br>`
    var listaTradicional1 = document.getElementById("resTradicional1").innerHTML += `Quantidade: ${qtdTradicional1} Unidades <br>`
    var listaTradicional1 = document.getElementById("resTradicional1").innerHTML += `Total: ${totalTradicional1},00$`

    var botaoRmoverTr1 = document.getElementById("botaoRemoverTr1").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item1Tr = document.getElementById("item1Tr").style.display = "block"
    //Adicionando valor ao nome do tradicional 1
    document.getElementById("nomeTr1").innerHTML = `${nomeTradicional1}, `
}

function removerTr1(){ //Função para remover da lista o item 1 de burqueres tradicionais
   var item1Tr = document.getElementById("item1Tr").style.display = "none"
   var qtdTradicional1 = document.querySelector("#bt1 #qtdTradicional1").value = ""
    document.getElementById("nomeTr1").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}






function addTradicional2(){ //Função referente a adição do item2 da lista de burgueres tradicionais
    alert("Contra - Filé adicionado ao carrinho :)")
   
    var nomeTradicional2 = document.querySelector("#bt2 h1").innerHTML
    var precoTradicional2 = document.getElementById("preço-tradicional2").innerHTML
    var qtdTradicional2 = document.querySelector("#bt2 #qtdTradicional2").value
    
    if (qtdTradicional2 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdTradicional2 = document.querySelector("#bt2 #qtdTradicional2").value = 1    
    }

    else if (qtdTradicional2 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdTradicional2 = document.querySelector("#bt2 #qtdTradicional2").value = 5
    }
    
    var precoT2 = 25
    var totalTradicional2 = Number(precoT2 * qtdTradicional2)
    
    var listaTradicional2 = document.getElementById("resTradicional2").innerHTML = `Nome: ${nomeTradicional2} <br>`
    var listaTradicional2 = document.getElementById("resTradicional2").innerHTML += `Preço: ${precoTradicional2} <br>`
    var listaTradicional2 = document.getElementById("resTradicional2").innerHTML += `Quantidade: ${qtdTradicional2} Unidades <br>`
    var listaTradicional2 = document.getElementById("resTradicional2").innerHTML += `Total: ${totalTradicional2},00$`

    var botaoRmoverTr2 = document.getElementById("botaoRemoverTr2").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item2Tr = document.getElementById("item2Tr").style.display = "block" //Fazendo o item 2 de bg tradicional aparecer novamente depois de ser removido da lista 
    //adicionando valor ao nome do burger tradicional 2
    document.getElementById("nomeTr2").innerHTML = `${nomeTradicional2}, `
}

function removerTr2(){ //Função para remover da lista o item 2 de burqueres tradicionais
   var item2Tr = document.getElementById("item2Tr").style.display = "none" //Removendo o item 2 de bg tradicional da lista
   var qtdTradicional2 = document.querySelector("#bt2 #qtdTradicional2").value = ""
   document.getElementById("nomeTr2").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}






function addTradicional3(){ //Função referente a adição do item 3 da lista de burgueres tradicionais
    alert("Carne com Bacon adicionado ao carrinho :)")
   
    var nomeTradicional3 = document.querySelector("#bt3 h1").innerHTML
    var precoTradicional3 = document.getElementById("preço-tradicional3").innerHTML
    var qtdTradicional3 = document.querySelector("#bt3 #qtdTradicional3").value
    
    if (qtdTradicional3 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdTradicional3 = document.querySelector("#bt3 #qtdTradicional3").value = 1    
    }

    else if (qtdTradicional3 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdTradicional3 = document.querySelector("#bt3 #qtdTradicional3").value = 5
    }
    
    var precoT3 = 30
    var totalTradicional3 = Number(precoT3 * qtdTradicional3)
    
    var listaTradicional3 = document.getElementById("resTradicional3").innerHTML = `Nome: ${nomeTradicional3} <br>`
    var listaTradicional3 = document.getElementById("resTradicional3").innerHTML += `Preço: ${precoTradicional3} <br>`
    var listaTradicional3 = document.getElementById("resTradicional3").innerHTML += `Quantidade: ${qtdTradicional3} Unidades <br>`
    var listaTradicional3 = document.getElementById("resTradicional3").innerHTML += `Total: ${totalTradicional3},00$`

    var botaoRmoverTr3 = document.getElementById("botaoRemoverTr3").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item3Tr = document.getElementById("item3Tr").style.display = "block" //Fazendo o item 3 de bg tradicional aparecer novamente depois de ser removido da lista
    document.getElementById("nomeTr3").innerHTML = `${nomeTradicional3}, `//adicionando valor ao nome dinâmico do tradicional 3
}

function removerTr3(){ //Função para remover da lista o item 3 de burqueres tradicionais
   var item3Tr = document.getElementById("item3Tr").style.display = "none" //Removendo o item 3 de bg tradicional da lista
   var qtdTradicional3 = document.querySelector("#bt3 #qtdTradicional3").value = ""
    document.getElementById("nomeTr3").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}







function addTradicional4(){ //Função referente a adição do item 4 da lista de burgueres tradicionais
    alert("Carne com Calabresa adicionado ao carrinho :)")
   
    var nomeTradicional4 = document.querySelector("#bt4 h1").innerHTML
    var precoTradicional4 = document.getElementById("preço-tradicional4").innerHTML
    var qtdTradicional4 = document.querySelector("#bt4 #qtdTradicional4").value
    
    if (qtdTradicional4 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdTradicional4 = document.querySelector("#bt4 #qtdTradicional4").value = 1    
    }

    else if (qtdTradicional4 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdTradicional4 = document.querySelector("#bt4 #qtdTradicional4").value = 5
    }
    
    var precoT4 = 26
    var totalTradicional4 = Number(precoT4 * qtdTradicional4)
    
    var listaTradicional4 = document.getElementById("resTradicional4").innerHTML = `Nome: ${nomeTradicional4} <br>`
    var listaTradicional4 = document.getElementById("resTradicional4").innerHTML += `Preço: ${precoTradicional4} <br>`
    var listaTradicional4 = document.getElementById("resTradicional4").innerHTML += `Quantidade: ${qtdTradicional4} Unidades <br>`
    var listaTradicional4 = document.getElementById("resTradicional4").innerHTML += `Total: ${totalTradicional4},00$`

    var botaoRmoverTr4 = document.getElementById("botaoRemoverTr4").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item4Tr = document.getElementById("item4Tr").style.display = "block" //Fazendo o item 4 de bg tradicional aparecer novamente depois de ser removido da lista
    document.getElementById("nomeTr4").innerHTML = `${nomeTradicional4}, `//adicionando valor ao nome dinâmico do tradicional 4
}

function removerTr4(){ //Função para remover da lista o item 4 de burqueres tradicionais
   var item4Tr = document.getElementById("item4Tr").style.display = "none" //Removendo o item 4 de bg tradicional da lista
   var qtdTradicional4 = document.querySelector("#bt4 #qtdTradicional4").value = ""
    document.getElementById("nomeTr4").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}













function addArtesanal1(){ //Função referente a adição do item1 da lista de burgueres artesanais
    alert("Coração de Frango com Bacon adicionado ao carrinho :)")
   
    var nomeArtesanal1 = document.querySelector("#ba1 h1").innerHTML
    var precoArtesanal1 = document.getElementById("preço-artesanal1").innerHTML
    var qtdArtesanal1 = document.querySelector("#ba1 #qtdArtesanal1").value
    
    if (qtdArtesanal1 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdArtesanal1 = document.querySelector("#ba1 #qtdArtesanal1").value = 1    
    }

    else if (qtdArtesanal1 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdArtesanal1 = document.querySelector("#ba1 #qtdArtesanal1").value = 5
    }
    
    var precoA1 = 28
    var totalArtesanal1 = Number(precoA1 * qtdArtesanal1)
    
    var listaArtesanal1 = document.getElementById("resArtesanal1").innerHTML = `Nome: ${nomeArtesanal1} <br>`
    var listaArtesanal1 = document.getElementById("resArtesanal1").innerHTML += `Preço: ${precoArtesanal1} <br>`
    var listaArtesanal1 = document.getElementById("resArtesanal1").innerHTML += `Quantidade: ${qtdArtesanal1} Unidades <br>`
    var listaArtesanal1 = document.getElementById("resArtesanal1").innerHTML += `Total: ${totalArtesanal1},00$`

    var botaoRmoverAt1 = document.getElementById("botaoRemoverAt1").style.display = "block"
     //Fazendo o botão de pedir aparecer
    var item1At = document.getElementById("item1At").style.display = "block" 
    document.getElementById("nomeAt1").innerHTML = `${nomeArtesanal1}, ` //Adicionando valor ao nome dinâmico do artesanal 1
}

function removerAt1(){ //Função para remover da lista o item 1 de burqueres artesanais
   var item1At = document.getElementById("item1At").style.display = "none"
   var qtdArtesanal1 = document.querySelector("#ba1 #qtdArtesanal1").value = ""
   document.getElementById("nomeAt1").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}







function addArtesanal2(){ //Função referente a adição do item2 da lista de burgueres artesanais
    alert("Filé de Frango com Bacon adicionado ao carrinho :)")
   
    var nomeArtesanal2 = document.querySelector("#ba2 h1").innerHTML
    var precoArtesanal2 = document.getElementById("preço-artesanal2").innerHTML
    var qtdArtesanal2 = document.querySelector("#ba2 #qtdArtesanal2").value
    
    if (qtdArtesanal2 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdArtesanal2 = document.querySelector("#ba2 #qtdArtesanal2").value = 1    
    }

    else if (qtdArtesanal2 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdArtesanal2 = document.querySelector("#ba2 #qtdArtesanal2").value = 5
    }
    
    var precoA2 = 15
    var totalArtesanal2 = Number(precoA2 * qtdArtesanal2)
    
    var listaArtesanal2 = document.getElementById("resArtesanal2").innerHTML = `Nome: ${nomeArtesanal2} <br>`
    var listaArtesanal2 = document.getElementById("resArtesanal2").innerHTML += `Preço: ${precoArtesanal2} <br>`
    var listaArtesanal2 = document.getElementById("resArtesanal2").innerHTML += `Quantidade: ${qtdArtesanal2} Unidades <br>`
    var listaArtesanal2 = document.getElementById("resArtesanal2").innerHTML += `Total: ${totalArtesanal2},00$`

    var botaoRmoverAt2 = document.getElementById("botaoRemoverAt2").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item2At = document.getElementById("item2At").style.display = "block"
    document.getElementById("nomeAt2").innerHTML = `${nomeArtesanal2}, ` //Adicionando valor ao nome dinâmico do artesanal 2 
}

function removerAt2(){ //Função para remover da lista o item 2 de burqueres artesanais
   var item2At = document.getElementById("item2At").style.display = "none"
   var qtdArtesanal2 = document.querySelector("#ba2 #qtdArtesanal2").value = ""
    document.getElementById("nomeAt2").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}







function addArtesanal3(){ //Função referente a adição do item 3 da lista de burgueres artesanais
    alert("Coxinha da Asa adicionado ao carrinho :)")
   
    var nomeArtesanal3 = document.querySelector("#ba3 h1").innerHTML
    var precoArtesanal3 = document.getElementById("preço-artesanal3").innerHTML
    var qtdArtesanal3 = document.querySelector("#ba3 #qtdArtesanal3").value
    
    if (qtdArtesanal3 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdArtesanal3 = document.querySelector("#ba3 #qtdArtesanal3").value = 1    
    }

    else if (qtdArtesanal3 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdArtesanal3 = document.querySelector("#ba3 #qtdArtesanal3").value = 5
    }
    
    var precoA3 = 12
    var totalArtesanal3 = Number(precoA3 * qtdArtesanal3)
    
    var listaArtesanal3 = document.getElementById("resArtesanal3").innerHTML = `Nome: ${nomeArtesanal3} <br>`
    var listaArtesanal3 = document.getElementById("resArtesanal3").innerHTML += `Preço: ${precoArtesanal3} <br>`
    var listaArtesanal3 = document.getElementById("resArtesanal3").innerHTML += `Quantidade: ${qtdArtesanal3} Unidades <br>`
    var listaArtesanal3 = document.getElementById("resArtesanal3").innerHTML += `Total: ${totalArtesanal3},00$`

    var botaoRmoverAt3 = document.getElementById("botaoRemoverAt3").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item3At = document.getElementById("item3At").style.display = "block"
    document.getElementById("nomeAt3").innerHTML = `${nomeArtesanal3}, ` //Adicionando valor ao nome dinâmico do artesanal 3 
}

function removerAt3(){ //Função para remover da lista o item 3 de burqueres artesanais
   var item3At = document.getElementById("item3At").style.display = "none"
   var qtdArtesanal3 = document.querySelector("#ba3 #qtdArtesanal3").value = ""
   document.getElementById("nomeAt3").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}













function addDoce1(){ //Função referente a adição do item1 da lista de burgueres doces
    alert("Mousse adicionado ao carrinho :)")
   
    var nomeDoce1 = document.querySelector("#bd1 h1").innerHTML
    var precoDoce1 = document.getElementById("preço-doce1").innerHTML
    var qtdDoce1 = document.querySelector("#bd1 #qtdDoce1").value
    
    if (qtdDoce1 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdDoce1 = document.querySelector("#bd1 #qtdDoce1").value = 1    
    }

    else if (qtdDoce1 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdDoce1 = document.querySelector("#bd1 #qtdDoce1").value = 5
    }
    
    var precoD1 = 7
    var totalDoce1 = Number(precoD1 * qtdDoce1)
    
    var listaDoce1 = document.getElementById("resDoce1").innerHTML = `Nome: ${nomeDoce1} <br>`
    var listaDoce1 = document.getElementById("resDoce1").innerHTML += `Preço: ${precoDoce1} <br>`
    var listaDoce1 = document.getElementById("resDoce1").innerHTML += `Quantidade: ${qtdDoce1} Unidades <br>`
    var listaDoce1 = document.getElementById("resDoce1").innerHTML += `Total: ${totalDoce1},00$`

    var botaoRemoverDc1 = document.getElementById("botaoRemoverDc1").style.display = "block"
   //Fazendo o botão de pedir aparecer
    var item1Dc = document.getElementById("item1Dc").style.display = "block"
    document.getElementById("nomeDc1").innerHTML = `${nomeDoce1}, ` //Adicionando valor ao nome dinâmico do doce 1  
}

function removerDc1(){ //Função para remover da lista o item 1 de burqueres doces
   var item1Dc = document.getElementById("item1Dc").style.display = "none"
   var qtdDoce1 = document.querySelector("#bd1 #qtdDoce1").value = ""
   document.getElementById("nomeDc1").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}






function addDoce2(){ //Função referente a adição do item 2 da lista de burgueres doces
    alert("Sorvete no Copo adicionado ao carrinho :)")
   
    var nomeDoce2 = document.querySelector("#bd2 h1").innerHTML
    var precoDoce2 = document.getElementById("preço-doce2").innerHTML
    var qtdDoce2 = document.querySelector("#bd2 #qtdDoce2").value
    
    if (qtdDoce2 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdDoce2 = document.querySelector("#bd2 #qtdDoce2").value = 1    
    }

    else if (qtdDoce2 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdDoce2 = document.querySelector("#bd2 #qtdDoce2").value = 5
    }
    
    var precoD2 = 5
    var totalDoce2 = Number(precoD2 * qtdDoce2)
    
    var listaDoce2 = document.getElementById("resDoce2").innerHTML = `Nome: ${nomeDoce2} <br>`
    var listaDoce2 = document.getElementById("resDoce2").innerHTML += `Preço: ${precoDoce2} <br>`
    var listaDoce2 = document.getElementById("resDoce2").innerHTML += `Quantidade: ${qtdDoce2} Unidades <br>`
    var listaDoce2 = document.getElementById("resDoce2").innerHTML += `Total: ${totalDoce2},00$`

    var botaoRemoverDc2 = document.getElementById("botaoRemoverDc2").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item2Dc = document.getElementById("item2Dc").style.display = "block"
    document.getElementById("nomeDc2").innerHTML = `${nomeDoce2}, ` //Adicionando valor ao nome dinâmico do doce 2  
}

function removerDc2(){ //Função para remover da lista o item 2 de burqueres doces
   var item2Dc = document.getElementById("item2Dc").style.display = "none"
   var qtdDoce2 = document.querySelector("#bd2 #qtdDoce2").value = ""
    document.getElementById("nomeDc2").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}






function addDoce3(){ //Função referente a adição do item 3 da lista de burgueres doces
    alert("Empadão adicionado ao carrinho :)")
   
    var nomeDoce3 = document.querySelector("#bd3 h1").innerHTML
    var precoDoce3 = document.getElementById("preço-doce3").innerHTML
    var qtdDoce3 = document.querySelector("#bd3 #qtdDoce3").value
    
    if (qtdDoce3 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdDoce3 = document.querySelector("#bd3 #qtdDoce3").value = 1    
    }

    else if (qtdDoce3 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdDoce3 = document.querySelector("#bd3 #qtdDoce3").value = 5
    }
    
    var precoD3 = 6
    var totalDoce3 = Number(precoD3 * qtdDoce3)
    
    var listaDoce3 = document.getElementById("resDoce3").innerHTML = `Nome: ${nomeDoce3} <br>`
    var listaDoce3 = document.getElementById("resDoce3").innerHTML += `Preço: ${precoDoce3} <br>`
    var listaDoce3 = document.getElementById("resDoce3").innerHTML += `Quantidade: ${qtdDoce3} Unidades <br>`
    var listaDoce3 = document.getElementById("resDoce3").innerHTML += `Total: ${totalDoce3},00$`

    var botaoRemoverDc3 = document.getElementById("botaoRemoverDc3").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item3Dc = document.getElementById("item3Dc").style.display = "block" 
    document.getElementById("nomeDc3").innerHTML = `${nomeDoce3}, ` //Adicionando valor ao nome dinâmico do doce 3 
}

function removerDc3(){ //Função para remover da lista o item 3 de burqueres doces
   var item3Dc = document.getElementById("item3Dc").style.display = "none"
   var qtdDoce3 = document.querySelector("#bd3 #qtdDoce3").value = ""
   document.getElementById("nomeDc3").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}













function addCombo1(){ //Função referente a adição do item 1 da lista de combos
    alert("Suco Natural adicionado ao carrinho :)")
   
    var nomeCombo1 = document.querySelector("#c1 h1").innerHTML
    var precoCombo1 = document.getElementById("preço-combo1").innerHTML
    var qtdCombo1 = document.querySelector("#c1 #qtdCombo1").value
    
    if (qtdCombo1 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdCombo1 = document.querySelector("#c1 #qtdCombo1").value = 1    
    }

    else if (qtdCombo1 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdCombo1 = document.querySelector("#c1 #qtdCombo1").value = 5
    }
    
    var precoC1 = 8
    var totalCombo1 = Number(precoC1 * qtdCombo1)
    
    var listaCombo1 = document.getElementById("resCombo1").innerHTML = `Nome: ${nomeCombo1} <br>`
    var listaCombo1 = document.getElementById("resCombo1").innerHTML += `Preço: ${precoCombo1} <br>`
    var listaCombo1 = document.getElementById("resCombo1").innerHTML += `Quantidade: ${qtdCombo1} Unidades <br>`
    var listaCombo1 = document.getElementById("resCombo1").innerHTML += `Total: ${totalCombo1},00$`

    var botaoRemoverCb1 = document.getElementById("botaoRemoverCb1").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item1Cb = document.getElementById("item1Cb").style.display = "block"
    document.getElementById("nomeCb1").innerHTML = `${nomeCombo1}, ` //Adicionando valor ao nome dinâmico do combo 1  
}

function removerCb1(){ //Função para remover da lista o item 1 de combos
   var item1Cb = document.getElementById("item1Cb").style.display = "none"
   var qtdCombo1 = document.querySelector("#c1 #qtdCombo1").value = ""
   document.getElementById("nomeCb1").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}






function addCombo2(){ //Função referente a adição do item 2 da lista de combos
    alert("Refrigerante adicionado ao carrinho :)")
   
    var nomeCombo2 = document.querySelector("#c2 h1").innerHTML
    var precoCombo2 = document.getElementById("preço-combo2").innerHTML
    var qtdCombo2 = document.querySelector("#c2 #qtdCombo2").value
    
    if (qtdCombo2 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdCombo2 = document.querySelector("#c2 #qtdCombo2").value = 1    
    }

    else if (qtdCombo2 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdCombo2 = document.querySelector("#c2 #qtdCombo2").value = 5
    }
    
    var precoC2 = 7
    var totalCombo2 = Number(precoC2 * qtdCombo2)
    
    var listaCombo2 = document.getElementById("resCombo2").innerHTML = `Nome: ${nomeCombo2} <br>`
    var listaCombo2 = document.getElementById("resCombo2").innerHTML += `Preço: ${precoCombo2} <br>`
    var listaCombo2 = document.getElementById("resCombo2").innerHTML += `Quantidade: ${qtdCombo2} Unidades <br>`
    var listaCombo2 = document.getElementById("resCombo2").innerHTML += `Total: ${totalCombo2},00$`

    var botaoRemoverCb2 = document.getElementById("botaoRemoverCb2").style.display = "block"
    //Fazendo o botão de pedir aparecer
    var item2Cb = document.getElementById("item2Cb").style.display = "block"
    document.getElementById("nomeCb2").innerHTML = `${nomeCombo2}, ` //Adicionando valor ao nome dinâmico do combo 2   
}

function removerCb2(){ //Função para remover da lista o item 2 de combos
   var item2Cb = document.getElementById("item2Cb").style.display = "none"
   var qtdCombo2 = document.querySelector("#c2 #qtdCombo2").value = ""
   document.getElementById("nomeCb2").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}






function addCombo3(){ //Função referente a adição do item 3 da lista de combos
    alert("Coquetel de Frutas adicionado ao carrinho :)")
   
    var nomeCombo3 = document.querySelector("#c3 h1").innerHTML
    var precoCombo3 = document.getElementById("preço-combo3").innerHTML
    var qtdCombo3 = document.querySelector("#c3 #qtdCombo3").value
    
    if (qtdCombo3 < 1){
        alert("Adicione pelo menos uma unidade")
        var qtdCombo3 = document.querySelector("#c3 #qtdCombo3").value = 1    
    }

    else if (qtdCombo3 > 5){
        alert("Adicione no máximo 5 unidades")
        var qtdCombo3 = document.querySelector("#c3 #qtdCombo3").value = 5
    }
    
    var precoC3 = 11
    var totalCombo3 = Number(precoC3 * qtdCombo3)
    
    var listaCombo3 = document.getElementById("resCombo3").innerHTML = `Nome: ${nomeCombo3} <br>`
    var listaCombo3 = document.getElementById("resCombo3").innerHTML += `Preço: ${precoCombo3} <br>`
    var listaCombo3 = document.getElementById("resCombo3").innerHTML += `Quantidade: ${qtdCombo3} Unidades <br>`
    var listaCombo3 = document.getElementById("resCombo3").innerHTML += `Total: ${totalCombo3},00$`

    var botaoRemoverCb3 = document.getElementById("botaoRemoverCb3").style.display = "block"
     //Fazendo o botão de pedir aparecer
    var item3Cb = document.getElementById("item3Cb").style.display = "block"
    document.getElementById("nomeCb3").innerHTML = `${nomeCombo3}, ` //Adicionando valor ao nome dinâmico do combo 3 
}

function removerCb3(){ //Função para remover da lista o item 3 de combos
   var item3Cb = document.getElementById("item3Cb").style.display = "none"
   var qtdCombo3 = document.querySelector("#c3 #qtdCombo3").value = ""
    document.getElementById("nomeCb3").innerHTML = ""
   document.getElementById("aviso").innerHTML = "Toque no botão novamente para atualizar total depois de remover algum item"
}



































// -------------------------- FUNÇÃO REFERENTE A SOMA TOTAL DO PREÇO DE TODOS OS PRODUTOS ESCOLHIDOS ------------------
function somar(){
    // Pegando o preço e a quantidade dos burqueres tradicionais adicionados na lista
    var precoTr1 = 20
    var qtdTr1 = document.querySelector("#bt1 #qtdTradicional1").value
    
    var precoTr2 = 25
    var qtdTr2 = document.querySelector("#bt2 #qtdTradicional2").value

    var precoTr3 = 30
    var qtdTr3 = document.querySelector("#bt3 #qtdTradicional3").value

    var precoTr4 = 26
    var qtdTr4 = document.querySelector("#bt4 #qtdTradicional4").value

    // Pegando o preço e a quantidade dos burqueres artesanais adicionados na lista
    var precoAt1 = 28
    var qtdAt1 = document.querySelector("#ba1 #qtdArtesanal1").value
    
    var precoAt2 = 15
    var qtdAt2 = document.querySelector("#ba2 #qtdArtesanal2").value

    var precoAt3 = 12
    var qtdAt3 = document.querySelector("#ba3 #qtdArtesanal3").value

    // Pegando o preço e a quantidade dos burqueres doces adicionados na lista
    var precoDc1 = 7
    var qtdDc1 = document.querySelector("#bd1 #qtdDoce1").value
    
    var precoDc2 = 5
    var qtdDc2 = document.querySelector("#bd2 #qtdDoce2").value

    var precoDc3 = 6
    var qtdDc3 = document.querySelector("#bd3 #qtdDoce3").value

    // Pegando o preço e a quantidade dos combos adicionados na lista
    var precoCb1 = 8
    var qtdCb1 = document.querySelector("#c1 #qtdCombo1").value
    
    var precoCb2 = 7
    var qtdCb2 = document.querySelector("#c2 #qtdCombo2").value

    var precoCb3 = 11
    var qtdCb3 = document.querySelector("#c3 #qtdCombo3").value

    
  
    
                                          

                                                              /*------------------------ TRADICIONAIS 1, 2, 3  e 4 --------------------*/          /*-------------- ARTESANAIS 1, 2  e 3 ---------------*/           /*---------------- DOCES 1, 2  e 3 -----------------*/           /*---------------- COMBOS 1, 2  e 3 -----------------*/
    var TOTAL = document.getElementById("TOTAL").innerHTML = (precoTr1*qtdTr1) + (precoTr2*qtdTr2) + (precoTr3*qtdTr3) + (precoTr4*qtdTr4) +      (precoAt1*qtdAt1) + (precoAt2*qtdAt2) + (precoAt3*qtdAt3) +      (precoDc1*qtdDc1) + (precoDc2*qtdDc2) + (precoDc3*qtdDc3) +      (precoCb1*qtdCb1) + (precoCb2*qtdCb2) + (precoCb3*qtdCb3) +",00$"
    
    if (TOTAL == "0,00$"){
        document.getElementById("modoPagamento-localizacao-botao").style.display = "none"
        alert("Adicione algo à lista")
    }
    else{
        document.getElementById("modoPagamento-localizacao-botao").style.display = "flex"
        document.getElementById("FundoEscuroDoFormulario").style.display = "block"
    }

    
    var TotalFormulario = document.getElementById("TOTAL").innerHTML
    document.getElementById("totalDoFormulario").innerHTML = TotalFormulario
    
    return TOTAL
}















// -------------------SCRIPT REFERENTE A0 AVISO, CASO NADA FOR ADICIONADO AO CARRINHO---------------------------
function avisoFinal(){
    if (somar() == "0,00$"){
        alert("Adicione algo à Lista de Compras antes de prosseguir")
        document.getElementById("modoPagamento-localizacao-botao").style.display = "none"
    }
    else{
        document.getElementById("modoPagamento-localizacao-botao").style.display = "flex"
        var TotalFormulario = document.getElementById("TOTAL").innerHTML
        document.getElementById("totalDoFormulario").innerHTML = TotalFormulario
        var botãoPedir = document.getElementById("pedir").style.display = "none"
    }
}






















//SCRIPT REFERENTE AO PREENCHIMENTO DOS DADOS PESSOAIS E A CONCUSÃO DA COMPRA PARA ENVIAR OS DADOS PARA O WHATSZAP
function concluir(){
    let pix = document.getElementById("chavePix").value
    let dinheiro = document.getElementById("din").value
    let cartao = document.getElementById("cart").value
    let bairro = document.getElementById("bairro").value
    let rua = document.getElementById("rua").value
    let casa = document.getElementById("casa").value
    let observacoes = document.getElementById("observacoes").value

    if (pix != "" && dinheiro != "" && cartao != ""){
        alert("Escolha apenas uma opção de pagamento")
    }
    else if (pix != "" && dinheiro != ""){
        alert("Escolha apenas uma opção de pagamento")
    }
    else if (pix != "" && cartao != ""){
        alert("Escolha apenas uma opção de pagamento")
    }
    else if (dinheiro != "" && cartao != ""){
        alert("Escolha apenas uma opção de pagamento")
    }

    else if (pix == "" && dinheiro == "" && cartao == ""){
        alert("Preencha os dados de pagamento antes de prosseguir")
    }
    
    
    else if (bairro != "" && rua != "" && casa != ""){
        alert("Compra de" + " " + somar() + " " + "Reais" + " " + "realizada com sucesso!")
       
       
        //--------------------colocando dados dos inputs no link do whatzap----------------------------------------
        //pegando os nomes dinâmicos
        var nomeTr1 = document.getElementById("nomeTr1").innerHTML
        var nomeTr2 = document.getElementById("nomeTr2").innerHTML
        var nomeTr3 = document.getElementById("nomeTr3").innerHTML
        var nomeTr4 = document.getElementById("nomeTr4").innerHTML
        var nomeAt1 = document.getElementById("nomeAt1").innerHTML
        var nomeAt2 = document.getElementById("nomeAt2").innerHTML
        var nomeAt3 = document.getElementById("nomeAt3").innerHTML
        var nomeDc1 = document.getElementById("nomeDc1").innerHTML
        var nomeDc2 = document.getElementById("nomeDc2").innerHTML
        var nomeDc3 = document.getElementById("nomeDc3").innerHTML
        var nomeCb1 = document.getElementById("nomeCb1").innerHTML
        var nomeCb2 = document.getElementById("nomeCb2").innerHTML
        var nomeCb3 = document.getElementById("nomeCb3").innerHTML
        //pegando a quantidade dos tradicionais
        var qtdTr1 = document.querySelector("#bt1 #qtdTradicional1").value
        var qtdTr2 = document.querySelector("#bt2 #qtdTradicional2").value
        var qtdTr3 = document.querySelector("#bt3 #qtdTradicional3").value
        var qtdTr4 = document.querySelector("#bt4 #qtdTradicional4").value
        //pegando a quantidade dos artesanais
        var qtdAt1 = document.querySelector("#ba1 #qtdArtesanal1").value
        var qtdAt2 = document.querySelector("#ba2 #qtdArtesanal2").value
        var qtdAt3 = document.querySelector("#ba3 #qtdArtesanal3").value
        //pegando a quantidade dos doces
        var qtdDc1 = document.querySelector("#bd1 #qtdDoce1").value
        var qtdDc2 = document.querySelector("#bd2 #qtdDoce2").value
        var qtdDc3 = document.querySelector("#bd3 #qtdDoce3").value
        //pegando a quantidade dos combos
        var qtdCb1 = document.querySelector("#c1 #qtdCombo1").value
        var qtdCb2 = document.querySelector("#c2 #qtdCombo2").value
        var qtdCb3 = document.querySelector("#c3 #qtdCombo3").value


        //pegando os valores dos inputs do formulário
        let cas = document.getElementById("casa").value
        let ru = document.getElementById("rua").value
        let obs = document.getElementById("observacoes").value
        let bair = document.getElementById("bairro").value
        let precoBurger = document.getElementById("precoBurger").value = somar()
        let enviarZap = document.getElementById("enviarZap") 
                                                               //------------------tradicionais e suas quantidades-----------------------     //-------------artesanais e suas quantidades-----------      //-----------doces e suas quantidades------------------     //-----------------combos e suas quantidades------------
        let link = `https://wa.me/5592991635554?text=*PRODUTO:* ${qtdTr1}${ nomeTr1} ${qtdTr2}${ nomeTr2} ${qtdTr3}${ nomeTr3} ${qtdTr4}${ nomeTr4} ${qtdAt1}${ nomeAt1} ${qtdAt2}${ nomeAt2} ${qtdAt3}${ nomeAt3}  ${qtdDc1}${ nomeDc1} ${qtdDc2}${ nomeDc2} ${qtdDc3}${ nomeDc3} ${qtdCb1}${ nomeCb1} ${qtdCb2}${ nomeCb2} ${qtdCb3}${ nomeCb3} | *TOTAL:* ${ precoBurger} | *LOCALIZAÇÃO:* Bairro ${bair}, Rua ${ru} e casa ${cas} | *OBS:* ${ obs}`
        enviarZap.href = link
        
        //Zerando os valores dos inputs das senhas, da localização, da obsevação, dos nomes dos burgueres e das quantidades
        let pix = document.getElementById("chavePix").value = ""
        let dinheiro = document.getElementById("din").value = ""
        let cartao = document.getElementById("cart").value = ""
        let bairro = document.getElementById("bairro").value = ""
        let rua = document.getElementById("rua").value = ""
        let casa = document.getElementById("casa").value = ""
        let observacoes = document.getElementById("observacoes").value = ""

        var nomeTr1 = document.getElementById("nomeTr1").innerHTML = ""
        var nomeTr2 = document.getElementById("nomeTr2").innerHTML = ""
        var nomeTr3 = document.getElementById("nomeTr3").innerHTML = ""
        var nomeTr4 = document.getElementById("nomeTr4").innerHTML = ""
        var nomeAt1 = document.getElementById("nomeAt1").innerHTML = ""
        var nomeAt2 = document.getElementById("nomeAt2").innerHTML = ""
        var nomeAt3 = document.getElementById("nomeAt3").innerHTML = ""
        var nomeDc1 = document.getElementById("nomeDc1").innerHTML = ""
        var nomeDc2 = document.getElementById("nomeDc2").innerHTML = ""
        var nomeDc3 = document.getElementById("nomeDc3").innerHTML = ""
        var nomeCb1 = document.getElementById("nomeCb1").innerHTML = ""
        var nomeCb2 = document.getElementById("nomeCb2").innerHTML = ""
        var nomeCb3 = document.getElementById("nomeCb3").innerHTML = ""

        var qtdTr1 = document.querySelector("#bt1 #qtdTradicional1").value = "" 
        var qtdTr2 = document.querySelector("#bt2 #qtdTradicional2").value = ""
        var qtdTr3 = document.querySelector("#bt3 #qtdTradicional3").value = ""
        var qtdTr4 = document.querySelector("#bt4 #qtdTradicional4").value = ""
        var qtdAt1 = document.querySelector("#ba1 #qtdArtesanal1").value = ""
        var qtdAt2 = document.querySelector("#ba2 #qtdArtesanal2").value = ""
        var qtdAt3 = document.querySelector("#ba3 #qtdArtesanal3").value = ""
        var qtdDc1 = document.querySelector("#bd1 #qtdDoce1").value = ""
        var qtdDc2 = document.querySelector("#bd2 #qtdDoce2").value = ""
        var qtdDc3 = document.querySelector("#bd3 #qtdDoce3").value = ""
        var qtdCb1 = document.querySelector("#c1 #qtdCombo1").value = ""
        var qtdCb2 = document.querySelector("#c2 #qtdCombo2").value = ""
        var qtdCb3 = document.querySelector("#c3 #qtdCombo3").value = ""


        //fazendo a tela do formulário e o fundo escuro desaparecer
        document.getElementById("modoPagamento-localizacao-botao").style.display = "none"
        document.getElementById("FundoEscuroDoFormulario").style.display = "none"
        var botãoPedir = document.getElementById("pedir").style.display = "none"


        //fazendo os itens escolhidos da lista de compras desaparecerem
        var item1Tr = document.getElementById("item1Tr").style.display = "none"
        var item2Tr = document.getElementById("item2Tr").style.display = "none"
        var item3Tr = document.getElementById("item3Tr").style.display = "none"
        var item4Tr = document.getElementById("item4Tr").style.display = "none"

        var item1At = document.getElementById("item1At").style.display = "none"
        var item2At = document.getElementById("item2At").style.display = "none"
        var item3At = document.getElementById("item3At").style.display = "none"

        var item1Dc = document.getElementById("item1Dc").style.display = "none"
        var item2Dc = document.getElementById("item2Dc").style.display = "none"
        var item3Dc = document.getElementById("item3Dc").style.display = "none"

        var item1Cb = document.getElementById("item1Cb").style.display = "none"
        var item2Cb = document.getElementById("item2Cb").style.display = "none"
        var item3Cb = document.getElementById("item3Cb").style.display = "none"
        
    }

    else{
        alert("Preencha a sua localização antes de prosseguir")
    }            
}




function fecharFormulario(){
    document.getElementById("FundoEscuroDoFormulario").style.display = "none"
    document.getElementById("modoPagamento-localizacao-botao").style.display = "none"
}