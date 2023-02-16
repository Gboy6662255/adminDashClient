import React from 'react'
import DataT from './DataT'
import "./ILEUserStatisticsDashboard.css"
import data from './mydata.json';
import vedhikdata from './DataVedhikIAS.json'
import ileblue from "./images/ileblue.png";
function ILEUserStatisticsDashboard() {
  const items = [
    {name:"VEDHIK IAS ACADEMY"},
    {name:"VEDHIK E-School"},
   { name:"Hindustan College"},
   { name: "Vivekanadha College"}
  ];
  return (
    <div className='ILEUserStatisticsDashboard'>
      <div className='DataContainerHeader'>
      

      <h4 style={{fontSize:"20px",color:"white",paddingRight:"40.25rem"}}>iLE User Statistics Dashboard</h4>
      <img src={ileblue} alt="" style={{width:"150px",height:"60px",marginRight:"20px"}} />
      </div>
      

    <div className='Grid'>
      {items.map(item =>(<div className='grid-item'>
      <DataT 
      name={item.name}
      data={data}
      
      />
      </div>))}
    </div>
    
</div>
  )
}

export default ILEUserStatisticsDashboard