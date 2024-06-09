const User=require('../User/user.model');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('../config');
const saveUser=async(newUser)=>{
    try{
        const user=new User({
            fullname:newUser.fullname,
            username:newUser.username,
            email:newUser.email,
            password:newUser.password
        })
        const savedUser=await user.save();
        return savedUser;
    }
    catch(err){
        console.log("error at service layer",err)
    }
}

const loginUser = async (username, password) => {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error("Invalid username or password");
        }
        
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new Error("Invalid username or password");
        }
        
        return user;
    } catch (err) {
        console.log("Error in login", err);
        throw err;
    }
};

const logout=(res)=>{
    res.cookie("token","");
    return {message:"logged out successfully"};
}

const getUser= async(req)=>{
    const token=req.cookies.token;
    const decoded=jwt.verify(token,config.JWT_SECRET);
    const user=await User.findById(decoded.userId);
    return user;
}

module.exports={
saveUser,
loginUser,
logout,
getUser
}