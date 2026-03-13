let contagem = 0
function adicionar() {
    let produto = document.querySelector('select#produtos').value
    let resultado1 = document.querySelector('div#res1')
    let resultado2 = document.querySelector('div#res2')
    let nomeProduto
    let tempoProduto
    let colocadoProduto
    if (produto == "outro"){
        nomeProduto = prompt("Qual o nome do produto?")
        tempoProduto = Number(prompt("Quanto tempo ele dura na geladeira?"))
        colocadoProduto = Number(document.querySelector('input#tempo').value)
        if(nomeProduto == ''|| tempoProduto <= 0 || isNaN(tempoProduto)){
            alert('Produto ou tempo inválido')
            return
        }
    } else {
        colocadoProduto = Number(document.querySelector('input#tempo').value)
        switch (produto) {
            case "leite":
                tempoProduto = 5
                nomeProduto = "Leite"
                break
            case "ovos":
                tempoProduto = 21
                nomeProduto = "Ovos"
                break
            case "iogurte":
                tempoProduto = 7
                nomeProduto = "Iogurte"
                break
            case "queijomuçarela":
                tempoProduto = 5
                nomeProduto = "Queijo muçarela"
                break
            case "queijofresco":
                tempoProduto = 3
                nomeProduto = "Queijo fresco"
                break
            case "presunto":
                tempoProduto = 3
                nomeProduto = "Presunto"
                break
            case "carnebovina":
                tempoProduto = 3
                nomeProduto = "Carne bovina"
                break
            case "carnesuina":
                tempoProduto = 3
                nomeProduto = "Carne suína"
                break
            case "peixe":
                tempoProduto = 2
                nomeProduto = "Peixe"
                break
            case "frango":
                tempoProduto = 2
                nomeProduto = "Frango"
                break
            case "manteiga":
                tempoProduto = 60
                nomeProduto = "Manteiga"
                break
            case "molhodetomate":
                tempoProduto = 5
                nomeProduto = "Molho de tomate"
                break
            case "alface":
                tempoProduto = 5
                nomeProduto = "Alface"
                break
            case "tomate":
                tempoProduto = 5
                nomeProduto = "Tomate"
                break
            case "cenoura":
                tempoProduto = 14
                nomeProduto = "Cenoura"
                break
            case "sobras":
                tempoProduto = 3
                nomeProduto = "Sobras"
                break
            case "morango":
                tempoProduto = 3
                nomeProduto = "Morango"
                break
            case "uva":
                tempoProduto = 5
                nomeProduto = "Uva"
                break
            case "maça":
                tempoProduto = 21
                nomeProduto = "Maçã"
                break
            case "bolo":
                tempoProduto = 4
                nomeProduto = "Bolo"
                break
            case "suconatural":
                tempoProduto = 2
                nomeProduto = "Suco natural"
                break
            default:
                alert("Produto não encontrado")
        }
    }
    let data = new Date()
    let dataAdicao = new Date()
    dataAdicao.setDate(dataAdicao.getDate() - colocadoProduto) 
    let diaVencimento = new Date(dataAdicao)                  
    diaVencimento.setDate(diaVencimento.getDate() + tempoProduto)
    let dias = (diaVencimento - data) / (1000 * 60 * 60 * 24)
    let cor 
    if (dias >= 5){
        cor = "#1a8747"
    } else if(dias > 2){
        cor = "#c18d1f"
    } else {
        cor = "#b02010"
    }
    if (diaVencimento  < new Date()){
        resultado2.style.display = 'block'
        resultado2.style.color =  "#000000ec"
        resultado2.innerHTML += 
            `<p class="resposta">
            ${nomeProduto}: vencido<br>
            Adicionado em: ${dataAdicao.toLocaleDateString()}. Validade: ${diaVencimento.toLocaleDateString()}<br>
            <button class="remover" onclick="remover(this)">Remover</button></p>`            
    }
    else {      
        resultado1.innerHTML += 
            `<p class="resposta" style='color: ${cor}'>
            <strong>${nomeProduto}</strong>: está em bom estado. Restam ${dias} dias<br>
            Adicionado em: ${dataAdicao.toLocaleDateString()}. Validade: ${diaVencimento.toLocaleDateString()}<br>
            <button class="remover" onclick="remover(this)">Remover</button></p>`         
            contagem++
            document.querySelector('h4#contador').style.display='block'
            document.querySelector('h4#contador').innerText =`Produtos na geladeira: ${contagem}`
    }
}
function remover(x){
    let posicaoProduto = x.parentElement
    let resultadoProduto = posicaoProduto.parentElement
    if (resultadoProduto.id == 'res2'){
        document.querySelector('h4#contador').innerText =`Produtos na geladeira: ${contagem}`
    } else {
        contagem--
        document.querySelector('h4#contador').innerText =`Produtos na geladeira: ${contagem}`
    }
    x.parentElement.remove()
}
