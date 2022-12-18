const  express = require("express");


const { 
  getLetterHome, 
  getLetterById,
  createLetter,
  updateLetter,
  deleteLetter

 } = require("../controllers/LetterControllers.js");

const  letterRouter = express.Router();

letterRouter.get('/:portfolioadminid', getLetterHome);
letterRouter.get('/one/:coverletterid', getLetterById);
letterRouter.post('/', createLetter);
letterRouter.patch('/:coverletterid', updateLetter);
letterRouter.delete('/:coverletterid', deleteLetter);


module.exports = letterRouter;
