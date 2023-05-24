// I solved a small problem about promise
// Задержка на промисах
// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

// function daley(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms)
//     })
// }
// daley(2000).then(()=> console.log('Done'))

// small problem

// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }
//
// loadJson('no-such-user.json') // (3)
//     .catch(console.log); // Error: 404
//
// async function loadJsonAsync(url) {
//     let response = await fetch(url)
//     if (response.status == 200) {
//         return await response.json()
//     } else {
//         throw new Error(response.status)
//     }
// }
// loadJsonAsync('https://api.dictionaryapi.dev/api/v2/entries/en/sky').catch(console.log)
// async function loadJsonAsync(url) {
//     let response = await fetch(url)
//     let json = await JSON.parse(response)
//     if (response.status == 200) {
//         return await json
//     } else {
//         throw new Error(response.status)
//     }
// }
// loadJsonAsync('https://api.dictionaryapi.dev/api/v2/entries/en/sky').catch(console.log)

async function some(url) {
    let response = await fetch(url)
    let json = JSON.parse(response)
    return json
}

console.log(some('https://api.dictionaryapi.dev/api/v2/entries/en/sky'))