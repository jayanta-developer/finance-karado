import React from 'react';
import "./style.css";
import cross from "../../Assets/Images/blueCross.png";

export default function ErrorPop({ errorActive, setErrorPop, errorMsg }) {
  return (
    <div className='loaderBox' style={{ display: errorActive ? "flex" : "none" }}>
      <div className='errorPop'>
        <img src={cross} className='blueCross' onClick={() => setErrorPop(false)} />
        <h2>Something went wrong  <br /> please try again!</h2>
      </div>
    </div>
  )
}
