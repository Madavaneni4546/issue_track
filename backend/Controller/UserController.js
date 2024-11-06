const UserModel = require('../Model/UserModel');

async function getAllUsers(req, res) {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while fetching users');
    }
}

module.exports = {
    getAllUsers
}