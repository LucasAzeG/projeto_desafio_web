//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let lado_e = parseFloat(objFormDados.get('lado_e'))
    let lado_d = parseFloat(objFormDados.get('lado_d'))
    let lado_c = parseFloat(objFormDados.get('lado_c'))

    tipoTriangulo = ''
        
    if(lado_e == lado_d == lado_c){
        tipoTriangulo = "Equilátero:"
    }else if((lado_e == lado_d) && (lado_e == lado_c) && (lado_d == lado_c)){
        tipoTriangulo = "Triângulo Isóscele"
      }else if {
        tipoTriangulo = "Triângulo Escaleno"
      }

   

   

    divResultado.innerHTML = tipoTriangulo
    formDados.reset()
    
})