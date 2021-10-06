const chanchosFelices = ['Chancho 1', 'Chancho 2', 'Chancho 3']
export const chanchosTristes = ['Triste 1', 'Triste 2']
export const otrosChanchos = []

// module.exports = {chanchosFelices, chanchosTristes} //Esta esta es la viaje forma de como exportar

const fn1 = () => {
    console.log('Soy la funcion 1')
}

const fn2 = () => {
    console.log('Soy la funcion 2')
}

export {fn1, fn2}
export default chanchosFelices