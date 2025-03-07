const fs = require('fs');

function calculateDistance(left, right) {
    let total_distance = 0;

    while (left.length > 0 && right.length > 0) {
        total_distance += Math.abs(left[0] - right[0]);
        left.shift();
        right.shift();
    }
    
    return total_distance;

//part 1
}
fs.readFile('01.txt', 'utf8',(err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const cos = data.split('\n').map((row) => row.split('   ').map(Number));
    console.log(cos);

    const left = cos.map((leftItem) => leftItem[0]);
    const right = cos.map((rightItem) => rightItem[1]);

    left.sort();
    right.sort();
console.log(calculateDistance(left, right));
});

//part 2
fs.readFile('01.txt', 'utf8',(err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    
    const cos = data.split('\n').map((row) => row.split('   ').map(Number));

    const left = cos.map((leftItem) => leftItem[0]);
    const right = cos.map((rightItem) => rightItem[1]);

function countleft(left) {
    let occureleft = {};
    left.forEach(num => {
        occureleft[num] = (occureleft[num] || 0) + 1;
    });
    
    
    return occureleft;
}
function countright(right) {
    let occureright = {};
    right.forEach(num => {
        occureright[num] = (occureright[num] || 0) + 1;
    });

    return occureright;
}
const occureleft = countleft(left);
const occureright = countright(right);

function total_simu(occureleft, occureright) {
    let total = 0;
    for (let num in occureleft) {
        if (occureright[num]) {
            total += num * occureleft[num] * occureright[num];
        }
    }
    return total;
    
}

console.log(total_simu(occureleft, occureright));
});
