// i)	Write a JavaScript function to convert an amount of money to coins.
//      Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
//      Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//      Output : 25, 10, 10, 1

const amountToCoins = (money, coins) => {
    let sum = 0
    let resArr = []
    for (let i = 0; i < coins.length;) {
        if (sum + coins[i] <= money) {
            sum += coins[i]
            resArr.push(coins[i])
        } else if (sum === money) {
            break
        } else if (sum + coins[i] > money && i !== coins.length - 1) {
            i += 1
        } else if (sum + coins[i] > money && i === coins.length - 1) {
            resArr = []
            break
        } else break
    }
    return resArr
}

let ans = amountToCoins(46, [25, 10, 5, 2, 1])
console.log(ans);