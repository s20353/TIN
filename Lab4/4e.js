function longestWord(str)
{
    let strArr = str.split(" ").sort((a, b) => b.length - a.length);
    return strArr[0];
}

let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis felis ac tincidunt lobortis. Nunc eu gravida erat. Pellentesque semper ultrices mattis.";
//console.log('The longest word in "', test, '" is ', longestWord(test));

console.log('String:\n"' + str + '"');
console.log("The longest word in the string is: " + longestWord(str));

//uncomment for no console auto-close
//process.stdin.resume();