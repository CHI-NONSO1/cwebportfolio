const  Skills = require("../models/SkillsModel.js");
 
async function getAllSkills(req, res){
    try {
        const skills = await  Skills.findAll();
        res.json(skills);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllSkills = getAllSkills

async function getSkillHome(req, res){
    try {
        const skill = await  Skills.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(skill);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getSkillHome = getSkillHome

async function getSkillById(req, res){
    try {
        const skill = await  Skills.findAll({
            where: {
              skillid: req.params.skillid
            }
        });
        res.json(skill[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getSkillById = getSkillById

 async function  createSkill(req, res){
    try {
        await  Skills.create(req.body);
        res.json({
            "message": "Skills Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createSkill = createSkill


 async function  updateSkill(req, res){
    try {
        await  Skills.update(req.body, {
            where: {
              skillid: req.params.skillid
            }
        });
        res.json({
            "message": "Skills Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateSkill = updateSkill


 async function  deleteSkill(req, res){
    try {
        await  Skills.destroy({
            where: {
              skillid: req.params.skillid
            }
        });
        res.json({
            "message": "Skills Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteSkill = deleteSkill