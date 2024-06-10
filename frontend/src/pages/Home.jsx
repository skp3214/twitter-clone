import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate();
  const handleNavigate=(path)=>{
    navigate(path);
  }
  return (
    <div>
      <div>
        <h1>Welocome To X</h1>
        <button onClick={()=>handleNavigate('/signup')}>Create Account</button>
        <button onClick={()=>handleNavigate('/login')}>Login</button>
      </div>
    </div>
  )
}

export default Home