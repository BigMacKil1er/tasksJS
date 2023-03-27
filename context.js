const person = {
    surname: 'Старк',
    knows: function (what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
}

const  john = {
    surname: 'Сноу'
}
person.knows('Все', "Бран")

person.knows.call(john, 'Ничего не', 'Джон')

person.knows.apply(john, ['Ничего не', 'Джон'])

person.knows.call(john, ...['Ничего не', 'Джон']) //es6 оператор spread это 3 ебучих точки которые разворачивают масив
person.knows.bind(john, 'Ничего не', 'Джон')()    //не вызывает сразу функцию а создает новую можно ее вызвать сразу как здесь
const bound = person.knows.bind(john, 'Ничего не', 'Джон') // или присвоить ее к переменной затем вызвав ее
bound()

//-------

function Person(name, age) {
    this.name = name
    this.age = age
    console.log(this)
}
const  marina = new Person('Marina', 20)

//---- Явный

function logThis() {
    console.log(this)
}
const obj = {num: 42}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

//---- не явный

const animal = {
    logs: 4,
    logThis: function () {
        console.log(this)
    }
}

animal.logThis()


// -=-=-=-=

function Cat(color) {
    this.color = color
    console.log('this', this)
    ; (() => console.log('Arrow this', this))()
}
new Cat('red')