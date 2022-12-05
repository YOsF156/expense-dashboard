import React from 'react'
import "./Chart.css"
import ChartBar from './ChartBar'
export default function Chart(prop) {
    const dataPointValues = prop.dataPoints.map(data => data.value)
    const totalMax = Math.max(...dataPointValues)


    return (
        <div className="chart">
            {prop.dataPoints.map(dataPoint =>
                <ChartBar key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax} />)}
        </div>
    )
}
