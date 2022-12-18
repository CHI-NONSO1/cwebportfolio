const  express = require("express");


const { 
  getProjectHome,
  getProjectById,
  createProject,
  updateProject,
  deleteProject

 } = require("../controllers/ProjectControllers.js");

const  projectRouter = express.Router();

projectRouter.get('/:portfolioadminid', getProjectHome);
projectRouter.get('/one/:projectid', getProjectById);
projectRouter.post('/', createProject);
projectRouter.patch('/:projectid', updateProject);
projectRouter.delete('/:projectid', deleteProject);


module.exports = projectRouter;
