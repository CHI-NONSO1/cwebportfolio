const  PortfolioAdmin = require("../models/portfolioAdminModel.js");
const  bcrypt = require("bcrypt");
const  jwt = require("jsonwebtoken");

async function  getAllPortfolioAdmin(req, res){
    try {
        const portfolioAdmin = await  PortfolioAdmin.findAll({
            attributes:['portfolioadminid','firstname','midddlename','lastname','email','image','position']
        });
        res.json(portfolioAdmin);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllPortfolioAdmin = getAllPortfolioAdmin


async function  getPortfolioAdminLogin(req, res){
    try {
        const login = await  PortfolioAdmin.findAll({
            
            where: {
              email: req.body.email
              
            }
        });
        const match = await bcrypt.compare(req.body.password, login[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const portfolioadminId = login[0].portfolioadminid;
        const firstname = login[0].firstname;
        const email = login[0].email;
        // I removed portfolioadminId from the jwt.sign as it is blocking login 
        const accessToken = jwt.sign({firstname, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        // I removed portfolioadminId from the jwt.sign as it is blocking login 
        const refreshToken = jwt.sign({ firstname, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
            
        });

        await PortfolioAdmin.update({refresh_token: refreshToken},{
            where:{
                portfolioadminid: portfolioadminId
            }
        });
        
        res.cookie('refreshToken', refreshToken,{
           
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
            
        });
       
        res.json({ accessToken });
       
    } catch (error) {
        
        res.status(404).json({msg:"There is an error in your code!"});
        
    }  
}
module.exports.getPortfolioAdminLogin = getPortfolioAdminLogin


async function  getPortfolioHomeDetail(req, res){
    try {
        const home = await  PortfolioAdmin.findAll({
            
            where: {
              portfolioadminid: req.params.portfolioadminid
              
            }
        });
        res.json(home);
        
    } catch (error) {
        
        res.status(404).json({msg:"No User Found!"});
        
    }  
}
module.exports.getPortfolioHomeDetail = getPortfolioHomeDetail


 async function  getPortfolioAdminById(req, res){
    try {
        const portfolioAdmin = await  PortfolioAdmin.findAll({
            where: {
              portfolioadminid: req.params.portfolioadminid
            }
        });
        res.json(portfolioAdmin[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getPortfolioAdminById = getPortfolioAdminById


async function createPortfolioAdmin(req, res) {
    const { firstname, lastname, password, confirmpassword,email,image,position} = req.body;
    if(password !== confirmpassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash( password, salt);
    try {

  const [user,createdAt] =     await PortfolioAdmin.findOrCreate({
    where:{email:req.body.email},
      defaults:{
            firstname: firstname,
            lastname: lastname,
            password: hashPassword,
            email: email,
            image:image,
            position:position,
      }
        });
        res.json({msg: user});
    } catch (error) {
        console.log(error);
    }
}
module.exports.createPortfolioAdmin = createPortfolioAdmin


async function  updatePortfolioAdmin(req, res){
    try {
        await  PortfolioAdmin.update(req.body, {
            where: {
              portfolioadminid: req.body.portfolioadminid
            }
        });
        res.json({
            "message": "PortfolioAdmin Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updatePortfolioAdmin = updatePortfolioAdmin

async function  deletePortfolioAdmin(req, res){
    try {
        await  PortfolioAdmin.destroy({
            where: {
              portfolioadminid: req.params.portfolioadminid
            }
        });
        res.json({
            "message": "PortfolioAdmin Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deletePortfolioAdmin = deletePortfolioAdmin


async function  portfolioAdminLogout(req, res) {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await PortfolioAdmin.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const portfolioadminId = user[0].portfolioadminid;
    await PortfolioAdmin.update({refresh_token: null},{
        where:{
            portfolioadminid: portfolioadminId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
module.exports.portfolioAdminLogout = portfolioAdminLogout