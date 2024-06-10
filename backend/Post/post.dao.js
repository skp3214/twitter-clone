const Post = require('./post.model');
const jwt = require('jsonwebtoken');
const config = require('../config');
const POST = {};

POST.create = async (text, req) => {
    const token = req.cookies.token;

    if (token) {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        const post = new Post({
            user_id: decoded.userId,
            text: text
        })

        const savedPost = await post.save();
        return savedPost;
    }
    else {
        return { messaage: "please login first." }
    }
}

POST.delete = async (id, req) => {
    try {
        const token = req.cookies.token;
        if (token) {
            const decoded = jwt.verify(token, config.JWT_SECRET);
            const post = await Post.findById(id);
            if (!post) {
                return { message: "No post found" }
            }
            if (post.user_id !== decoded.userId) {
                const deletedPost = await Post.findByIdAndDelete(id);
                if (deletedPost) {
                    return { message: "Post deleted successfully" };
                }
                else {
                    return {message:"You are not authorized"}
                }
            };
        }
    }
    catch (err) {
        return { message: "error during deleting" }
    }

}

POST.allPost = async () => {
    try {
        const post = await Post.find()
            .sort({ createdAt: -1 })
            .populate({
                path: "user_id",
                select: "-password"
            });
        return post;
    }
    catch (err) {
        return { message: err }
    }
}

POST.update = (id, text) => {
    try {
        const updatedPost = Post.findByIdAndUpdate(id, { text }, { new: true })
        if (!updatedPost) {
            return { message: "Post not found" }
        }
        else {
            return updatedPost;
        }
    } catch (error) {
        return { message: error }
    }


}

POST.getPost = async (user_id) => {
    const userAllPost = await Post.find({ user_id })
        .sort({ createdAt: -1 })
        .populate({
            path: "user_id",
            select: "-password"
        });
    return userAllPost;
}

module.exports = POST;