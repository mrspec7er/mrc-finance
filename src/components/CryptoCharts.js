import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const CryptoCharts = ({priceValue, priceDate, cryptoId}) => {
    const priceData = {
        labels: priceDate,
        datasets: [
          {
            label: `${cryptoId}`,
            data: priceValue,
            backgroundColor: [
              "rgba(75,192,192,1)"
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      }

    return (
    <>
        <div className="flex flex-col bg-white m-auto p-auto">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
              <div className="inline-block px-3">
                <Line className="w-[300vw] md:w-[90vw] snap-start" data={priceData} />
              </div>
            </div>
          </div>
</div>
    </> 
     );
}
 
export default CryptoCharts;