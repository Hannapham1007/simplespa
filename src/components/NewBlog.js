import React, { useState } from 'react';

export default function NewBlog(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handlePublish(event){
    event.preventDefault();
    if(title.length > 60){
      alert('Title is too long');
      return;
    }
    fetch('https://jsonplaceholder.typicode.com/guide/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: description,
        userId: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('New blog post created:', data);
        setTitle('');
        setDescription('');
      })
      .catch(error => {
        console.error('Error creating new blog post:', error);
        
      });
    

  }
    return(
    <div className='form-container'>
      <form onSubmit={handlePublish}>
        <div><h2>Add a new blog</h2></div>
        <div>
          <label>Title:</label>
          <textarea type='text' name='title' placeholder='Write your title...' value={title} onChange={(event) => setTitle(event.target.value) }></textarea> <br/>
        </div>
        <div>
          <label>Description:</label>
          <textarea rows='10' name='description' placeholder='Write your description...' value={description} onChange={(event) => setDescription(event.target.value)}></textarea> <br/>
        </div>
        <button className='btn' >Publish</button>
      </form>
    </div>
)}


