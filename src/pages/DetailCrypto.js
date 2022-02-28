import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CryptoCharts from "../components/CryptoCharts";
import { fetchDetailCryptoSlice } from "../redux/detailCryptoSlice";
const DetailCrypto = () => {

    const dispatch = useDispatch();
    const {cryptoId} = useParams();
    const [days, setDays] = useState(7);
    
    useEffect(() => {
        let interval = null;
        if (days > 7) {
            interval = "daily"
        }
        dispatch(fetchDetailCryptoSlice({cryptoId, days, interval}))
    }, [days, dispatch, cryptoId]);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

    const priceResult = useSelector(state => state.detailCrypto.value);
    const priceValue = priceResult.map(item => Math.round(item[1]));
    const priceDate = priceResult.map(item =>  {
        const time = new Date(+item[0])
        const hours =  ("0" + time.getHours()).slice(-2);
        const minute =  ("0" + time.getMinutes()).slice(-2);
        const date = ("0" + time.getDate()).slice(-2);
        const month = monthNames[time.getMonth()];

        if (days > 7) {
            return `${month}.${date}`
        }

        return `${hours}:${minute}.${month}.${date}`
    });

    return ( 
        <div>
                <div className="flex justify-center">
                    <select onChange={(e) => setDays(e.target.value)}>
                        <option value={7}>7 Day</option>
                        <option value={1}>1 Day</option>
                        <option value={30}>30 Day</option>
                        <option value={60}>60 Day</option>
                        <option value={90}>90 Day</option>
                    </select>
                </div>
                        {priceDate.length > 0 && priceValue.length > 0 &&  <CryptoCharts priceValue={priceValue} priceDate={priceDate} cryptoId={cryptoId} />}
        </div>
     );
}
 
export default DetailCrypto;