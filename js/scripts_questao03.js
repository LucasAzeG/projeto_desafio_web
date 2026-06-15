//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let distancia_pecorrida = parseFloat(objFormDados.get('distancia_pecorrida'))
    let consumo = parseFloat(objFormDados.get('consumo'))
     let preço = parseFloat(objFormDados.get('preço'))

   let pecorrido = distancia_pecorrida / consumo
   let gasto = preço * pecorrido

    divResultado.innerHTML = `A quantidade de combustível necessário para percorrer o trajeto:${pecorrido.toFixed(2).replace('.',',')}KM, O valor total a pagar com combustível para esse
deslocamento. R$ ${gasto.toFixed(2).replace('.',',')}`

    formDados.reset()
    
})