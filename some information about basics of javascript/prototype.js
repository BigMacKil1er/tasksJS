// __proto__
// Object.getPrototypeOf()

function Cat(name, color) {
    this.name = name
    this.color = color
}

Cat.prototype.voice = function () {
    console.log(`Cat ${this.name} says myau`)
}
const cat = new Cat('Kot', 'white')

console.log('Спросим какой прототип у cat?:', Cat.prototype)

console.log('===================')
console.log('Ниже вызываем этот прототип функцию')
cat.voice()

console.log('===================')
//-----=-=-====

function Person() {}

Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Tom'

console.log('skin' in person) //true
console.log(person.legs)      // 2
console.log(person.name)      // Tom
console.log(person)           // Person { name: 'Vladlen' }

console.log('===================')

console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('skin'))

console.log('===================')
//Object.create()

const proto = {year: 2023}
const myYear = Object.create(proto)

console.log(myYear.year)
console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto)

proto.year = 2024

console.log(myYear.year)