import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogPost({post}) {
  return (
    <Link to = {'/details/post.id'} className='blog-post-link'>
    <div className='blog-post'>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
    </Link>
  )
}



