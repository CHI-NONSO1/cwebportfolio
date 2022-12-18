const  express = require("express");
 
const  { 
    getAllBioDatas,
    createBioData,
    getBioDataById,
    updateBioData,
    deleteBioData,
    getBioDataHome
} = require("../controllers/BioDataController.js");
 
const  bioDataRouter = express.Router();
 
bioDataRouter.get('/:portfolioadminid', getBioDataHome);
bioDataRouter.get('/one/:biodataid', getBioDataById);
bioDataRouter.post('/', createBioData);
bioDataRouter.patch('/:biodataid', updateBioData);
bioDataRouter.delete('/:biodataid', deleteBioData);

 
module.exports = bioDataRouter;
