const  express = require("express");
 
const  { 
    getAllWorkExperience,
    createWorkExperience,
    getWorkExperienceById,
    updateWorkExperience,
    deleteWorkExperience,
    getWorkExperienceHome
} = require("../controllers/WorkExperienceController.js");

 
const  workExperienceRouter = express.Router();
 
workExperienceRouter.get('/:portfolioadminid', getWorkExperienceHome);
workExperienceRouter.get('/one/:workexperienceid', getWorkExperienceById);
workExperienceRouter.post('/', createWorkExperience);
workExperienceRouter.patch('/:workexperienceid', updateWorkExperience);
workExperienceRouter.delete('/:workexperienceid', deleteWorkExperience);

 
module.exports = workExperienceRouter;
