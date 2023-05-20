// Свои ошибки пример
class ValidationError extends Error{
    constructor(message) {
        super(message);
        this.name = this.constructor.name
    }
}
class PropertyRequiredError extends ValidationError{
    constructor(property) {
        super('Нет свойства: ' + property);
        this.property = property
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

function readUsers(json) {
    let user = JSON.parse(json)

    if(!user.name) throw new PropertyRequiredError('name')
    if (!user.age) throw new PropertyRequiredError('age')

    return user
}

try {
    readUsers(json)
    readUsers(jsonWithoutName)
    readUsers(brockenJson)
} catch (e) {
    if(e instanceof ValidationError){
        console.log('Неверные данные: '+e.message)
        console.log(e.name)
        console.log(e.property)
    } else if(e instanceof SyntaxError) {
        console.log('JSON ошибка синтаксиса ' + e.message)
    }
}

class FormatError extends SyntaxError{
    constructor(message) {
        super(message);
        this.name = this.constructor.name
    }
}

let err = new FormatError('Ошибка форматирования')
console.log(err.message)
console.log(err.name)
console.log(err.stack)

console.log(err instanceof FormatError)
console.log(err instanceof SyntaxError)