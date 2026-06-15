//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let nome = parseFloat(objFormDados.get('nome'))
    let nota1 = parseFloat(objFormDados.get('nota1'))
    let nota2 = parseFloat(objFormDados.get('nota2'))
    let nota3 = parseFloat(objFormDados.get('nota3'))

   let média = (nota1 + nota2 + nota3) / 3


    divResultado.innerHTML = `A quantidade de combustível necessário para percorrer o trajeto: ${pecorrido.toFixed(2).replace('.',',')}KM, O valor total a pagar com combustível para esse
deslocamento.R$ ${gasto.toFixed(2).replace('.',',')}`

    formDados.reset()
    
})