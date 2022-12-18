const  express = require("express");
 
const  { 
    getAllContacts,
    createContact,
    deleteContact
} = require("../controllers/Contact.js");
 
const contactRouter = express.Router();
 
contactRouter.get('/', getAllContacts);
contactRouter.post('/', createContact);
contactRouter.delete('/:id', deleteContact);
 
module.exports =  contactRouter;