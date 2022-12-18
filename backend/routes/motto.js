const  express = require("express");
 
const  { 
    getAllMottos,
    createMotto,
    getMottoById,
    updateMotto,
    deleteMotto,
    getMottoHome
} = require("../controllers/MottoController.js");

 
const  mottoRouter = express.Router();
 
mottoRouter.get('/:portfolioadminid', getMottoHome);
mottoRouter.get('/one/:mottoid', getMottoById);
mottoRouter.post('/', createMotto);
mottoRouter.patch('/:mottoid', updateMotto);
mottoRouter.delete('/:mottoid', deleteMotto);

 
module.exports = mottoRouter;
