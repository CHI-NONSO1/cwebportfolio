const  express = require("express");

const  { 
    getAllEduQualis,
    createEduQuali,
    getEduQualiById,
    updateEduQuali,
    deleteEduQuali,
    getEduQualiHome
} = require("../controllers/EduQualiController.js");

const  eduQualiRouter = express.Router();

eduQualiRouter.get('/:portfolioadminid', getEduQualiHome);
eduQualiRouter.get('/one/:eduqualid', getEduQualiById);
eduQualiRouter.post('/', createEduQuali);
eduQualiRouter.patch('/:eduqualid', updateEduQuali);
eduQualiRouter.delete('/:eduqualid', deleteEduQuali);


module.exports = eduQualiRouter;
