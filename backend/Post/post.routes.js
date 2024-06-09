module.exports = app => {

    const express = require('express');
    const router = express.Router();
    const postController = require('./post.controller');

    router.post('/create', async (req, res) => {
        const text = req.body.text;
        const result = await postController.createPost(text, req);
        res.status(200).json(result);
    })

    router.delete('/:id', async (req, res) => {
        const id = req.params.id;
        const result = await postController.deletePost(id, req);
        res.status(200).json(result);
    })

    router.get('/allpost',async(req,res)=>{
        const result=await postController.getAllPost();
        res.status(200).json(result);
    })

    router.put('/:id',async(req,res)=>{
        const updatedText=req.body.text;
        const postId=req.params.id;
        const result=await postController.updatePost(postId,updatedText);
        res.status(200).json(result);
    })

    router.get('/user/:id',async(req,res)=>{
        const user_id=req.params.id;
        const result=await postController.getUserPost(user_id);
        res.status(200).json(result);
    })

    app.use('/api/post', router)
}