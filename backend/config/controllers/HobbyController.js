const  Hobby = require("../models/hobbyModel.js");
 
async function getAllHobbys(req, res){
    try {
        const hobbys = await  Hobby.findAll();
        res.json(hobbys);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllHobbys = getAllHobbys

async function getHobbyHome(req, res){
    try {
        const hobby = await  Hobby.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(hobby);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getHobbyHome = getHobbyHome

async function getHobbyById(req, res){
    try {
        const hobby = await  Hobby.findAll({
            where: {
              hobbyid: req.params.hobbyid
            }
        });
        res.json(hobby[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getHobbyById = getHobbyById

 async function  createHobby(req, res){
    try {
        await  Hobby.create(req.body);
        res.json({
            "message": "Hobby Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createHobby = createHobby


 async function  updateHobby(req, res){
    try {
        await  Hobby.update(req.body, {
            where: {
              hobbyid: req.params.hobbyid
            }
        });
        res.json({
            "message": "Hobby Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateHobby = updateHobby


 async function  deleteHobby(req, res){
    try {
        await  Hobby.destroy({
            where: {
              hobbyid: req.params.hobbyid
            }
        });
        res.json({
            "message": "Hobby Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteHobby = deleteHobby