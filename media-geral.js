const salaJS = [10, 8, 7, 9, 8, 6]
const salaJava = [5, 2, 5, 6, 10, 8]
const salaPython = [7, 3.5, 8, 9.5]

function calculaMedia(notasDaSala) {
     const somaDasNotas = notasDaSala.reduce((acumulador, nota) => acumulador + nota, 0)
     const media = somaDasNotas / notasDaSala.length
     return media
}

console.log(`A média das notas da sala de JavaScript é ${calculaMedia(salaJS)}`)
console.log(`A média das notas da sala de JavaScript é ${calculaMedia(salaJava)}`)
console.log(`A média das notas da sala de JavaScript é ${calculaMedia(salaPython)}`)
