const Goal = require("../models/goalModel.js");
 
async function   getAllGoals(req, res){
    try {
        const goals = await Goal.findAll();
        res.json(goals);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllGoals = getAllGoals
 
async function   getGoalById(req, res){
    try {
        const goal = await Goal.findAll({
            where: {
                goalid: req.params.goalid
            }
        });
        res.json(goal[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getGoalById = getGoalById


async function   getGoalHome(req, res){
    try {
        const goal = await Goal.findAll({
            where: {
                portfolioid: req.params.portfolioadminid
            }
        });
        res.json(goal);
    } catch (error) {
        res.json({ message: error.message });
    }  

}
module.exports.getGoalHome = getGoalHome


async function   createGoal(req, res){
    try {
        await Goal.create(req.body);
        res.json({
            "message": "Goal Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createGoal = createGoal


async function   updateGoal(req, res){
    try {
        await Goal.update(req.body, {
            where: {
                goalid: req.params.goalid
            }
        });
        res.json({
            "message": "Goal Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateGoal = updateGoal


async function   deleteGoal(req, res){
    try {
        await Goal.destroy({
            where: {
                goalid: req.params.goalid
            }
        });
        res.json({
            "message": "Goal Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteGoal = deleteGoal