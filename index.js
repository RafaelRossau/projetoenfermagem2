function enviaCadastro(){

let nome = document.getElementById("nome").value
let dataValue = document.getElementById("data").value
let quarto = document.getElementById("quarto").value
let rafael = document.getElementById("rafael")
let lucas = document.getElementById("lucas")
let diogo = document.getElementById("diogo")
let autismo = document.getElementById("autismo")
let tdah = document.getElementById("tdah")
let sindromededown = document.getElementById("sindromededown")
let sociopata = document.getElementById("sociopata")
let respostas = document.getElementById("ul")
let outro = document.getElementById("outro")



let verificaNome = false
let verificaData = false
let verificaQuarto = false
let verificaResponsavel = false
let verificaEspecificacoes = false
let verificaEspecificacoes2 = false
let verificaEspecificacoesVERDADEIRO = false

   if (nome.length < 1){
        alert("O nome de usuário precisa ter ao menos 1 letra.");
        verificaNome = false
        
    }
    else{
verificaNome = true 
}
    if (dataValue === "") {
  alert("Por favor, insira uma data.");
  verificaData = false
    }

    else{
        verificaData = true
    }
    if (quarto > 60 || quarto < 1){
        alert("Numero de quarto Inexistente, adicione um número de 1 a 60")
        verificaQuarto = false
    }
    else{
        verificaQuarto = true
    }
    let checkedCount = 0
    if (rafael.checked) {
      checkedCount++;
    }
    if (lucas.checked) {
      checkedCount++;
    }
    if (diogo.checked) {
      checkedCount++;
    }
if(checkedCount == 0){
    alert("escolha um Enfermeiro(a) responsável.")
    verificaResponsavel = false
}
else if(checkedCount == 1){
    verificaResponsavel = true
}
else {
    alert("só é possível escolher um responsável por vez")
    verificaResponsavel = false
}
 checkedCount2 = 0
if (autismo.checked) {
      checkedCount2++;
 }
       if (tdah.checked) {
      checkedCount2++;
       }
       if (sindromededown.checked) {
      checkedCount2++;
       }
       if (sociopata.checked) {
      checkedCount2++;
       }
       if(outro !== ""){
        checkedCount2++
       }
    
if(checkedCount2 > 0){
    verificaEspecificacoes = true
}
       else{
        verificaEspecificacoes = false
        let escolha = confirm("Tem certeza que a caixa de especificações do paciente é vazia?")
if(escolha){
verificaEspecificacoes2 = true
    }
    else {
        verificaEspecificacoes2 = false
        return;
    }

}
if((verificaEspecificacoes == true) || (verificaEspecificacoes2 == true)){
    verificaEspecificacoesVERDADEIRO = true
}
else{
     verificaEspecificacoesVERDADEIRO = false
    return
}
if((verificaNome == true) && (verificaData == true) && (verificaQuarto == true) && (verificaResponsavel == true) && (verificaEspecificacoesVERDADEIRO == true)){
    alert("Formulário enviado com sucesso!")
    
    respostas.insertAdjacentHTML("beforeend",`<li>Nome: ${nome}</li>`)
    respostas.insertAdjacentHTML("beforeend",`<li>Data De Nascimento:${dataValue}</li>`)
    respostas.insertAdjacentHTML("beforeend",`<li>Quarto: ${quarto}</li>`)
   if(rafael.checked){
     respostas.insertAdjacentHTML("beforeend",`<li>Responsável: Rafael</li>`)
   }
    else if(lucas.checked){
         respostas.insertAdjacentHTML("beforeend",`<li>Responsável: Lucas</li>`)
    }
else{
 respostas.insertAdjacentHTML("beforeend",`<li>Responsável: Diogo</li>`)
}
const arr = []
if(autismo.checked){
    arr.push("Autismo")
}
    if(tdah.checked){
    arr.push("TDAH")
    }
    if(sindromededown.checked){
    arr.push("sindromededown")
}
if(sociopata.checked){
    arr.push("Sociopata")
}
    if(outro !== ""){
        arr.push(outro.value)
    }
respostas.insertAdjacentHTML("beforeend",`<li>Especificações: ${arr}</li>`)
}

else{
    return;
}

  
    
}
