import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import Users from './components/Users';
import BlogDetail from './components/BlogDetails';
import UserDetail from './components/UserDetails';
import Search from './components/Search';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';


function App() {



  // const blogReq= () => {fetch(postApi)
  // .then((response) => {
  //   (response.json)
  //   return 
  // })};

  // const userReq= () => {fetch(userApi)
  // .then((response) => {
  //   console.log(response)
  //   return 
  // })}
  return (
  <>

   <div className='App'> 
    <Router>
  <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
    </Router>
    </div>
  </>

  );
}

export default App;
