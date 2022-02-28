export const bestCrypto = async (page) => {
    const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=6&page=${page}&sparkline=false`, {
        method: "GET"
    })
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(err => {
        return err
    });
    
    return data;
}