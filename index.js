const COINS = {
    'US': [25, 10, 5, 1],
    'AU': [20, 10, 5],
}

// Think about when a currency doesn't have a 1 cent coin

const solution = (amount, countryCode = 'US') => {
    // if(!COINS[countryCode])
    if (COINS.hasOwnProperty(countryCode) === false) throw new Error(`Missing coin definition for "${countryCode}"`)

    const coinDemoninations = COINS[countryCode]

    // console.log(coinDemoninations)

    // Check if the amount is bigger than the biggest coin
    let returnValue = {}, remainingAmount = amount

    for (let index = 0; index < coinDemoninations.length; index++) {
        const coin = coinDemoninations[index]

        // console.log({ coin })
        // console.log({ remainingAmount })
        
        if (remainingAmount < coin) {
            returnValue[coin] = 0
            continue
        }

        const numberOfCoins = remainingAmount / coin
        // console.log({ numberOfCoins })
        const amountOfCurrentCoin = Math.floor(numberOfCoins)
        // console.log({ amountOfCurrentCoin })
        remainingAmount -= amountOfCurrentCoin * coin

        returnValue[coin] = amountOfCurrentCoin
    }

    // Check for remainingAmount > 0 here to guard against remainder of amount

    return returnValue
}

module.exports = solution