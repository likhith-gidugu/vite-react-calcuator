import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [number , setNumber] = useState('')
  const [result,setResult]=useState(0) 
  function handle(e){
   setNumber(e.target.value)
  }

  return (
    <div>
     
    <center>
      <div  className='calculator-container'>
    <p>
      <input type="text" value={number} name='number' onChange={handle} />
      </p>
      
      <p className='result'>
        Total: {result}
      </p>
      <Button  onClick={()=>{setNumber(number+'1')}} variant="dark">1</Button>
      
      <Button onClick={()=>{setNumber(number+'2')}} variant="dark">2</Button>

      <Button onClick={()=>{setNumber(number+'3')}} variant="dark">3</Button>
      
      <Button onClick={()=>{setNumber(number+'+')}} variant="warning">+</Button>
      <br />
      
      <Button onClick={()=>{setNumber(number+'4')}} variant="dark">4</Button>

      <Button onClick={()=>{setNumber(number+'5')}} variant="dark">5</Button>
      <Button onClick={()=>{setNumber(number+'6')}} variant="dark">6</Button>
      <Button onClick={()=>{setNumber(number+'-')}} variant="warning">-</Button>
      <br/>
      <Button onClick={()=>{setNumber(number+'7')}} variant="dark">7</Button>
      
      <Button onClick={()=>{setNumber(number+'8')}} variant="dark">8</Button>
     
      <Button onClick={()=>{setNumber(number+'9')}} variant="dark">9</Button>
      
      <Button onClick={()=>{setNumber(number+'/')}} variant="warning">/</Button>
      <br/>
      
        <Button  className='clr-btn'    onClick={()=>{setNumber('') ,setResult('')}} variant="outline-danger">clr</Button>{' '}
      <Button onClick={()=>{setNumber(number+'0')}} variant="dark">0</Button>
      
      
     

      <Button onClick={()=>{setNumber(number+'*')}} variant="warning">*</Button>
      <br />
      
      <Button className='total-btn'   onClick={()=>setResult(eval(number))} variant="primary">=</Button>{' '}
      </div>
       
    </center>
    </div>
  )
}

export default App
