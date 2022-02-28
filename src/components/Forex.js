import {fetchDataSlice} from "../redux/exchangeSlice";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from "react";
import currencyCode from "../resources/forex.json";

const Forex = () => {
    const dispatch = useDispatch();

    const [defaultCurrency, setDefaultCurrency] = useState(currencyCode[0]);
    const [foreignCurrency, setForeignCurrency] = useState(currencyCode[1]);
    const [secondOptionCurrency, setSecondOptionCurrency] = useState([]);
    const [firstOptionCurrency, setFirstOptionCurrency] = useState([]);
    const result = useSelector(state => state.exchange.value);

    useEffect(() => {
        const newFirstList = currencyCode.filter(item => item !== foreignCurrency);
        const newSecondList = currencyCode.filter(item => item !== defaultCurrency);
        setFirstOptionCurrency(newFirstList);
        setSecondOptionCurrency(newSecondList);
    }, [defaultCurrency, foreignCurrency])

    const handleExchange = (toCurrency, fromCurrency) => {
      dispatch(fetchDataSlice({toCurrency, fromCurrency}))
    }

    return (
        <>
            <h1 className="text-center py-3 text-2xl font-semibold mt-32">Currency Exchange</h1>
            <div className="grid justify-center">
                <div className="flex justify-center gap-12">
                    <select onChange={(e) => setForeignCurrency(e.target.value)} className="appearance-none border-2 text-xl">
                        {secondOptionCurrency.map(item => (
                            <option className="text-center" key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    <select onChange={(e) => setDefaultCurrency(e.target.value)} className="appearance-none border-2 text-xl">
                        {firstOptionCurrency.map(item => (
                            <option className="text-center" key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <button className="py-2 px-1 bg-secondary font-semibold rounded-md my-3" onClick={() => handleExchange(defaultCurrency, foreignCurrency)}>Check</button>
            </div>
            <div className="grid justify-center">
                        {result &&
                            <h1 className="text-center text-2xl font-semibold">{Intl.NumberFormat('en-IN').format(result?.exchangeRate)}</h1>
                        }
                        <div className="flex justify-center">
                            <div className="w-2/4 grid grid-cols-2 gap-12">    
                                <h1 className="text-lg font-medium">{result?.fromCurrencyName}</h1>
                                <h1 className="text-lg font-medium">{result?.toCurrencyName}</h1>
                            </div>
                        </div>
            </div>
        </>
     );
}
 
export default Forex;