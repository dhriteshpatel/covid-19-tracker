import React,{useState} from 'react';
import ReactApexChart from "react-apexcharts";

const DistrictGraph = () => {
    const [series, setSeries] = useState([{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }]);
    const [options, setOptions] = useState({
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Anand', 'Kheda', 'Sabar Kantha', 'Ahmedabad', 'Surat', 'Baroda', 'Rajkot',
            'Vapi', 'Surendra Nagar', 'Narmada'
          ],
        }
      })
    return (
        <div>
            <ReactApexChart options={options} series={series} type="bar" width={500} height={350} />
        </div>
    )
}

export default DistrictGraph;
