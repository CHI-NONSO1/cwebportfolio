const  express = require("express");
 
const  { 
    getAllHobbys,
    createHobby,
    getHobbyById,
    updateHobby,
    deleteHobby,
    getHobbyHome
} = require("../controllers/HobbyController.js");

 
const  hobbyRouter = express.Router();
 
hobbyRouter.get('/:portfolioadminid', getHobbyHome);
hobbyRouter.get('/one/:hobbyid', getHobbyById);
hobbyRouter.post('/', createHobby);
hobbyRouter.patch('/:hobbyid', updateHobby);
hobbyRouter.delete('/:hobbyid', deleteHobby);

 
module.exports = hobbyRouter;
