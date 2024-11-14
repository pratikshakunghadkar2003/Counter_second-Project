import React, { useEffect, useState } from 'react'

export default function Test1() {
    const[content,setContent]=useState('posts')
    useEffect(()=>{
      console.log('componentDidUpdate')
    })
    useEffect(()=>{
      console.log('componentDidMount')
    })
  return (
    <div>
      <button onClick={()=>setContent('posts')}>Postes</button>
      <button onClick={()=>setContent('users')}>Users</button>
      <button onClick={()=>setContent('comments')}>Comments</button>
    <h1>{content}</h1>

    </div>
  )
}
