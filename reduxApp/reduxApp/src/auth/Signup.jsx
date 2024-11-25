import React, { useState } from "react";
import style from "../styles/SignUp.module.css";
import CustomButton from "../reusable/customButton";
import { Link, useNavigate } from "react-router-dom";

//hookes
const SignUp = () => {
  const navigate = useNavigate();
  const userDetails = {
    username: "",
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
    
    
  };
  const handleSubmit = ()=>{
    console.log("submitted ......");
   
      window.alert("submitted sucessfully");
      navigate("/Login")

    
  }

  console.log(data)

 
    
    
  

 

  return (
    
   
    <div className="myForm">
      <form action="" onSubmit={handleSubmit} >
    
      
      
        <div>
          <input
            type="text"
            name="username"
            className={style.input}
            placeholder="enter username"
            onChange={handleChange}
            required
          />
        </div>
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
        <CustomButton style={style.btn} type ="submit" textContent="SignUp"/>
      </form>
      <div>
        <p>Already have an account</p>
        <span className="signup-link"><Link to={'/Login'}>login</Link></span>
      </div>
    </div>
  );
};
export default SignUp;
//we use use state that takes in an object, which is the intail state , it also takes in another function and return an array
// the data in the useState place data is the state of the field
