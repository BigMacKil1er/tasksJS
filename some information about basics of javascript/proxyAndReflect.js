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