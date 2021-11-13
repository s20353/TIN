function sortAlph(str)
{
    let strArr = str.split("");
    return strArr.sort().join("");
}

let x = 'webmaster';
console.log(x, " -> ", sortAlph(x));

//uncomment for no console auto-close
//process.stdin.resume();