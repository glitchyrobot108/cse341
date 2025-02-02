const Contact = require("../models/contact");

async function getContacts(req, res) {
    try {
        const contacts = await Contact.find({});
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

async function getContact(req, res) {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.json(contact);
    } catch (error) {
        if (error.name === "CastError") {
            res.status(404).json({ message: "Contact not found" });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

async function createContact(req, res) {
    try {
        const contact = await Contact.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        });
        res.status(201).json(contact);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ message: error.message, errors: error.errors });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

async function updateContact(req, res) {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                favoriteColor: req.body.favoriteColor,
                birthday: req.body.birthday
            },
            { new: true }
        );
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ message: error.message, errors: error.errors });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

async function deleteContact(req, res) {
    try {
        const contact = await Contact.deleteOne({ _id: req.params.id });
        if (!contact.deletedCount) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        if (error.name === "CastError") {
            res.status(404).json({ message: "Contact not found" });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};