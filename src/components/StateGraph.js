import React,{useState, useEffect} from 'react';
import ReactApexChart from "react-apexcharts"
import { useSelector } from 'react-redux';

export const StateGraph = () => {
  const { states, confirmedStates, testedStates, recoveredStates} = useSelector(state => state);
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({});
  const [height, setHeight] = useState(350);


      useEffect(() => {
        if(states.length > 30){
          setHeight(1500);
        }
        else if(states.length> 20){
          setHeight(800)
        }
        else if(states.length> 10){
          setHeight(600)
        }
        else{
          setHeight(350)
        }
          setSeries([
            {
            name: 'Tested',
            data: testedStates
          }, {
            name: 'Confirmed',
            data: confirmedStates
          }, {
            name: 'Recovered',
            data: recoveredStates
          }]);
          setOptions({
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
            },
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            xaxis: {
              categories: states,
              labels: {
                formatter: function (val) {
                  return val 
                }
              }
            },
            yaxis: {
              title: {
                text: undefined
              },
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val
                }
              }
            },
            fill: {
              opacity: 1
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40
            }
          });
      },[states, confirmedStates, testedStates, recoveredStates])

          return (
        <div>
            <ReactApexChart options={options} series={series} type="bar" width={500} height={height} />
        </div>
    )
}

export default StateGraph;
