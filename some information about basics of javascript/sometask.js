// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = "Lydia";
//     let age = 21;
// }
//
// sayHi();

// console.log(typeof typeof 1);

// const config = {
//     languages: [],
//     set language(lang) {
//         return this.languages.push(lang);
//     }
// };
//
// console.log(config.language);

// const myPromise = Promise.resolve("Woah some cool data");
//
// (async () => {
//     try {
//         console.log(await myPromise);
//     } catch {
//         throw new Error(`Oops didn't work`);
//     } finally {
//         console.log("Oh finally!");
//     }
// })();

// async function getData() {
//     return await Promise.resolve("I made it!");
// }
//
// const data = getData();
// console.log(data);

// fetch('https://www.website.com/api/user/1')
//     .then(res => res.json())
//     .then(res => console.log(res))

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);
//
// console.log("🥑" + "💻");

// (() => {
//     let x = (y = 10);
// })();
//
// console.log(typeof x);
// console.log(typeof y);

// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
// }
//
// const person = "Lydia";
// const age = 21;
//
// getPersonInfo`${person} is ${age} years old`;

// function nums(a, b) {
//     if
//     (a > b)
//         console.log('a is bigger')
//     else
//         console.log('b is bigger')
//     return
//     a + b
// }
//
// console.log(nums(4, 2))
// console.log(nums(1, 2))

[1, 2, 3, 4].reduce((x, y) => console.log(x, y));