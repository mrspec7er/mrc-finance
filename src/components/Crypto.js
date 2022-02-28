import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBestCryptoSlice, remove } from "../redux/bestCryptoSlice";
const Crypto = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchBestCryptoSlice({page}));

        // return dispatch(remove());
    }, [page, dispatch]);

    useEffect(() => {
        dispatch(remove());
    }, [dispatch])

    const result = useSelector(state => state.bestCrypto.value);

    return ( 
        <>
        <h1 className="text-center text-xl font-semibold py-3">Top Coin Market Cap</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {result.map(item => (
                    <div className="my-3" key={item.id}>
                        <Link to={`/crypto/${item.id}`}>
                            <div className="flex justify-center">
                                <img className="w-1/6" src={item.image} alt="coin" />
                            </div>
                            <p className="text-center">Name: <span className="font-semibold">{item.name}</span></p>
                            <p className="text-center">Current Price :</p>
                            <p className="text-center"><span className="font-semibold">Rp. {Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(item.current_price)}</span></p>
                            <p className="text-center">Daily Changes : {item.price_change_percentage_24h > 0 ? <span className="font-semibold text-sell">{item.price_change_percentage_24h?.toFixed(2)}%</span> : <span className="font-semibold text-buy">{item.price_change_percentage_24h?.toFixed(3)}%</span>}</p>
                            <p className="text-center">Market Cap :</p>
                            <p className="text-center"><span className="font-semibold">Rp. {Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(item.market_cap / 1000000000)}M</span></p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="text-center my-5">
                <button className="py-2 px-2 bg-secondary rounded-md font-semibold" onClick={() => setPage(current => current + 1)}>Load More</button>
            </div>
        </>
     );
}
 
export default Crypto;