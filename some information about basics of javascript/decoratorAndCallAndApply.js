// decorator
// декоратор это функция принимающая другую функцию и изменяет ее поведение
function slow(x) {
    console.log(`Called with ${x}`)
    return x
}

function cacheDecorator(func) {
    let cache = new Map()

    return function (x){
        if (cache.has(x)){
            return cache.get(x)
        }
        let result = func.call(this, x)

        cache.set(x, result)
        return result
    }
}

slow = cacheDecorator(slow)

console.log(slow(5))
console.log(slow(5))

// По сути call явно устанавливает контекст this если мы вызываем функцию внутри объекта и еоторая ссылается на элемент ынутри объекта
const obj = {
    someMethod(){
        return 1
    },
    someFunction(x){
        console.log('Called with call ' + x)
        return x * this.someMethod()
    }
}
obj.someFunction = cacheDecorator(obj.someFunction)
console.log(obj.someFunction(5))
console.log(obj.someFunction(5))