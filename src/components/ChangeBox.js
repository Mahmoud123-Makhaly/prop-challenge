import React, { useState } from 'react'
import colorNames from 'colornames';
const ChangeBox = ({DarkText,setDarkText,Input , setInput,setHexColor}) => {
console.log(Input)
  return (
    <form className='ChangeBox' onSubmit={(e)=>e.preventDefault()}>
    <input required autoFocus value={Input} onChange={(e)=>{
      setInput(e.target.value);
      setHexColor(colorNames(e.target.value))
    }} type='text' placeholder='Add Color Name'/>
    <br/>
    <button onClick={()=>setDarkText(!DarkText)}>toggle color</button>
    </form>
  )
}

export default ChangeBox