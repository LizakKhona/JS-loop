let i = 1;
while (i <= 10) {
    console.log(i);
    i += 1;
}


for (let k = 1; k <= 20; k += 1){
    if (k % 2 !== 0) {
        continue
    } else {
        console.log(k)
    }
}


for (let number = 1; number <= 10; number += 1){
    let result = 7 * number;
    console.log(result)
}


let n = 5;
for (let i = 0; i <= 5; i++) {
    if (i === n) {
        break
    }
    console.log(i)
}

let figure = 1;
while (figure <= 20) {
    if (figure % 3 === 0) {
        figure = figure + 1;
        continue
    } else {
        console.log(figure);
    }
    figure = figure + 1;
}
