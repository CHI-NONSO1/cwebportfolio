const  jwt = require("jsonwebtoken");
const  PortfolioAdmin = require("../models/portfolioAdminModel.js");
 
module.exports = async function  refreshToken(req, res){
    try {
        
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await PortfolioAdmin.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = user[0].portfolioadminid;
            const name = user[0].firstname;
            const lastname = user[0].lastname;
            const image = user[0].image;
            const email = user[0].email;
            const address = user[0].address;
            const accessToken = jwt.sign({userId, name,lastname,image,email,address}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}
