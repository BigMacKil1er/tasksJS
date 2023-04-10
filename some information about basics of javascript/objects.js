// let obj = {
//     name: 'Artyom'
// }
//
// let one = {
//     sex: 'Male'
// }
// let tw0 = {
//     leg: 'two',
//     balls: true
// }
// let show = {
//     showThis: function () {
//         console.log(this)
//     }
// }
//
//
// Object.assign(obj, one, tw0, show)
// obj.showThis()

// console.log('==================')
//

// let objWithObj = {
//     brend: 'Bmw',
//     model: 3,
//     parameters: {
//         color: 'blue',
//         power: '300hp',
//         volume: '3.0'
//     },
//     show: function () {
//         console.log(this)
//     }
// }
// let unobj = 'string'
// let thisIsNull = null

// simple copy object

// function copyObj(obj) {
//     let copy = {}
//     for (const objKey in obj) {
//         if ((typeof obj[objKey]) === 'object') {
//             copy[objKey] = copyObj(obj[objKey])
//         } else {
//             copy[objKey] = obj[objKey]
//         }
//
//     }
//     return copy
//
// }

// console.log(typeof obj)
// console.log('first')
// console.log(copyObj(objWithObj))
// console.log(copyObj(unobj))
// copyObj(objWithObj)
// copyObj(unobj)
// copyObj(null)
// console.log('===================')
// let copy = copyObj(objWithObj)
// console.log('===================')
// console.log('second')
// copy.show()
// console.log('===================')
// copy.parameters.color = 'red'
//
// console.log('third and fourth')
// objWithObj.show()
// copy.show()

// простой калькулятор но ток плюс и умножение
// const calc = {
//     a: 0,
//     b: 0,
//     read(num1, num2) {
//         this.a = num1
//         this.b = num2
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }
//
// console.log('=================')
//
// calc.read(2, 3)
// console.log(calc.sum())
// console.log(calc.mul())

// Здесь тема про конструкторы
// let Person = function (name, age, sex) {
//     this.name = name
//     this.age = age
//     this.sex = sex
// }
//
//
// let artyom = new Person('artyom', 28, 'male')
// let arsik = new Person('Arsen', 28, "female")
//
// console.log(artyom)
// console.log(arsik)

// ==========================  небольшие задачки ============================
//-------Первая задачка. сдеалть что бы две функции при сравнении были равны-----------

// let obj = {}
// function A(name) { return obj }
// function B(name) { return obj }
//
// let a = new A();
// let b = new B();
// console.log(a == b)
// alert( a == b ); // true

// -----------калькулятор на конструкторе--------------
// function Calc() {
//     this.read = function (num1, num2) {
//         this.num1 = num1
//         this.num2 = num2
//     }
//     this.sum = function () {
//         return this.num1 + this.num2
//     }
//     this.mul = function () {
//         return this.num1 * this.num2
//     }
// }
//
// let twoDigit = new Calc()
// twoDigit.read(3, 5)
// console.log(twoDigit.mul())
// console.log(twoDigit.sum())


//----------------аккумулятор какой то------------------

// function Accumulator(num) {
//     this.num = num
//     this.read = function () {
//         this.num += num
//     }
//     this.value = function () {
//         return this.num
//     }
// }
// let acb = new Accumulator(1)
//
// acb.read()
// console.log(acb.value())
//
// acb.read()
// console.log(acb.value())
//
// acb.read()
// console.log(acb.value())


// let user = {}
//
// console.log(user.adress?.street)

// ========================преобразование обьектов==========================

// ----------------используя--------------- Symbol.toPrimitive

let obj1 = {
    name: 'Ted',
    weight: 1000,
    [Symbol.toPrimitive](hint) {
        return hint == 'string' ? this.name : this.weight
    }
}

let obj2 = {
    name: 'Nick',
    weight: 400,
    [Symbol.toPrimitive](hint) {
        return hint == 'string' ? this.name : this.weight
    }
}

console.log(obj2 + obj1)

let num = +obj1

console.log(String(obj2))

let obj3 = {
    toString(){
        return '2'
    }
}

console.log(obj3 * 3)



// ===================for of===========для obj=========
let objof = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
}

for (const objofElement of objof) {
    console.log(objofElement)

}