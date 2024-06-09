const jwt=require('jsonwebtoken');
const config=require('../config');
const generateToken=(userId)=>{
    const token=jwt.sign({userId},config.JWT_SECRET);
    return token;
}

module.exports=generateToken;