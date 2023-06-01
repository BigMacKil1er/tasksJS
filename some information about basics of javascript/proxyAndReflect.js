let object = {
    name: 'Sergeyskaya shutka'
}

object = new Proxy(object, {

})

function wrap(target) {
    return new Proxy(target, {
        get(target, p, receiver) {
            if (p in target){
                return Reflect.get(target, p, receiver)
            } else {
                throw new Error('Нет такого')
            }
        }
    })
}
object = wrap(object)
try {
    console.log(object.name)
    console.log(object.age)
} catch (e) {
    console.log(e.message)
}

let arr = []

for (let i = 0; i < 10; i++) {
    arr.push(i)
}

arr = new Proxy(arr,{
    get(target, p, receiver) {
        if (p < 0){
            p = +p + target.length
        }
        return Reflect.get(target, p, receiver)
    }
})
console.log(arr[1])
console.log(arr[-1])