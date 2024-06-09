const postService=require('./post.service');


const createPost=(text,req)=>{
    return postService.createPost(text,req);
}

const deletePost=(id,req)=>{
    return postService.deletePost(id,req);
}

const getAllPost=()=>{
    return postService.getAllPost();
}

const updatePost=(id,text)=>{
    return postService.updatePost(id,text);
}

const getUserPost=(user_id)=>{
    return postService.getUserPost(user_id);
}

module.exports={
    createPost,
    deletePost,
    getAllPost,
    updatePost,
    getUserPost
}