import React, { useEffect, useState } from 'react';
import axios from "axios";
import Post from './Post';
import "./Post.css"
const GetAllPost = () => {
    const [getAllPost, setgetAllPost] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/api/post/allpost');
            setgetAllPost(response.data)

            console.log(response.data);
        }
        fetchData();
    }, [])
    return (
        <div className='allpost'>
            {
                getAllPost.map(post => (
                    <div className='post'>
                        <Post key={post._id} post={post}/>
                    </div>
                ))
            }
        </div>
    )
}

export default GetAllPost