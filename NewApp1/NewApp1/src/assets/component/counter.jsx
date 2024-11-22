// import React from "react";
// import {useSelector, useDispatch} from "react-redux";
// import { increment,decrement,reset } from "../store/counterSlice";
// import style from "../styles/component.module.css";
// const Counter = ()=>{
//     const count = ((state)=>state.counter.value);
//     const dispacth = useDispatch();

//     return(
//         <div className={style.container}>
//             <h1 className={style.title}>counter:{count}</h1>
//             <button className={style.button} onClick={()=> dispacth(increment())}>Increment</button>
//             <button className={style.button} onClick={()=> dispacth(decrement())}></button>
//             <button className={`${style.button} ${style.resetButton}`} onClick={()=> dispacth(reset())}>Reset</button>
//         </div>
//     );
// };

// export default Counter;