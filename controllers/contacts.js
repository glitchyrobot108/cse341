const Contact = require("../models/contact")

async function getContacts(req, res){
        const contacts = await Contact.find({})
        res.json(contacts)
};
 
async function getContact(req, res){
        const contact = await Contact.find({_id:req.params.id})
        res.json(contact)
};

async function createContact(req, res){
        const contact = await Contact.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                favoriteColor: req.body.favoriteColor,
                birthday: req.body.birthday
        })
        res.status(201).send(contact)
}
    
async function updateContact(req, res){
        const contact = await Contact.findByIdAndUpdate({_id: req.params.id}, {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                favoriteColor: req.body.favoriteColor,
                birthday: req.body.birthday
        }, { new: true })
        res.status(204).json(contact)
}

async function deleteContact(req, res){
        const contact = await Contact.deleteOne({_id: req.params.id})
        res.status(200).json(contact)
}

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}