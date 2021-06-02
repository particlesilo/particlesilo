import React, { useState, useEffect, useRef } from 'react';

function TopicsForm(props){
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
  inputRef.current.focus();
  });

  const handleChange = e => {
   setInput(e.target.value);
 };

 const handleSubmit = e => {
   e.preventDefault();

   props.onSubmit({
     id: Math.floor(Math.random() * 10000),
     text: input
   });
   setInput('');
 };

 return (
    <form onSubmit={handleSubmit} className='topics-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a topic'
            value={input}
            onChange={handleChange}
            name='text'
            className='topics-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='topics-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );

}