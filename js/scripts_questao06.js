//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let peso = parseFloat(objFormDados.get('peso'))
    let altura = parseFloat(objFormDados.get('altura'))

    let imc = peso / (altura**2)
        
    if (imc <=60){
        faixaderisco = "Está abaixo do peso"

    }else  if (imc >= 60 && imc <=65){
        faixaderisco = "Está no peso saúdavel"

        }else if (imc >= 65 && imc <=70){
        faixaderisco = "Está acima do peso"

        }else if (imc >= 70 && imc <=75){
        faixaderisco = "Obesidade"

        }else if (imc >= 80){
        faixaderisco = "Obesidade mórbida"
        }


    divResultado.innerHTML = faixaderisco
    formDados.reset()
    
})