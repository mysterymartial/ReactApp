import React from 'react'
import{useSelector, useDispatch} from "react-redux";
import { increment,decrement,reset } from '../features/counter/counterSlice';
import style from "../styles/counter.module.css";

const Counter = () => {
  const count = useSelector((state)=>state.counter.value);
  const dispacther = useDispatch();
  return (
    <div className={style.container}>

      <h1 className={style.title}>{count}</h1>
      <button className={style.button} onClick={()=> dispacther(increment())}>+</button>
      <button className={style.button} onClick={()=> dispacther(decrement())}>-</button>
      <button className={`${style.buton} ${style.resetButton}`} onClick={()=> dispacther(reset())}>reset</button>
      
    </div>
  )
}

export default Counter
 