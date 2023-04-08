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