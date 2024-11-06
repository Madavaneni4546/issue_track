// const user = require('../Model/EmployeeModel')
// const {hashPassword , comparePassword} = require('../helpers/auth')
// const jwt = require('jsonwebtoken');
// const SECRET_KEY = 'abhishek@12'
// const registerDev = async (req , res)=>{
//     try {
//         const {empId , empName , empEmail , empPassword ,empPhno , empServiceId , empOrgId } = req.body;
//         console.log(empId , empName , empEmail , empPassword ,empPhno , empServiceId , empOrgId )
//         if(!empId){
//             return res.json({
//                 error:"empID is required"
//             })
//         }
//         if(!empName){
//             return res.json({
//                 error:"EmpName is required"
//             })
//         }
//         if(!empPassword || empPassword.length < 6){
//             return res.json({
//                 error:"password is required and should be atleast 6 characters long"
//             })
//         }
//         if(!empPhno){
//             return res.json({
//                 error:"EmpPhn is required"
//             })
//         }
//         if(!empName){
//             return res.json({
//                 error:"EmpName is required"
//             })
//         }if(!empServiceId){
//             return res.json({
//                 error:"EmpServicesId is required"
//             })
//         }
//         const exist  = await user.findOne({empEmail});
//         if(exist){
//             return res.json({
//                 error:"email already exist"
//             })
//         }
//         const hashedpassword = await hashPassword(empPassword)
//         const User = await user.create({
//             empId , empName , empEmail , empPassword ,empPhno , empServiceId ,empOrgId
//         }) 
//         const token = jwt.sign({empId , empEmail} , SECRET_KEY , {expiresIn :'1hr'})
//         res.json({
//             success:true,
//             user:User,
//             token
//         })
//         // return res.json(User)
//     }catch (error) {
//         console.log(error);
//     }
// }

// const loginDev = async (req , res)=>{
//     try {
//         const {empEmail , empPassword} = req.body;
//         const User = await user.findOne({empEmail});
//         if(!User){
//             return res.json({
//                 error:"user not found"
//             })
//         }
//         const match = await comparePassword(empPassword , User.empPassword) 
//         if(!match){
//             return res.json({
//                 error:"password is incorrect"
//             })
//         }  
//         const token = jwt.sign({empId : User.empId , empEmail : User.empEmail} , SECRET_KEY , {expiresIn :'1h'})
//         res.json({
//             success:true,
//             user:User,
//             token
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }
// module.exports= {registerDev , loginDev}


const user = require('../Model/EmployeeModel')
// const {hashPassword , comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'abhishek@12'
const registerDev = async (req , res)=>{
    try {
        const {empId , empName , empEmail , empPassword ,empPhno , empServiceId , empOrgId } = req.body;
        console.log(empId , empName , empEmail , empPassword ,empPhno , empServiceId , empOrgId )
        if(!empId){
            return res.json({
                error:"empID is required"
            })
        }
        if(!empName){
            return res.json({
                error:"EmpName is required"
            })
        }
        if(!empPassword || empPassword.length < 6){
            return res.json({
                error:"password is required and should be atleast 6 characters long"
            })
        }
        if(!empPhno){
            return res.json({
                error:"EmpPhn is required"
            })
        }
        if(!empName){
            return res.json({
                error:"EmpName is required"
            })
        }if(!empServiceId){
            return res.json({
                error:"EmpServicesId is required"
            })
        }
        const exist  = await user.findOne({empEmail});
        if(exist){
            return res.json({
                error:"email already exist"
            })
        }
        const hashedpassword = await hashPassword(empPassword)
        const User = await user.create({
            empId , empName , empEmail , empPassword ,empPhno , empServiceId ,empOrgId
        }) 
        const token = jwt.sign({empId , empEmail} , SECRET_KEY , {expiresIn :'1hr'})
        res.json({
            success:true,
            user:User,
            token
        })
        // return res.json(User)
    }catch (error) {
        console.log(error);
    }
}

const loginDev = async (req , res)=>{
    try {
        const {empEmail , empPassword} = req.body;
        const User = await user.findOne({empEmail});
        if(!User){
            return res.json({
                error:"user not found"
            })
        }
        if(!empPassword){
            return res.json({
                error:"Enter password"
            })
        }
        // const match = await comparePassword(empPassword , User.empPassword) 
        if(empPassword != User.empPassword){
            return res.json({
                error:"password is incorrect"
            })
        }  
        const token = jwt.sign({empId : User.empId , empEmail : User.empEmail} , SECRET_KEY , {expiresIn :'1h'})
        res.json({
            success:true,
            user:User,
            token
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports= {registerDev , loginDev}