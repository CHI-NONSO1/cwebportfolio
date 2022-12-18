const  express = require("express");
 
const  { 
    getAllReference,
    createReference,
    getReferenceById,
    updateReference,
    deleteReference,
    getReferenceHome
} = require("../controllers/ReferenceController.js");

 
const  referenceRouter = express.Router();
 
referenceRouter.get('/:portfolioadminid', getReferenceHome);
referenceRouter.get('/one/:referenceid', getReferenceById);
referenceRouter.post('/', createReference);
referenceRouter.patch('/:referenceid', updateReference);
referenceRouter.delete('/:referenceid', deleteReference);

 
module.exports = referenceRouter;
