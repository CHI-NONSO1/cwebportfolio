const  express = require("express");
const {
  getMainPost, 
  getPostById,
  createPost,
  updatePost,
  deletePost,

  
  } = require("../../controllers/Posts/PostController.js");
 


 
const  postRouter = express.Router();
 
postRouter.get('/:portfolioadminid', getMainPost);
postRouter.get('/one/:postid', getPostById);
postRouter.get('/one/:category', getPostById);
postRouter.post('/', createPost);
postRouter.patch('/:postid', updatePost);
postRouter.delete('/:postid', deletePost);

 
module.exports = postRouter;
