const Posts = require("../../models/Post/PostModel.js");

async function getAllPosts(req, res){
    try {
        const posts = await  Posts.findAll();
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllPosts = getAllPosts

async function getMainPost(req, res){
    try {
        const post = await  Posts.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(post);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getMainPost = getMainPost

async function getPostById(req, res){
    try {
        const post = await  Posts.findAll({
            where: {
              postid: req.params.postid
            }
        });
        res.json(post[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getPostById = getPostById

async function getPostByCategory(req, res){
    try {
        const post = await  Posts.findAll({
            where: {
              category: req.params.category
            }
        });
        res.json(post[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getPostByCategory = getPostByCategory

 async function  createPost(req, res){
    try {
        await  Posts.create(req.body);
        res.json({
            "message": "Posts Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createPost = createPost


 async function  updatePost(req, res){
    try {
        await  Posts.update(req.body, {
            where: {
              postid: req.params.postid
            }
        });
        res.json({
            "message": "Posts Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updatePost = updatePost


 async function  deletePost(req, res){
    try {
        await  Posts.destroy({
            where: {
              postid: req.params.postid
            }
        });
        res.json({
            "message": "Posts Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deletePost = deletePost