import React from 'react'
import "./ChartBar.css"

function ChartBar(prop) {
    let barFillheight = "0%"
    if (prop.maxValue > 0) {
        barFillheight = Math.round(prop.value / prop.maxValue * 100) + "%"
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__label">{prop.value}</div>
            <div className="chart-bar__inner">
                <div style={{ height: barFillheight }} className="chart-bar__fill"></div>
            </div>
            <div className="chart-bar__label">{prop.label}</div>
        </div>
    )
}

export default ChartBar