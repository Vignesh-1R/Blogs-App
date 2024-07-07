
import React from 'react';
// import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../App.css';

function Home ()  {
  return (
    <>
    <div id='homeSection'>
   <h1>Welcome to Blogs Application</h1>
    <ul>

    </ul>

      <div>
        <h1>Blog App</h1>
        <ul id='homeList'>
          <li>
            <Link to="/blogs">View List Of Blogs</Link>
          </li>
          <li>
            <Link to="/users">View List Of Users</Link>
          </li>
        </ul>
        </div>
        </div>
    </>
  );
};

export default Home;
