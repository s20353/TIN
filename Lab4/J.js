function binarySearch(arr, key)
{
    let l = 0;
        r = arr.length - 1;

    while (l <= r)
    {
        let m = Math.round((l + r) / 2);
        if (arr[m] === key) return m;
        else
        {
            if (arr[m] > key) r = m - 1;
            else l = m + 1;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5];
let key = 3;
console.log(arr);
console.log(key + " is at index " + binarySearch(arr, key)); //2

//uncomment for no console auto-close
//process.stdin.resume();