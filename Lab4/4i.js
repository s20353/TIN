function amountToCoins(amount, coinsArr)
{
    let outputArr = [], tmp = amount, sortedArr = coinsArr.sort((a, b) => b - a);
    for (let i = 0; i < coinsArr.length; ++i)
    {
        while (tmp - coinsArr[i] >= 0)
        {
            tmp -= sortedArr[i];
            outputArr.push(coinsArr[i]);
        }
    }
    return outputArr;
}

let coinsArr = [25, 10, 5, 2, 1];
let amount = 46;
console.log("Coins: " + coinsArr);
console.log("Amount: " + amount);
console.log(amountToCoins(amount, coinsArr));

//uncomment for no console auto-close
//process.stdin.resume();