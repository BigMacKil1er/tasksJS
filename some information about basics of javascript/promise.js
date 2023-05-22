// I solved a small problem about promise
// Задержка на промисах
// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function daley(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    })
}
daley(2000).then(()=> console.log('Done'))
