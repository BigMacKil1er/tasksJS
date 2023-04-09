let arr = []
arr.push('asd')
arr.unshift('dsa')
console.log(arr)

arr.age = 25

console.log(arr)

for (const arrKey in arr) {
    console.log(arrKey, arr[arrKey])
}
console.log('=======================')
for (const arrElement of arr) {
    console.log(arrElement)
}
let arrTask = ['Джаз', 'Блюз']
function mass(arr) {
    console.log('1', arr)
    arr.push('Рок-н-ролл')
    console.log('2', arr)
    let midle = Math.round((arr.length / 2) - 1)
    arr[midle] = 'Классика'
    console.log('3', arr)
    arr.shift()
    console.log('4', arr)
    arr.unshift('Рэп', 'Регги')
    console.log('5', arr)
}
mass(arrTask)
// ============all methods=============
let someArrey = ['apple']
let someArrey2 = new Array('apple')

someArrey.push('Pineapple')          // [ 'apple', 'Pineapple' ]
someArrey.pop('Pineapple')           // [ 'apple' ]
someArrey.unshift('Pineapple') // [ 'Pineapple', 'apple' ]
someArrey.shift('Pineapple')        // [ 'apple' ]

someArrey2.push('Pineapple', 'Pear', 'Peach')
//---циклы---
for (const string of someArrey2) {
    console.log(string)
    // apple
    // Pineapple
    // Pear
    // Peach
}
for (const someArrey2Key in someArrey2) {
    console.log(someArrey2Key)
    // 0
    // 1
    // 2
    // 3
    console.log(someArrey2[someArrey2Key])
    // apple
    // Pineapple
    // Pear
    // Peach
}

console.log(someArrey2[1])               // Pineapple
console.log(someArrey2[-1])              // undefined
console.log(someArrey2.at(1))      // Pineapple
console.log(someArrey2.at(-1))     // Peach

delete someArrey2[0]                     // [ <1 empty item>, 'Pineapple', 'Pear', 'Peach' ] удалил значение но место занимает
console.log(someArrey2.length)           // 4 Длина такая же
someArrey2.splice(0, 1)   // начиная с индекса 0, удаляет первый
someArrey2.splice(0, 2, 'mandarin', "plum") //начина с индекса 0 удаляет первые два, затем на их место добавляет два новых значания [ 'mandarin', 'plum', 'Peach' ]
let smAr2 = someArrey2.splice(0, 2, 'mandarin', "plum") // Возвращает два удаленных
someArrey2.splice(2, 0, 'grapefruit')

let a = someArrey2.slice(0, 3) // Создает копию массива с, по и возвращает его
console.log(someArrey2)
const obj = {name: 'Naira'}
let b = a.concat(someArrey2, ['one', 'two'], obj) // копирует масивы в масив и можно добавить не только масивы но и объекты и примитивы
console.log(b)

b.forEach((item, index, array) => { // Перебор фор ичем со стрелочной ф-нкцией
    console.log(`Получается у ${array} имеется индекс ${index} и значение ${item}`)
})
b.forEach(console.log) // выводит все сразу в консоль

let inxOf = b.indexOf('plum', 0) // 1 первый индекс
let inclds = b.includes('plum', 0) // true
let lstindxof = b.lastIndexOf('plum', -1) // 4 певрое вхождение с конца
console.log(lstindxof)

let fruit = b.findIndex(item => {
    if (item === 'plum'){
        return true
    }
})
console.log('plum', fruit)


let arrayObject = [
    {
        name: 'art',
        age: 27,
    },
    {
        name: 'ars',
        age: 28,
    },
    {
        name: 'ser',
        age: 26,
    },
    {
        name: 'rob',
        age: 24,
    },
]
let respObj = arrayObject.find(item => item.age <= 26)          // возвращает сам элемент если находит или undefined
console.log(respObj)
let respObj2 = arrayObject.findIndex(item => item.age < 27)    // возвращает индекс или -1
console.log(respObj2)
let respObj3 = arrayObject.findLastIndex(item => item.age < 27)    // возвращает индекс или -1 но с конца
console.log(respObj3)

let arreyFilter = arrayObject.filter(item => item.age < 27)
console.log(arreyFilter)

let arrMap = arrayObject.map(function (item) {
    item.age += 1
    return item
})
console.log(arrMap)
let arrNum = [1, 2, 3, 4, 5, 6,].map(function (item) {
    return item * 2
})
console.log(arrNum)

let randomArr = [43, 20, 35, 10, 9, 11, 7, 8, 9, 2]

randomArr.sort((a, b) => a - b)
console.log(randomArr)

let resul = randomArr.reduce((sum, currentValue) => sum + currentValue)
console.log(resul)