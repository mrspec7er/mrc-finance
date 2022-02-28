export const exchange = async (toCurrency, fromCurrency) => {
    const data = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=L3K1H8IY1313M5O0`, {
        method: "GET"
    })
    .then(res => res.json())
    .then(response => {
        const exchangeRate = response['Realtime Currency Exchange Rate']['5. Exchange Rate'];
        const fromCurrencyName = response['Realtime Currency Exchange Rate']['2. From_Currency Name'];
        const toCurrencyName = response['Realtime Currency Exchange Rate']['4. To_Currency Name'];
        const payload = {
            exchangeRate,
            fromCurrencyName,
            toCurrencyName
        }
        return payload;
    })
    .catch(err => {
        return err
    });

    return data
}