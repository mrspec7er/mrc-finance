export const detailCrypto = async (cryptoId, days, interval) => {
    const data = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=idr&days=${days}&interval=${interval}`, {
        method: "GET"
    })
    .then(res => res.json())
    .then(response => {
        return response.prices;
    })
    .catch(err => {
        return err
    });

    return data;
}