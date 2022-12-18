const Reply = require("../../models/Post/ReplyModel.js");

async function getAllReply(req, res){
    try {
        const replies = await  Reply.findAll();
        res.json(replies);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllReply = getAllReply

async function getPostCommentReplies(req, res){
    try {
        const reply = await  Reply.findAll({
            where: {
                commentid: req.params.commentid
            }
        });
        res.json(reply);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getPostCommentReplies = getPostCommentReplies

async function getReplyById(req, res){
    try {
        const reply = await  Reply.findAll({
            where: {
              replyid: req.params.replyid
            }
        });
        res.json(reply[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getReplyById = getReplyById

 async function  createReply(req, res){
    try {
        await  Reply.create(req.body);
        res.json({
            "message": "Reply Sent"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createReply = createReply


 async function  updateReply(req, res){
    try {
        await  Reply.update(req.body, {
            where: {
              replyid: req.params.replyid
            }
        });
        res.json({
            "message": "Reply Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateReply = updateReply


 async function  deleteReply(req, res){
    try {
        await  Reply.destroy({
            where: {
              replyid: req.params.replyid
            }
        });
        res.json({
            "message": "Reply Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteReply = deleteReply