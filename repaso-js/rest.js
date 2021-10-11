const rest = (a, b, ...arguments) => {
    console.log(a, b)
    console.log(arguments)
}

rest(1, 2, 3);

const obj = {
    a: 1, b: 2, c: 3, d: 4
}

const { a, b, ...restObj } = obj 
console.log(a, b, restObj)

const arr = [1,2,3,4,5]
const [x, y, ...r] = arr //A esto se le conoce como restoperator, en el cual podemos darle un nombre de variable a los valores de un arreglo.
console.log(x, y, r)

const useSatate = () => ['valor', () => {}]
const [valor, fun] = useSatate()
console.log(valor, fun)