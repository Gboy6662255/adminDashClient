import React, { useState } from 'react'
import DataT from './DataT'
import "./ILEUserStatisticsDashboard.css"
// import data from './mydata.json';
import clientHeaders from "../Configurations/clientHeaders.json"
import ileblue from "./images/ileblue.png";
function ILEUserStatisticsDashboard() {
  const [data, setData] = useState('');
  const handleLoadData=()=>{
    console.log("ds");
    fetch("http://localhost:8081/load", {
      method: "POST",
      body: JSON.stringify({ message: "Hello World!" }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => handleResponseData(data))
      .catch((error) => console.error(error));
  }
  const handleResponseData=(data)=>{
    setData(data);
  }
  return (
    <div className='ILEUserStatisticsDashboard'>
      <div className='DataContainerHeader'>
      <button onClick={handleLoadData}>Load</button>
      <div className='subContainer'>
      <h4 style={{fontSize:"20px",color:"white",paddingRight:"40.25rem"}}>iLE User Statistics Dashboard</h4>
      <img src={ileblue} alt="" style={{width:"150px",height:"60px",marginRight:"20px"}} />
      </div>
      </div>
      <div className='dataScreen'>
        <div className='Grid'>
        {clientHeaders.map(clientHeaders =>(<div className='grid-item'>
        <DataT 
        name={clientHeaders.name}
        data={data}
        
        />
        </div>))}
      </div>
      </div>
    
    
</div>
  )
}

export default ILEUserStatisticsDashboard