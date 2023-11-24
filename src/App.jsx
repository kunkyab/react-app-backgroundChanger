import { useState } from 'react'
import './App.css'
import './index.css'


function App() {
  
  const [color,setColor]=useState('olive');
const handleClick = ()=>{
  setColor('green')
}


  return (
    <>
    
    
     <div className='container' style={{backgroundColor:color}}>
     
      <div className='button'>
      <h1>Background Changer App</h1>
      <button className='btn' onClick={()=>setColor('red')} style={{backgroundColor:'red'}}>Red</button>
      <button className='btn' onClick={()=>setColor('blue')} style={{backgroundColor:'blue'}}>blue</button>
      <button className='btn' onClick={()=>setColor('green')} style={{backgroundColor:'green'}}>green</button>
      <button className='btn'onClick={()=>setColor('yellow')} style={{backgroundColor:'yellow'}}>yellow</button>
      <button className='btn' onClick={()=>setColor('brown')} style={{backgroundColor:'brown'}}>brown</button>
      <button className='btn'onClick={()=>setColor('black')} style={{backgroundColor:'black'}}>black</button>
      

      </div>
     </div>
    </>
  )
}

export default App