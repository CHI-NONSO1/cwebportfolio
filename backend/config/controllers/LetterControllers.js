const  Letter = require("../models/LetterModel.js");
 
async function getAllLetters(req, res){
    try {
        const letters = await  Letter.findAll();
        res.json(letters);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllLetters = getAllLetters

async function getLetterHome(req, res){
    try {
        const letter = await  Letter.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(letter);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getLetterHome = getLetterHome

async function getLetterById(req, res){
    try {
        const letter = await  Letter.findAll({
            where: {
              coverletterid: req.params.coverletterid
            }
        });
        res.json(letter[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getLetterById = getLetterById

 async function  createLetter(req, res){
    try {
     const letter =    await  Letter.create(req.body);
        res.json(letter);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createLetter = createLetter


 async function  updateLetter(req, res){
    try {
    const letter =   await  Letter.update(req.body, {
            where: {
              coverletterid: req.params.coverletterid
            }
        });
        if(letter){
            const leta = await  Letter.findAll({
                where: {
                  coverletterid: req.params.coverletterid
                }
            });
            res.json(leta[0]);
        }
       
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateLetter = updateLetter


 async function  deleteLetter(req, res){
    try {
        await  Letter.destroy({
            where: {
              coverletterid: req.params.coverletterid
            }
        });
        res.json({
            "message": "Letter Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteLetter = deleteLetter