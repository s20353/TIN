function isPalindrome(str)
{
    let len = str.length;
    for (let i = 0; i < len / 2; ++i)
    {
        if (str.charAt(i) !== str.charAt(len - 1 - i))
        {
            return false;
        }
    }
    return true;
}

let notPalindrome = "JavaScript",
    palindrome = "level";

console.log("Are the following palindromes?");
console.log(notPalindrome + ": " + isPalindrome(notPalindrome));
console.log(palindrome + ": " + isPalindrome(palindrome));

//uncomment for no console auto-close
//process.stdin.resume();