import React, { useEffect, useState } from "react";
import "./Register.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !phone) {
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
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          phone,
          password,
        },
        config
      );
      alert("register complete");
      localStorage.setItem("userInfo", JSON.stringify(data));

      navigate("/contactList");
    } catch (error) {
      console.log(error.message);
    }
  };
   useEffect(() => {
     const userInfo = localStorage.getItem("userInfo");

     if (userInfo) {
       navigate("/");
     }
   }, [navigate]);

  return (
    <div>
      <div class="container">
        <form onSubmit={submitLogin}>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />

          <label for="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label for="Phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
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
    </div>
  );
};

export default Register;
