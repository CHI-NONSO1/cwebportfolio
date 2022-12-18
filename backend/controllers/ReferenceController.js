const Reference = require("../models/referenceModel.js");

 async function  getAllReference(req, res){
    try {
        const reference = await  Reference.findAll();
        res.json(reference);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllReference = getAllReference


async function getReferenceById(req, res){
    try {
        const reference = await  Reference.findAll({
            where: {
              referenceid: req.params.referenceid
            }
        });
        res.json(reference[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getReferenceById = getReferenceById


async function getReferenceHome(req, res){
    try {
        const reference = await  Reference.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(reference);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getReferenceHome = getReferenceHome


 async function  createReference(req, res){
    try {
        await  Reference.create(req.body);
        res.json({
            "message": "Reference Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createReference = createReference


 async function  updateReference(req, res){
    try {
        await  Reference.update(req.body, {
            where: {
              referenceid: req.params.referenceid
            }
        });
        res.json({
            "message": "Reference Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateReference = updateReference


 async function  deleteReference(req, res){
    try {
        await  Reference.destroy({
            where: {
              referenceid: req.params.referenceid
            }
        });
        res.json({
            "message": "Reference Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteReference = deleteReference