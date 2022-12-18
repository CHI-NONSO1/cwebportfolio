const  express = require("express");

const {
  getPostCommentReplies, 
  getReplyById, 
  createReply,
  updateReply,
  deleteReply

  } = require("../../controllers/Posts/ReplyController.js");

 


 
const  replyRouter = express.Router();
 
replyRouter.get('/:commentid', getPostCommentReplies);
replyRouter.get('/one/:replyid', getReplyById);
replyRouter.post('/', createReply);
replyRouter.patch('/:replyid', updateReply);
replyRouter.delete('/:replyid', deleteReply);

 
module.exports = replyRouter;
