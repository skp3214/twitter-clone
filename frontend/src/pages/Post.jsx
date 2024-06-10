import React, { useEffect } from 'react'
import './Post.css';
import { useNavigate } from 'react-router-dom';
const Post = (props) => {
  const navigate=useNavigate();
  useEffect(() => {
    console.log(props)
  }, [])

  const handleNavigate=(username)=>{
    console.log(username)
    navigate(`/getuserprofile/${username}`)
  }

  return (
    <div className='container'>
      <div className='inner-container'>
        <p className='name'>{props.post.user_id.fullname}</p>
        <p className='name'onClick={()=>handleNavigate(props.post.user_id.username)} >@{props.post.user_id.username}</p>
      </div>
      <div className='text'>
          <p>{props.post.text}</p>
      </div>
    </div>
  )

}

export default Post