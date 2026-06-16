//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let lado_es = parseFloat(objFormDados.get('lado_es'))
    let lado_d = parseFloat(objFormDados.get('lado_d'))
    let lado_c = parseFloat(objFormDados.get('lado_c'))

    let tipoTriangulo = ''
        
    if(lado_es==lado_d && lado_d==lado_c){
        tipoTriangulo = "Triângulo Equilátero"
    }else if (lado_es==lado_d || lado_es==lado_c || lado_d==lado_c){
        tipoTriangulo = "Triângulo Isóscele"
       }else if (lado_es || lado_d || lado_c){
        tipoTriangulo = "Triângulo Escaleno:"
         }
    
    

   

   

    divResultado.innerHTML = tipoTriangulo
    formDados.reset()
    
})