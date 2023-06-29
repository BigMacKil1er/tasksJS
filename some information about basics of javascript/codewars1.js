// You live in the city of Cartesia where all roads are laid out in a perfect grid.
//     You arrived ten minutes too early to an appointment, so you decided to take the
// opportunity to go for a short walk. The city provides its citizens with a Walk Generating
// App on their phones -- everytime you press the button it sends you an array of one-letter
// strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only
// a single block for each letter (direction) and you know it takes you one minute to traverse
// one city block, so create a function that will return true if the walk the app gives you will
// take you exactly ten minutes (you don't want to be early or late!) and will, of course, return ' +
// 'you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters
// ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


// function isValidWalk(walk) {
//     if(walk.length === 10){
//         const point = [0,0]
//         const current = [0,0]
//         for (let i = 0; i < walk.length; i++) {
//             if(walk[i] == 'n') {current[0] += 1}
//             if(walk[i] == 's') {current[0] -= 1}
//             if(walk[i] == 'w') {current[1] -= 1}
//             if(walk[i] == 'e') {current[1] += 1}
//         }
//         return point.join('') == current.join('')
//     } else return false
// }


function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    const point = [0, 0];
    const directions = {
        n: [1, 0],
        s: [-1, 0],
        w: [0, -1],
        e: [0, 1]
    };

    const current = walk.reduce((position, step) => {
        position[0] += directions[step][0];
        position[1] += directions[step][1];
        return position;
    }, [0, 0]);

    return point.join('') === current.join('');
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))