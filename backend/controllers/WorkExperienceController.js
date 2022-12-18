const  WorkExperience = require("../models/workExperienceModel.js");
 
 async function getAllWorkExperience(req, res){
    try {
        const workExperience = await  WorkExperience.findAll();
        res.json(workExperience);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllWorkExperience = getAllWorkExperience


 async function getWorkExperienceById(req, res){
    try {
        const workExperience = await  WorkExperience.findAll({
            where: {
              workexperienceid: req.params.workexperienceid
            }
        });
        res.json(workExperience[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getWorkExperienceById = getWorkExperienceById


 async function getWorkExperienceHome(req, res){
    try {
        const workExperience = await  WorkExperience.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(workExperience);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getWorkExperienceHome = getWorkExperienceHome


 async function createWorkExperience(req, res){
    try {
        await  WorkExperience.create(req.body);
        res.json({
            "message": "WorkExperience Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createWorkExperience = createWorkExperience


 async function updateWorkExperience(req, res){
    try {
        await  WorkExperience.update(req.body, {
            where: {
              workexperienceid: req.params.workexperienceid
            }
        });
        res.json({
            "message": "WorkExperience Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateWorkExperience = updateWorkExperience


 async function deleteWorkExperience(req, res){
    try {
        await  WorkExperience.destroy({
            where: {
              workexperienceid: req.params.workexperienceid
            }
        });
        res.json({
            "message": "WorkExperience Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteWorkExperience = deleteWorkExperience