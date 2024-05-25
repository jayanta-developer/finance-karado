import React from 'react'
import "./style.css"
import { BallTriangle } from 'react-loader-spinner'


export default function Loader({ visiblety }) {
  return (
    <div className='loaderBox' style={{ display: visiblety ? "flex" : "none" }}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}
