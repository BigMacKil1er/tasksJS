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

console.log('==================')


let objWithObj = {
    brend: 'Bmw',
    model: 3,
    parameters: {
        color: 'blue',
        power: '300hp',
        volume: '3.0'
    },
    show: function () {
        console.log(this)
    }
}
let unobj = 'string'
let thisIsNull = null

// simple copy object

function copyObj(obj) {
    let copy = {}
    for (const objKey in obj) {
        if ((typeof obj[objKey]) === 'object') {
            copy[objKey] = copyObj(obj[objKey])
        } else {
            copy[objKey] = obj[objKey]
        }

    }
    return copy

}

// console.log(typeof obj)
console.log('first')
console.log(copyObj(objWithObj))
// console.log(copyObj(unobj))
// copyObj(objWithObj)
// copyObj(unobj)
// copyObj(null)
console.log('===================')
let copy = copyObj(objWithObj)
console.log('===================')
console.log('second')
copy.show()
console.log('===================')
copy.parameters.color = 'red'

console.log('third and fourth')
objWithObj.show()
copy.show()