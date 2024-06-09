const userDao=require('./user.dao');

const getProfile=(username)=>{
    return userDao.getProfile(username);
}

const followUnfollow=(id,req)=>{
    return userDao.followUnfollow(id,req);
}

module.exports={
    getProfile,
    followUnfollow
}