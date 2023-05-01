import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './components/About';
import Home from './components/Home';
import NewBlog from './components/NewBlog';


function App() { 
  return (
  <>
  <Navbar/>
  <div className='container'>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/home" element = {<Home/>}/>
      <Route path="/newblog" element = {<NewBlog/>}/>  
      <Route path="/about" element = {<About/>}/> 
    </Routes>
   </div>
   </>)  
}

export default App;
