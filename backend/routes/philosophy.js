const  express = require("express");
 
const  { 
    getAllPhilosophies,
    createPhilosophy,
    getPhilosophyById,
    updatePhilosophy,
    deletePhilosophy,
    getPhilosophyHome
} = require("../controllers/PhilosophyController.js");

 
const  philosophyRouter = express.Router();
 
philosophyRouter.get('/:portfolioadminid', getPhilosophyHome);
philosophyRouter.get('/one/:philosophyid', getPhilosophyById);
philosophyRouter.post('/', createPhilosophy);
philosophyRouter.patch('/:philosophyid', updatePhilosophy);
philosophyRouter.delete('/:philosophyid', deletePhilosophy);

 
module.exports = philosophyRouter;
