import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

export default function Home(){
const [post, setPost] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => setPost(data));
  }
  useEffect(() => {
    fetchData();
  },[])

    return (
      <div>
       
      <div className='home'>
        <div><h1>Lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing, lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>   

        <div className='post-container'>           
          {post.map((post, index) => (
            <BlogPost post = {post} key = {index}/>
          ))}        
        </div>

      </div>
      </div>

    );
};
