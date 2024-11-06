const user = require('../Model/OrganizationModel');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'abhishek@12';
const { hashPassword, comparePassword } = require('../helpers/auth');

const test = (req, res) => {
    res.json("working");
};

// 
const registerUser = async (req, res) => {
    try {
        const { orgId, orgName, orgEmail, orgPassword, role } = req.body;

        if (!orgId) {
            return res.json({
                error:"orgId is required"
            })
        }
        if (!orgName) {
            return res.json({
                error:"orgName is required"
            })
        }
        if (!orgPassword || orgPassword.length < 6) {
            return res.json({
                error:"Password is required and should be at least 6 characters long"
            })
        }
        
        const existingUser = await user.findOne({ orgEmail });
        if (existingUser) {
            return res.json({
                error:"Email already exists"
            })
        }

        const hashedPassword = await hashPassword(orgPassword);
        const newUser = await user.create({
            orgId,
            orgName,
            orgEmail,
            orgPassword: hashedPassword,
            role: role || 'user'
        });

        const token = jwt.sign({ orgEmail, orgId, role: newUser.role }, SECRET_KEY, { expiresIn: '1h' });
        return res.status(201).json({
            success: true,
            user: newUser,
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};
const loginUser = async (req, res) => {
    try {
        const { orgEmail, orgPassword } = req.body;

        const User = await user.findOne({ orgEmail });
        if (!User) {
            return res.status(400).json({ error: "User not found" });
        }

        const match = await comparePassword(orgPassword, User.orgPassword);
        if (!match) {
            return res.status(400).json({ error: "Password is incorrect" });
        }

        const token = jwt.sign({ orgEmail, orgId: User.orgId, role: User.role }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({
            success: true,
            user: User,
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};


module.exports = { test, registerUser, loginUser };
