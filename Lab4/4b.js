function fib(n)
{
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++)
    {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
}

var x = 7;
console.log("#" + x + " in Fibonacci's sequence: " + fib(7));

//uncomment for no console auto-close
//process.stdin.resume();