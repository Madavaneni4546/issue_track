const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, unique: true },
    userEmail: { type: String, required: true },
    userName: { type: String, required: true,unique:true},
    userPassword: { type: String, required: true},
    userIssueIds:[{ type: String }] ,
    role:{ type: String }
   
});

const User = mongoose.model('User', userSchema);

module.exports = User;
