import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div class="container">
      <h1>Welcome to My Contacts</h1>
      <p>This is a sample welcome page.</p>
      <Link to={"/addContact"}>
        {" "}
        <button className="btn1">add Contacts</button>
      </Link>
    </div>
  );
}

export default Home
