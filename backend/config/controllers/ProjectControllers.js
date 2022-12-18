const Project = require("../models/projectModels.js");
 
async function  getAllProjests(req, res){
    try {
        const project = await  Project.findAll();
        res.json(project);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllProjests = getAllProjests

async function  getProjectHome(req, res){
    try {
        const proj = await  Project.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(proj);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getProjectHome = getProjectHome


async function  getProjectById(req, res){
    try {
        const proj = await  Project.findAll({
            where: {
              projectid: req.params.projectid
            }
        });
        res.json(proj[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getProjectById = getProjectById


async function  createProject(req, res){
    try {
        await  Project.create(req.body);
        res.json({
            "message": " Project Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createProject = createProject


async function  updateProject(req, res){
    try {
        await  Project.update(req.body, {
            where: {
              projectid: req.params.projectid
            }
        });
        res.json({
            "message": " Project Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateProject = updateProject


async function  deleteProject(req, res){
    try {
        await  Project.destroy({
            where: {
              projectid: req.params.projectid
            }
        });
        res.json({
            "message": "Project Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteProject = deleteProject