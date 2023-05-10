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
        let result = func(x)

        cache.set(x, result)
        return result
    }
}

slow = cacheDecorator(slow)

console.log(slow(5))
console.log(slow(5))