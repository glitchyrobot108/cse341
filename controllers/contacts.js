const Contact = require("../models/contact")

async function getContacts(req, res){
        const contacts = await Contact.find({})
        res.json(contacts)
};
 
async function getContact(req, res){
        const contact = await Contact.find({_id:req.params.id})
        res.json(contact)
};

module.exports = {
    getContacts,
    getContact
}