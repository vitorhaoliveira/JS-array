const nomes = ['Vitor', 'Duda', 'Vitoria', 'Ana']
const medias = [10, 10, 8, 4]

const reprovados = nomes.filter((_, indice) => {
     return medias[indice] < 7
})

console.log(reprovados)
 