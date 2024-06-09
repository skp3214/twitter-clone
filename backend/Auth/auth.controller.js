const authService=require('./auth.service');

const saveUser=(newUser)=>{
    return authService.saveUser(newUser);
}

const loginUser=(username,password)=>{
    return authService.loginUser(username,password);
}

const logout=(res)=>{
    return authService.logout(res);
}
const getUser=(req)=>{
    return authService.getUser(req);
}

module.exports={
    saveUser,
    loginUser,
    logout,
    getUser
}