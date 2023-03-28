// let// you can change


// let a = 'Variable a'
// let b = "Variable b"
// {
//     a = 'New Variable a'
//     let b = 'Local Variable b'
//     console.log('scope a', a)
//     console.log('scope b', b)
// }
//
// console.log('A:', a)
// console.log('B:', b)

//Const

// const PORT = 8080
// PORT = 2000 / error

// if you use "const", you cannot change this variable, if this variable not object
const array = ['js', 'python', 'is awesome']

array.push('!')
array[0] = 'JavaScript'
console.log(array)

const obj = {}
obj.name = 'Vladlen'
obj.age = 32

console.log(obj)

function myFunc() {
    console.log(this)
}

myFunc()