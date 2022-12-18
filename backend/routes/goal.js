const  express = require("express");
 
const  { 
    getAllGoals,
    createGoal,
    getGoalById,
    updateGoal,
    deleteGoal,
    getGoalHome
} = require("../controllers/GoalController.js");
 
const goalRouter = express.Router();
 
goalRouter.get('/:portfolioadminid', getGoalHome);
goalRouter.get('/one/:goalid', getGoalById);
goalRouter.post('/', createGoal);
goalRouter.patch('/:goalid', updateGoal);
goalRouter.delete('/:goalid', deleteGoal);

 
module.exports = goalRouter;
