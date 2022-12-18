const express = require("express");

const { 
    getAllAdmins,
    createAdmin,
    getAdminById,
    updateAdmin,
    deleteAdmin,
} = require("../controllers/Admin.js");

const adminRouter = express.Router();

adminRouter.get('/', getAllAdmins);
adminRouter.get('/:id', getAdminById);
adminRouter.post('/', createAdmin);
adminRouter.patch('/:id', updateAdmin);
adminRouter.delete('/:id', deleteAdmin);


module.exports = adminRouter;
