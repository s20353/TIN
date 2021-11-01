function isPrime(num)
{
    for (let i = 2; i < num; ++i)
    {
        if (num % i === 0)
        {
            return false;
        }
    }
    return true;
}

function run(arg)
{
    console.log(arg + " is" + (isPrime(arg) ? " a prime number." : " not a prime number."));
}

let x = 3;
let y = 18;
run(x);
run(y);

//uncomment for no console auto-close
//process.stdin.resume();