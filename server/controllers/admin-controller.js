const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 }).exec();
        if (!users || users.length === 0) {
            res.status(404).json({ message: "No users Found" });
        } else {
            res.status(200).json(users);
        }
    } catch (error) {
        next(error);
    }
};
// Get All User Login


const getAllContacts = async (req,res,next)=>{
    try {
        const contacts= await Contact.find();
        if(!contacts || contacts.length === 0){
            res.status(404).json({message:"No Contacts Found"});
        }
        res.status(200).json(contacts);

    } catch (error) {
        next(error);
    }
}

module.exports={getAllUsers,getAllContacts};