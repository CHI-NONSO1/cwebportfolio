const  express = require("express");


const {
  getSkillHome, 
  getSkillById, 
  createSkill,
  updateSkill,
  deleteSkill
  
  } = require("../controllers/SkillsControllers.js");

const  skillRouter = express.Router();

skillRouter.get('/:portfolioadminid', getSkillHome);
skillRouter.get('/one/:skillid', getSkillById);
skillRouter.post('/', createSkill);
skillRouter.patch('/:skillid', updateSkill);
skillRouter.delete('/:skillid', deleteSkill);


module.exports = skillRouter;
