const fs = require('fs');

fs.readFile('data.txt', 'utf8',(err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    //part 1
    let pattern = /mul\(\d{1,3},\d{1,3}\)/g;
    let matches = data.match(pattern);


    let sum = matches.reduce((acc, matches) => {
        const [a, b] = matches.match(/\d{1,3}/g);
        acc += a * b;
        return acc;
    }, 0);
    console.log(sum);


    //part 2
    let pattern2 = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;
    let matches2 = data.match(pattern2);

    let IsEnabled = true;
    let sum2 = matches2.reduce((acc, matches2) => {
        if (matches2 === 'do()') {
            IsEnabled = true;
        } else if (matches2 === 'don\'t()') {
            IsEnabled = false;
        } else if (IsEnabled) {
            const [a, b] = matches2.match(/\d{1,3}/g).map(Number);
            acc += a * b;
        }
        return acc;
    }, 0);
    console.log(sum2);

});