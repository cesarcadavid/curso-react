class Rectangulo { //Esto se conoce como una expresion de clase, donde una clase es asignada a una constante

}

function Cuadrado() {}

console.log(Cuadrado, Rectangulo)

const r = new Rectangulo()

class Chancho {
    propiedad = 'mi propiedad'
    #hambre
    static estatico = 42

    constructor(estado = 'feliz', hambre = false){
        this.estado = estado
        this.#hambre = hambre
    }

    hablar(){
        console.log(`Soy un chancho ${this.estado} y ${this.#hambre ? 'con mucha hambre!' : 'satisfecho!' }`);
    }

    static comer() {
        console.log(this.estatico, 'Estoy comiendo')
    }
}

const feliz = new Chancho('feliz', true)
feliz.hablar()
console.log(feliz)
Chancho.comer()