function getType(arg)
{
    return typeof (arg);
}

let x = 1;
console.log("x is of type " + getType(x));

let y = "1";
console.log("y is of type " + getType(y));

//uncomment for no console auto-close
//process.stdin.resume();