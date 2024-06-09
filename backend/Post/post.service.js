const postDAO = require('./post.dao');

const createPost=(text,req)=>{
    return postDAO.create(text,req);
}

const deletePost=(id,req)=>{
    return postDAO.delete(id,req);
}

const getAllPost=()=>{
    return postDAO.allPost();
}

const updatePost=(id,text)=>{
    return postDAO.update(id,text);
}

const getUserPost=(user_id)=>{
    return postDAO.getPost(user_id);
}

module.exports={
    createPost,
    deletePost,
    getAllPost,
    updatePost,
    getUserPost
}