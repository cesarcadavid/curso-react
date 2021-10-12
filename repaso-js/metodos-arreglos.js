const arr = [1, 2, 3, 4]

const r = arr.filter((el, i) => {
    console.log('Indice ' + i)
    return el > 2
})
console.log(r)

const multiplicacion = arr.map(el => el*2)
console.log(multiplicacion)

const users = [
    {id: 1, name: 'Ines Jaimes'},
    {id: 2, name: 'Edinso Cadavid'},
    {id: 3, name: 'Cesar Cadavid Jaimes'},
    {id: 4, name: 'Jose Cadavid Jaimes'},
    {id: 5, name: 'Sebas Cadavid Jaimes'},
    {id: 6, name: 'Salma Cadavid Jaimes'}
]

const usersHtml = users.map(user => `<h1>${user.name}</h1>`)
console.log(usersHtml)


const reduce = arr.reduce((acumlador, elemento) => acumlador + elemento, 0)
console.log(`El valor del reduce es: ${reduce}`)

const getMax = (a, b) => Math.max(a, b)
const max = arr.reduce(getMax)
console.log(`El número mayor es: ${max}`)

const agruparNombres = users.reduce((acumulador, elemento) =>
    `${acumulador === '' ? '' : `${acumulador}, `}${elemento.name}`, '')
console.log(agruparNombres)


const agruparNombreIdMayor2 = users.reduce((acomulador, elemento) => {
    if(elemento.id <= 2){
        return acomulador
    }
    return acomulador.concat(elemento)
}, [])
console.log(agruparNombreIdMayor2)