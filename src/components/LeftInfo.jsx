import React from 'react'
import DataT from './DataT'
import ILEUserStatisticsDashboard from './ILEUserStatisticsDashboard'
import "./LeftInfo.css"

function LeftInfo() {
  return (
    <div className='MainContainer'>
    <div className='LeftInfo'>
    <div className='Overall'>
        <ul className='bullets'>
            <li>Overall User Statistics</li>
        </ul>
    </div>
    </div>
    <ILEUserStatisticsDashboard/>
    </div>
    
  )
}

export default LeftInfo