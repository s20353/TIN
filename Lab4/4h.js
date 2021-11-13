function secondHighest(arr)
{
    let sorted = arr.sort((a, b) => a - b);
    let x = sorted[arr.length - 2];
    return x;
}

function secondLowest(arr)
{
    let sorted = arr.sort((a, b) => a - b);
    let x = sorted[1];
    return x;
}

let arr = [15, 48, 26, 18, 156, 1, 18, 17];
let high = secondHighest(arr);
let low = secondLowest(arr);
console.log("lowest: " + low); //15
console.log("highest: " + high); //48

//uncomment for no console auto-close
//process.stdin.resume();