export const stockPrice = async (symbol) => {
    const data = await fetch(`https://stock-cryptocurrency-forex-market-data.p.rapidapi.com/prices/stock?symbol=${symbol}&exchange=IDX&timeframe=1D&length=1`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "stock-cryptocurrency-forex-market-data.p.rapidapi.com",
            "x-rapidapi-key": "ddca3f6e81msh2813f653d6fff8dp18c523jsn862407ca7ffc"
        }
    })
    .then(res => res.json())
    .then(result => {
        const openPrice = result.data[0].open;
        const closePrice= result.data[0].close;
        const dataStockPrice = { 
            openPrice, 
            closePrice
        }
        return dataStockPrice
    })
    .catch(err => {
        return err
    });

    return data
}