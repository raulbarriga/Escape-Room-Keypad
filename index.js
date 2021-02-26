const words = ['apple', 'pleas', 'please'];

const keypads = [
    'aelwxyz',
    'aelpxyz',
    'aelpsxy',
    'saelprt',
    'xaebksy'  
]

const output = keypads.map(pad => {
    const map = {};
    pad.split('').forEach(char => map[char] = true);
    const key = pad[0];

    let sum = 0;
    words
        .filter(word => word.includes(key))
        .forEach(word => {
            const foundCharacters = word
                .split('')
                .reduce((acc, char) => acc + (map[char] ? 1 : 0), 0);
            if (foundCharacters === word.length) {
                sum++;
            }
        });

    return sum;
})

console.log(output);

// https://www.youtube.com/watch?v=as7JZ94LxII