// Свои ошибки пример
class ValidationError extends Error{
    constructor(message) {
        super(message);
        this.name = 'Validation Error'
    }
}

function readUser(json) {
    let user = JSON.parse(json)

    if (!user.name) throw new ValidationError
    if (!user.age) throw new ValidationError
    return user
}
let json = '{"name": "Vasya", "age": 25, "sex": "transgender"}'
let jsonWithoutName = '{"age": 25, "sex": "transgender"}'
let brockenJson = '{You are developer Harry}'
try {
    readUser(json)
    // readUser(jsonWithoutName)
    readUser(brockenJson)
} catch (e) {
    if (e instanceof ValidationError){
        console.log('Некорректные данные ' + e.message)
    } else if (e instanceof SyntaxError){
        console.log('JSON ошибка ебанного синтаксиса ' + e.message)
    } else {
        throw e
    }
}