import React from 'react'
import "./Header.css";
import ileLogo from "./images/Logoile.png";

function Header() {
  return (
    <div className='Header'>
        <div className='HeaderInfo'>
        <img src={ileLogo} alt="" />
        <p style={{padding:"0 5px"}}>iLE User Statistics Report</p>
        </div>
    </div>
    
  )

}

export default Header