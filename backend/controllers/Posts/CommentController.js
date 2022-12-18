const Comments = require("../../models/Post/CommentModel.js");

async function getAllComments(req, res){
    try {
        const comments = await  Comments.findAll();
        res.json(comments);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllComments = getAllComments

async function getPostComment(req, res){
    try {
        const comment = await  Comments.findAll({
            where: {
                postid: req.params.postid
            }
        });
        res.json(comment);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getPostComment = getPostComment

async function getCommentById(req, res){
    try {
        const comment = await  Comments.findAll({
            where: {
              commentid: req.params.commentid
            }
        });
        res.json(comment[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getCommentById = getCommentById



 async function  createComment(req, res){
    const {name,comment,image,postid,video,email} = req.body;
    try {
        const [user,createdAt] =     await Comments.findOrCreate({
            where:{comment:req.body.comment},
              defaults:{
                    name: name,
                    comment:comment,
                    image: image,
                    postid: postid,
                    video:video,
                    email:email
            }
            });
        res.json({msg: user});
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createComment = createComment




 async function  updateComment(req, res){
    try {
        await  Comments.update(req.body, {
            where: {
              commentid: req.params.commentid
            }
        });
        res.json({
            "message": "Comments Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateComment = updateComment


 async function  deleteComment(req, res){
    try {
        await  Comments.destroy({
            where: {
              commentid: req.params.commentid
            }
        });
        res.json({
            "message": "Comments Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteComment = deleteComment
