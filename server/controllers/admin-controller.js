const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const getAllUsers = async (req, res) =>{
    try {
        const users = wait = User.find({},{password:0});
        console.log(users);
        if(!users || users.length === 0){
            res.status(404).json({message:"No users Found"});
        }
        res.status(200).json(users);

    } catch (error) {
        next(error);
    }
};

// Get All User Login


const getAllContacts = async (req,res)=>{
    try {
        const contacts= await Contact.find();
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message:"No Contacts Found"});
        }
        return res.status(200).json(contacts);

    } catch (error) {
        next(error);
    }
}

module.exports={getAllUsers,getAllContacts};