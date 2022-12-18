const Admin = require("../models/adminModel.js");

async function  getAllAdmins (req, res) {
    try {
        const admins = await Admin.findAll();
        res.json(admins);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.getAllAdmins = getAllAdmins
 
async function  getAdminById (req, res) {
    try {
        const admin = await Admin.findAll({
            where: {
                testid: req.params.id
            }
        });
        res.json(admin[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAdminById = getAdminById
 
async function  createAdmin (req, res) {
    try {
        await Admin.create(req.body,req.file);
        res.json({
            "message": "Admin Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.createAdmin = createAdmin
 
async function  updateAdmin (req, res) {
    try {
        await Admin.update(req.body, {
            where: {
                testid: req.params.id
            }
        });
        res.json({
            "message": "Admin Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.updateAdmin = updateAdmin
 
async function  deleteAdmin (req, res) {
    try {
        await Admin.destroy({
            where: {
                testid: req.params.id
            }
        });
        res.json({
            "message": "Admin Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

module.exports.deleteAdmin = deleteAdmin
