const  express = require("express");
const { 
  getPostComment, 
  getCommentById, 
  createComment,
  updateComment,
  deleteComment

} = require("../../controllers/Posts/CommentController.js");

 


 
const  commentRouter = express.Router();
 
commentRouter.get('/:postid', getPostComment);
commentRouter.get('/one/:commentid', getCommentById);
commentRouter.post('/', createComment);
commentRouter.patch('/:commentid', updateComment);
commentRouter.delete('/:commentid', deleteComment);

 
module.exports = commentRouter;
