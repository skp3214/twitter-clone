module.exports=app=>{

    const userController=require('./user.controller');
    const express=require('express');
    const router=express.Router();

    router.get('/profile/:username',async(req,res)=>{
        const username=req.params.username;
        const results=await userController.getProfile(username);
        res.status(200).json(results);
    })

    router.post('/follow/:id',async(req,res)=>{
        const id=req.params.id;
        const results=await userController.followUnfollow(id,req)
        res.status(200).json(results);
    })
    app.use('/api/user',router);
}