const  Motto = require("../models/mottoModel.js");
 
async function getAllMottos(req, res){
    try {
        const mottos = await  Motto.findAll();
        res.json(mottos);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllMottos = getAllMottos

 
async function getMottoById(req, res){
    try {
        const motto = await  Motto.findAll({
            where: {
              mottoid: req.params.mottoid
            }
        });
        res.json(motto[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getMottoById = getMottoById


async function getMottoHome(req, res){
    try {
        const motto = await  Motto.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(motto);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getMottoHome = getMottoHome


 async function  createMotto(req, res){
    try {
        await  Motto.create(req.body);
        res.json({
            "message": "Motto Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createMotto = createMotto


 async function  updateMotto(req, res){
    try {
        await  Motto.update(req.body, {
            where: {
              mottoid: req.params.mottoid
            }
        });
        res.json({
            "message": "Motto Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateMotto = updateMotto


 async function  deleteMotto(req, res){
    try {
        await  Motto.destroy({
            where: {
              mottoid: req.params.mottoid
            }
        });
        res.json({
            "message": "Motto Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteMotto = deleteMotto