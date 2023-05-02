import React, { useState } from 'react'
import Box from  "./components/Box";
import ChangeBox from './components/ChangeBox';
 

const App = () => {
  const [Input , setInput] = useState("");
  const [HexColor , setHexColor]=useState("");
  const[DarkText, setDarkText] = useState(true)
  return (
    <div className='app'>
    <Box DarkText={DarkText} Input = {Input} setInput={setInput} HexColor={HexColor}/>
    <ChangeBox DarkText={DarkText} setDarkText={setDarkText} Input = {Input} setInput={setInput} setHexColor={setHexColor}/>
     
     </div>
  )
}

export default App