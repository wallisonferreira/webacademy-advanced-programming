console.log('texto')
console.error('Esse é um erro')
console.warn('Isso é um alerta')


let x = 10

if (true) {
    let x = 20
    console.log(x)
}

// tipos de dados

// string
const name = "Wallison"
console.log(name)
console.log(typeof name)

// number
let n = 10
console.log(n)
console.log(typeof n)
n = 15.99
console.log(n)
console.log(typeof n)

// bool
const isOpen = true
console.log(isOpen)
console.log(typeof isOpen)

// null
const a = null
console.log(a)
console.log(typeof a)

// undefined
let nada
console.log(nada)
console.log(typeof nada)

// array
const linguagens = ['C++','Java','Python','JS']
console.log(linguagens[0])
console.log(typeof linguagens[0])

// object literals
const user = {
    username:'wall',
    password: '123',
    age:31,
    name:'Wallison'
}

console.log(user)
console.log(typeof user)

// métodos de string
const text = "qualquer um"

// quebrar texto em um conjunto de caracteres
const textToArray = text.split(' ')
console.log(textToArray[0])
console.log(text.toLocaleLowerCase())
console.log(text.toUpperCase())

// procurar algo dentro de uma string (retorna o índice)
console.log(text.indexOf('um'))
console.log(text.charAt(text.length - 1))
console.log(text.slice(2,4))

// mais sobre arrays
const chars = ['AAA','B','C','D',88]
console.log(chars[chars.length-1])
console.log(chars)
chars[5] = 'f'
chars.pop() // remove o último
chars.pop()
chars.pop()
chars.pop()
chars.pop()
chars.unshift('B') // insere no início
console.log(chars)

// object literals

const product = {
    name: 'Camisa',
    price: 29.99,
    inStock: true,
    size: ['p','m','g'],
    'main color': 'red'
}

// destructuring

let { productName,price } = product
console.log(price)
price = 30.49
console.log(price)

const vector = [3,7,2,45,99]
let [v1,v2, ,v3] = vector
console.log(v2)

let [z1,z2, ...otherVector] = vector
console.log(otherVector) // pega todo o restante do vetor ...outroVetor

// JSON
// XML

// criando o objeto cachorro
const dog = {
    name: 'Scooby',
    age: 10
}

console.log(dog)

const dogJson = JSON.stringify(dog)

console.log(dogJson)

const dogObject = JSON.parse(dogJson)

console.log(dogObject)

const jsonErrado = "{'banda':'Guns n Roses','local':'Los angeles',membros:4}"

//const jsonErradoObject = JSON.parse(jsonErrado)

//console.log(jsonErradoObject)

// método de arrays

const names = ['Victor','Paulo','Elias','Fabiana']

names.forEach(function(name) {
   console.log(name) 
})

// (map) retorna o valor alterado/percorrido
const modifiedNames = names.map(function(name) {
    if(name == 'Paulo')
        return 'Paulo Sampaio'
    else
        return name
})

console.log(modifiedNames)

// (filter) retorna o valor num se for true
const numArray = [90,4,6,22,0,74,36,1,4].filter(function(num) {
    return num < 10
})

numArray.forEach(function(num) {
    console.log(num)
})

const sumArray = numArray.reduce(function(num, total) {
    return num+total
})

console.log(sumArray)

// funções

function myFunction(name, surname) {
    return `O nome é ${name} ${surname}`
}

console.log(myFunction('Wallison','Ferreira'))

// arrow function

const myArrowFunction = (a,b) => a+b

console.log(myArrowFunction(5,2))

function fora() {
    let x = 7
    function somarXMais5() {
        return x+5
    }

    return somarXMais5()
}

const sumValues = () => ( (x = 7) => (x + 5) ) ()

console.log(sumValues())

const testArrow = () => ((x=7), ()=>(x+5))  ()
console.log(testArrow())

console.log('#################### Aula Terça ####################')

const namesLength = names.map( ({ length }) => length )

console.log(namesLength)

// Desafio A+: Fazer esquema em que um código declara uma variável (let) e uma função faz a soma do valor da variável com um valor estático (5, por exemplo) como retorno. Outro código importa o primeiro e declara uma variável com o mesmo nome e outro valor. Em seguida, chama a função do primeiro código. Qual valor será exibido?
// Utilizar o artigo disponível no endereço https://www.horadecodar.com.br/2020/08/13/como-incluir-um-arquivo-de-javascript-em-outro/

// Orientação a objetos

class Product{
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productDetails() {
        return `O nome do produto é ${this.name} e o preço é ${this.price}`
    }

    static test() {
        console.log('testando método estático...')
    }
}

// instanciando um objeto product

const shirt = new Product('Camisa branca', 19.99)
console.log(shirt.productDetails())

const sock = new Product('Meia cinza', 12.49)
console.log(sock.productDetails())

Product.test()

// Herança

class Tenis extends Product {
    constructor(name, price, size) {
        super(name, price)
        this.size = size
    }

    showNumber() {
        return `O tamanho do ${this.name} é ${this.size}`
    }

    productDetails() {
        return `O nome do produto é ${this.name}, \no tamanho é ${this.size} e o preço é ${this.price}`
    }
}

const tenis = new Tenis('Tenis Nike Jordan', 12000.00, 42)

console.log(tenis.showNumber(), tenis.productDetails())

// Document object Model (DOM)

//console.log(document.getElementsByClassName('text'))

const texts = document.querySelectorAll('.text')
console.log(texts)

texts.forEach((data) => console.log(data))

texts[0].textContent = 'Estou alterando o primeiro parágrafo'

texts[0].innerHTML = '<span> Testando uma alteração</span>'

texts[1].style.backgroundColor = '#c6c6c4'

texts[2].remove()

const button = document.querySelector('#btn')

button.addEventListener('click', () => (texts[3].style.backgroundColor = 'orange'))