const Contact = require("../models/contactModel.js");
 
async function  getAllContacts(req, res){
    try {
        const contacts = await Contact.findAll();
        res.json(contacts);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.getAllContacts = getAllContacts

async function  createContact(req, res){
    try {
        await Contact.create(req.body);
        res.json({
            "message": "Contact Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.createContact = createContact
 
async function  deleteContact(req, res){
    try {
        await Contact.destroy({
            where: {
                nexicontactid: req.params.id
            }
        });
        res.json({
            "message": "Contact Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
module.exports.deleteContact = deleteContact