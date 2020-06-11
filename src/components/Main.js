import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

const Main = () => {
    const [chartData, setChartData] = useState({});
    const chart = () => {
        setChartData({
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [
                {
                    label: 'algo trade',
                    data: [32,80,45,55,12,76,90],
                    backgroundColor: ['rgba(75,192,192,0.6'],
                    pointBorderColor: ['rgba(255,255,255)'],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(()=> {
        chart();
    }, [])

    return (
        <div className="trade-chart-container">
            <div className="trade-chart">
                <Line data={chartData} options={{
                    responsive: true,
                    scales: {
                        xAxes: [{gridLines: {color: "rgba(255,255,255,0.3)"}}],
                        yAxes: [{gridLines: {color: "rgba(255,255,255,0.3)"}}]
                    }
                }} />
            <div className="btn-group">
                    <MdKeyboardArrowLeft className="btn"/>
                    <MdKeyboardArrowRight className="btn"/>
            </div>
            </div>
        </div>
    )
}

export default Main;
