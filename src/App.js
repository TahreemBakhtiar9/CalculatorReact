import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const { preState, setPreState } = useState("")
  const { curState, setCurState } = useState("")
  const { input, setInput } = useState("0")
  const { operator, setOperator } = useState(null)
  const { total, setTotal } = useState(false)

  const inputnum = (e) => { };
  const operatorType = (e) => { };
  const equals = (e) => { };
  const reset = () => { };
  const percent = () => { };
  const plusMinus = () => { };
  return (
    <div className="container">
      <div className='wrapper'>
        <div className='screen'></div>
        <div className='btn lightgray' onClick={reset}>AC</div>
        <div className='btn lightgray' onClick={percent}>%</div>
        <div className='btn lightgray' onClick={plusMinus}>+/-</div>
        <div className='btn orange' onClick={operatorType}>/</div>
        <div className='btn' onClick={inputnum}>7</div>
        <div className='btn' onClick={inputnum}>8</div>
        <div className='btn' onClick={inputnum}>9</div>
        <div className='btn orange' onClick={operatorType}>x</div>
        <div className='btn' onClick={inputnum}>4</div>
        <div className='btn' onClick={inputnum}>5</div>
        <div className='btn' onClick={inputnum}>6</div>
        <div className='btn orange' onClick={operatorType}>+</div>
        <div className='btn' onClick={inputnum}>1</div>
        <div className='btn' onClick={inputnum}>2</div>
        <div className='btn' onClick={inputnum}>3</div>
        <div className='btn orange' onClick={operatorType}>-</div>
        <div className='btn zero' onClick={inputnum}>0</div>
        <div className='btn' onClick={inputnum}>.</div>
        <div className='btn orange' onClick={equals}>=</div>


      </div>
    </div>
  );
}

export default App;
