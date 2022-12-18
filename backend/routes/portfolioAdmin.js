const  express = require("express");
 
const  { 
    //getAllPortfolioAdmin,
    createPortfolioAdmin,
    getPortfolioAdminById,
    updatePortfolioAdmin,
    getPortfolioAdminLogin,
    deletePortfolioAdmin,
    portfolioAdminLogout,
    getPortfolioHomeDetail
    
} = require("../controllers/PortfolioAdminController.js");

const   verifyToken  = require( "../middleware/VerifyToken.js");
const   refreshToken  = require( "../controllers/RefreshToken.js");

 
const  portfolioAdminRouter = express.Router();

portfolioAdminRouter.post('/login', getPortfolioAdminLogin);
portfolioAdminRouter.get('/portfolioadminhome/:portfolioadminid', getPortfolioHomeDetail);
portfolioAdminRouter.get('/one/:portfolioadminid', getPortfolioAdminById);
portfolioAdminRouter.post('/', createPortfolioAdmin);
portfolioAdminRouter.patch('/:portfolioadminid', updatePortfolioAdmin);
portfolioAdminRouter.delete('/:portfolioadminid', deletePortfolioAdmin);
portfolioAdminRouter.delete('/logout', portfolioAdminLogout);
portfolioAdminRouter.get('/users', verifyToken);
portfolioAdminRouter.get('/token', refreshToken);

 
module.exports = portfolioAdminRouter;
