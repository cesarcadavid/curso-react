const fn = (a, b, c) => console.log(a + b + c);

const arr = [1, 2, 3]

fn(arr[0], arr[1], arr[2]);

fn(...arr)

const arr2 = [4, 5]

const arr3 = arr.concat(arr2);
const arr4 = [...arr, ...arr2]
console.log(arr3);
console.log(arr4);


const obj1 = {a: 1, b:2}
const obj2 = {b: 5, c: 'Chanchito feliz'}

obj1.a = 10
const obj3 = {...obj1}

console.log(obj1, obj3)

obj4 = {...obj1, ...obj2}
console.log(obj4)
