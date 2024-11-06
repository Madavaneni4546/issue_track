const user = require('../Model/UserModel')
const {hashPassword , comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'abhishek@12';
const registeruser = async (req , res)=>{
    try {
        const {userId , userEmail , userName , userPassword } = req.body;
        console.log(userId , userEmail , userName , userPassword )
        if(!userId){
            return res.json({
                error:"userID is required"
            })
        }
        if(!userName){
            return res.json({
                error:"userName is required"
            })
        }
        if(!userPassword || userPassword.length < 6){
            return res.json({
                error:"password is required and should be atleast 6 characters long"
            })
        }
        if(!userName){
            return res.json({
                error:"userName is required"
            })
        }
        const exist  = await user.findOne({userEmail});
        if(exist){
            return res.json({
                error:"email already exist"
            })
        }
        const hashedpassword = await hashPassword(userPassword)
        const newUser = await user.create({
            userId , userName , userEmail , userPassword:hashedpassword
        }) 
        const token = jwt.sign({ userEmail, userId }, SECRET_KEY, { expiresIn: '1h' });
        return res.status(201).json({
            success: true,
            user: newUser,
            token
        });
    }catch (error) {
        console.log(error);
    }
}

const loginuser = async (req , res)=>{
    try {
        const {userEmail , userPassword} = req.body;
        const User = await user.findOne({userEmail});
        if(!User){
            return res.json({
                error:"user not found"
            })
        }
        const match = await comparePassword(userPassword , User.userPassword) 
        if(!match){
            return res.json({
                error:"password is incorrect"
            })
        }  
        const token = jwt.sign({ userEmail, userId: User.userId }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({
            success: true,
            user: User,
            token
        });
    } catch (error) {
        console.log(error)
    }
}
module.exports= {registeruser , loginuser}