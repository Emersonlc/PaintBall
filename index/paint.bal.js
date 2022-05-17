function cadastrar(){
    let nome = document.querySelector('#nome')
    let qnt = document.querySelector('#quantidade')
    let quant = Number(qnt.value)
    let equi = document.querySelector('#equipe')
    let res = document.querySelector('#res')

    if(nome.value == "" || equi.value == "" || quant == ""){
        res.innerHTML ="ERRO: Favor, preencher todos os campos"
    } else{
        res.innerHTML = `<strong>Nome:</strong> ${nome.value} <br>
        <strong>Equipe:</strong> ${equi.value}  <br>
        <strong>Quantidade:</strong> ${quant} <br> <br> ` 
       
        res.innerHTML += '<strong>Equipe cadastrada com sucesso!</strong>'
    }
     
}


