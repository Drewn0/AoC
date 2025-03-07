const fs = require('fs');

function checkSequence(row) {
    const IsIncreasing = row[0] < row[1]
    const IsDecreasing =  row[0] > row[1]

    for (let i = 1; i < row.length; i++) {
        const diff = row[i] - row[i - 1];

        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false;
        }
        
        if (IsIncreasing && diff <= 0) {
            return false;
        }

        if (IsDecreasing && diff >= 0) {
            return false;
        }
    }
    return true;
}

function isSafe(row) {
    for (i = 0; i < row.length; i++) {
        const NewRow = row.slice(0, i).concat(row.slice(i + 1));
        if (checkSequence(NewRow)) {
            return true;
        }
    }
    return false;
}

fs.readFile('02.txt', 'utf8',(err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const cos = data.split('\n').map((row) => row.split(' ').map(Number));

// part 1
    let safe = 0;
    cos.forEach((row) => {
        if (checkSequence(row)) {
            safe++;
        }
    });    
    console.log(safe);


// part 2
    let safe2 = 0;
    cos.forEach((row) => {
        if (checkSequence(row)) {
            safe2++;
        }else {
            if (isSafe(row)) {
                safe2++;
            }
        }
    });    
    console.log(safe2);

});    




