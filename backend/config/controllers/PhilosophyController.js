const Philosophy =  require("../models/philosophyModel.js");
 
async function getAllPhilosophies(req, res){
    try {
        const philosophies = await  Philosophy.findAll();
        res.json(philosophies);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllPhilosophies = getAllPhilosophies


 async function getPhilosophyById(req, res){
    try {
        const philosophy = await  Philosophy.findAll({
            where: {
              philosophyid: req.params.philosophyid
            }
        });
        res.json(philosophy[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getPhilosophyById = getPhilosophyById


async function getPhilosophyHome(req, res){
    try {
        const philosophy = await  Philosophy.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(philosophy);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getPhilosophyHome = getPhilosophyHome


async function  createPhilosophy(req, res){
    try {
        await  Philosophy.create(req.body);
        res.json({
            "message": "Philosophy Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createPhilosophy = createPhilosophy


async function  updatePhilosophy(req, res){
    try {
        await  Philosophy.update(req.body, {
            where: {
              philosophyid: req.params.philosophyid
            }
        });
        res.json({
            "message": "Philosophy Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updatePhilosophy = updatePhilosophy


async function  deletePhilosophy(req, res){
    try {
        await  Philosophy.destroy({
            where: {
              philosophyid: req.params.philosophyid
            }
        });
        res.json({
            "message": "Philosophy Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deletePhilosophy = deletePhilosophy