var x = function (n) { return n ? n * x(n - 1) : 1; };
console.log("Recursive expression: " + x(5)); // 120

function factorial(n)
{
    if (n === 0 || n === 1)
    {
        return 1;
    }
        
    for (var i = n - 1; i >= 1; i--)
    {
        n *= i;
    }
    return n;
}
console.log("Iterative declaration: " + factorial(5)); // 120

//uncomment for no console auto-close
//process.stdin.resume();