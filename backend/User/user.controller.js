const userService=require('./user.service');

const getProfile=(username)=>{
    return userService.getProfile(username)
}

const followUnfollow=(id,req)=>{
    return userService.followUnfollow(id,req);
}

module.exports={
    getProfile,
    followUnfollow
}