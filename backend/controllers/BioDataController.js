const BioData = require("../models/BioDataModel.js");
 
async function  getAllBioDatas (req, res) {
    try {
        const biodatas = await  BioData.findAll();
        res.json(biodatas);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllBioDatas = getAllBioDatas

async function  getBioDataById (req, res) {
    try {
        const biodata = await  BioData.findAll({
            where: {
                biodataid: req.params.biodataid
            }
        });
        res.json(biodata[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getBioDataById = getBioDataById


async function  getBioDataHome (req, res) {
    try {
        const biodata = await  BioData.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(biodata);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.getBioDataHome = getBioDataHome
 
async function  createBioData (req, res) {
    try {
        await  BioData.create(req.body);
        res.json({
            "message": " BioData Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createBioData = createBioData

async function  updateBioData (req, res) {
    try {
        await  BioData.update(req.body, {
            where: {
                biodataid: req.params.biodataid
            }
        });
        res.json({
            "message": " BioData Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateBioData = updateBioData
 
async function  deleteBioData (req, res) {
    try {
        await  BioData.destroy({
            where: {
                biodataid: req.params.biodataid
            }
        });
        res.json({
            "message": " BioData Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteBioData = deleteBioData