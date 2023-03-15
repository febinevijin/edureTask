import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css'
const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    if ( !email || !password ) {
      alert("fill all field");
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        },
        config
      );
      alert("login complete");
    
      localStorage.setItem("userInfo", JSON.stringify(data));

      navigate("/");
    } catch (error) {
      console.log(error.message);
      alert(`${error.message}`);
    }
  };

   useEffect(() => {
     const userInfo = localStorage.getItem("userInfo");
     if (userInfo) {
       navigate("/");
     }
   }, []);
  return (
    <div class="container">
      <form onSubmit={submitLogin}>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login
