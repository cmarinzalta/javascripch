import {trivia} from './categoria.js'

let ptjeUsuario =  {
    errores:0,
    puntos:0 
}

let ptjeGuardado = JSON.parse(localStorage.getItem('ultimoPuntaje')) || ptjeUsuario
let categoriaSelec = JSON.parse(localStorage.getItem('categoria')) || 'Hisotira De Aviacion'
let quizzSection = document.querySelector("#histAviacion")
let historia = trivia.filter(item=>item.categoria == categoriaSelec)

historia[0].quizz.forEach(item=>{
    let div = document.createElement('div')
    div.id = `div${item.id}`
    div.classList.add('container', 'text-center')
    quizzSection.append(div)
    div.hidden= true
    let container = document.getElementById(`div${item.id}`) 

    let header = document.createElement('header')
    header.classList.add ('trivia__header', 'fs-1', 'text-white')
    header.innerText= `${item.pregunta}`
    container.appendChild(header)

    let main = document.createElement('main') 
    main.classList.add ('trivia__body', 'my-5', 'd-flex', 'flex-column') 
    
    item.respuestas.sort(function() { return Math.random() - 0.5 });
    console.log(item.respuestas);
    item.respuestas.forEach(res=>{
      main.innerHTML+= `<button class="trivia__option btn btn-primary my-3" value=${res}>${res}</button`  
    })
    container.append(main)

    let footer = document.createElement('footer')
    footer.className= 'trivia__footer'
    footer.innerHTML= `<div class="trivia__progress-controls">
                        <p class="trivia__progress-current">${item.id}/${historia[0].quizz.length}</p>
                        <button class="trivia__btn btn btn-primary mb-4" disabled="true" id="${item.id}">
                        Siguiente
                        </button>
                    </div>`
    container.append(footer)
})

let btnRespuestas = document.getElementsByClassName('trivia__option')
for (const btn of btnRespuestas) {
    btn.addEventListener('click',()=>{
        if(historia[0].correctas.find(esta => esta == btn.value)){
            btn.style.backgroundColor = '#1fb77fd9'
            ptjeUsuario.puntos+=2
        }else{
            btn.style.backgroundColor = '#f12c4acf'
            ptjeUsuario.errores++
        }
    })
}

let btnNext = document.getElementsByClassName('trivia__btn')
for (const btn of btnNext) {
    if (btn.id == 1) {
        btn.disabled = false
        btn.style.cursor = 'pointer'
        let div = document.getElementById(`div1`)
        div.hidden= false
    }
    btn.addEventListener('click',()=>{
        let count = 1
        if (btn.id == 5) {
            finalizar()
        }else{
            let mostrar = document.getElementById(`${parseInt(btn.id) + count}`)
        mostrar.disabled = false
        mostrar.style.cursor = 'pointer'

        let divMostrar = document.getElementById(`div${parseInt(btn.id) + count}`)
        divMostrar.hidden = false

        let divOcultar = document.getElementById(`div${btn.id}`)
        console.log(divOcultar);
        divOcultar.hidden = true
        }
        

        
    })
}


function finalizar() {
    quizzSection.innerHTML= ''
    quizzSection.innerHTML= `<h1 class="fs-1 text-center text-white">El juego Termino! Conseguiste: ${ptjeUsuario.puntos} puntos. \n Tuviste: ${ptjeUsuario.errores} errores.</h1>
    <p class="fs-3 text-center text-white mt-3">Tu puntaje anterior fue de ${ptjeGuardado.puntos}</p>`
    localStorage.setItem('ultimoPuntaje',JSON.stringify(ptjeUsuario))
}