import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

const Main = () => {
    const [chartData, setChartData] = useState({});
    const chart = () => {
        setChartData({
            labels: ['Monday(1)', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                     'Monday(2)', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                     'Monday(3)', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [
                {
                    label: 'algo trade',
                    data: [0,80,45,55,12,76,90,24,14,56,23,43,33,56,23,1],
                    backgroundColor: ['rgba(255,255,0,0.6)'],
                    pointBorderColor: ['rgba(255,255,255, 0.6)'],
                    borderWidth: 4,
                    lineTension: 0,
                },
            ]
        })
    }

    useEffect(()=> {
        chart();
    }, [])

    const addDataset = () => {
        let newData = []
        for(let i = 0; i <= 24; i++){
            newData.push(Math.floor(Math.random() * 80))
        }
        console.log(newData)
        setChartData({
            labels: ['Monday(1)', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                     'Monday(2)', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                     'Monday(3)', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                     'Monday(4)', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                     'Monday(5)', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [
                {
                    label: 'algo trade',
                    data: newData,
                    backgroundColor: ['rgba(255,255,0,0.6)'],
                    pointBorderColor: ['rgba(255,255,255, 0.6)'],
                    borderWidth: 4,
                    lineTension: 0,
                },
            ]
        })
    }
    const removeDataset = () => {
       chartData.datasets.pop()
    }
    return (
        <div className="trade-chart-container">
            <div className="trade-chart">
                <Line data={chartData} options={{
                    responsive: true,
                    scales: {
                        xAxes: [{gridLines: {color: "rgba(255,255,255,0.3)"}}],
                        yAxes: [{gridLines: {color: "rgba(255,255,255,0.3)"}}]
                    },
                }} />
            <div className="btn-group">
                    <MdKeyboardArrowLeft onClick={() => addDataset()} className="btn"/>
                    <MdKeyboardArrowRight onClick={() => addDataset()} className="btn"/>
            </div>
            </div>
        </div>
    )
}

export default Main;
