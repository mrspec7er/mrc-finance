import { useState } from "react";
import stockCode from "../resources/stock.json";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockPriceSlice } from "../redux/stockPriceSlice";
const Stock = () => {
    const [stockChoice, setStockChoice] = useState('ANTM');
    const dispatch = useDispatch();

    const handleTrade = () => {
        dispatch(fetchStockPriceSlice({symbol: stockChoice}));
    }

    const result = useSelector(state => state.stockPrice.value);

    return ( 
        <>
        <h1 className="text-center text-xl font-semibold py-3 mt-32">Stock Trading</h1>
            <div className="grid justify-center">
                <div className="flex justify-center gap-12">
                    <select onChange={(e) => setStockChoice(e.target.value)} className="appearance-none border-2 text-lg px-2 py-1">
                        {stockCode.map(item => (
                            <option className="text-center" key={item.symbol} value={item.symbol}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <button className="py-2 mx-3 bg-secondary font-semibold rounded-md my-3" onClick={handleTrade}>Check</button>
            </div>
            <div className="grid justify-center">
                {result &&
                    <h1 className="text-xl font-semibold">Rp. {Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(result?.closePrice)}</h1>
                }
            </div>
        </>
     );
}
 
export default Stock;