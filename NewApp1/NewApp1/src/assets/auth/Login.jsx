import { useState } from "react";
import CustomButton from "../reuseable/CustomButton";
import style from "../styles/signup.module.css"
import { Link } from "react-router-dom";

const Login = ()=>{
    const userDetails = {
        email: "",
        password: "",
      };
      const [data, setData] = useState(userDetails);
      function handleChange(event) {
        console.log(event);
        //name is an attribute of event
        const { name, value } = event.target;
        //setData((prevData)=>({...prevData, [name]:value}));
        setData((prevData)=>{
          //we use the spread operator to collect multiple state of name
          return {...prevData, [name]: value}
    
        });
        
        
      }
    
      console.log(data)
    return (
        <div>
        <form action="#">
            <div>
          <input
            type="text"
            name="email"
            className={style.input}
            placeholder="enter email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            className={style.input}
            placeholder="enter password"
            onChange={handleChange}
            required
          />
        </div>
        <CustomButton style={style.btn} type ="submit" textContent="Login"/>
        </form>
        <div>
        <span>Don't have an account</span>
        <span><Link to={'/SignUp'}>SignUp</Link></span>
      </div>
        </div>
    )
}
export default Login;