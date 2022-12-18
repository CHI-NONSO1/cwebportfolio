const EduQuali = require("../models/eduQualiModel.js");
 
async function  getAllEduQualis(req, res){
    try {
        const eduqualis = await  EduQuali.findAll();
        res.json(eduqualis);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllEduQualis = getAllEduQualis

async function  getEduQualiHome(req, res){
    try {
        const eduquali = await  EduQuali.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(eduquali);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getEduQualiHome = getEduQualiHome


async function  getEduQualiById(req, res){
    try {
        const eduquali = await  EduQuali.findAll({
            where: {
              eduqualid: req.params.eduqualid
            }
        });
        res.json(eduquali[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getEduQualiById = getEduQualiById


async function  createEduQuali(req, res){
    try {
        await  EduQuali.create(req.body);
        res.json({
            "message": " EduQuali Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createEduQuali = createEduQuali


async function  updateEduQuali(req, res){
    try {
        await  EduQuali.update(req.body, {
            where: {
              eduqualid: req.params.eduqualid
            }
        });
        res.json({
            "message": " EduQuali Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateEduQuali = updateEduQuali


async function  deleteEduQuali(req, res){
    try {
        await  EduQuali.destroy({
            where: {
              eduqualid: req.params.eduqualid
            }
        });
        res.json({
            "message": "EduQuali Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteEduQuali = deleteEduQuali