const User = require('./user.model');
const jwt=require('jsonwebtoken');
const config=require('../config');
const USER = {};

USER.getProfile = async (username) => {
    const user = await User.findOne({ username }).select("-password")
    return user;
}

USER.followUnfollow = async (id, req) => {
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, config.JWT_SECRET);
        const currentUser = await User.findById(decoded.userId);

        if (id === decoded.userId) {
            return { message: "You cannot follow/unfollow yourself" };
        }

        const isFollowing = currentUser.following.includes(id);
        if (isFollowing) {
            await User.findByIdAndUpdate(id, { $pull: { followers: decoded.userId } });
            await User.findByIdAndUpdate(decoded.userId, { $pull: { following: id } }); 
            return { message: "User UnFollowed" };
        } else {
            await User.findByIdAndUpdate(id, { $push: { followers: decoded.userId } });
            await User.findByIdAndUpdate(decoded.userId, { $push: { following: id } }); 
            return { message: "User Followed" };
        }
    } catch (err) {
        console.error("Error in follow/unfollow logic:", err);
        return { message: "Error occurred during follow/unfollow" };
    }
};


module.exports = USER;