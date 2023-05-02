import React from 'react'

const Box = ({Input , HexColor,DarkText}) => {

    
  return (
    <div style={{background:Input , color:DarkText?"#000":"#fff"}} className='box'>
  <h3>{!Input?"Empty Value":Input}</h3> 
 <h3>{HexColor}</h3>
    </div>
  )
}

export default Box