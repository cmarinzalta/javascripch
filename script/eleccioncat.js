let btnCategorias = document.querySelectorAll(".btn-cat")
console.log(btnCategorias)
for (const btn of btnCategorias) {
    btn.addEventListener('click', () => {
        if (btn.id == 'btnHistoria') {
            localStorage.setItem('categoria', JSON.stringify('Historia De Aviacion'))
        } else if (btn.id == 'btnPrincipiante') {
            localStorage.setItem('categoria', JSON.stringify('Piloto Principiante'))
        } else if (btn.id == 'btnAvanzado') {
            localStorage.setItem('categoria', JSON.stringify('Piloto Avanzado'))
        }
    })
}
