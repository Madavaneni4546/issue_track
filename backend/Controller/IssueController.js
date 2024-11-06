const issueModel = require('../Model/IssueModel');
const statusModel = require('../Model/StatusModel');
const { v4: uuidv4 } = require('uuid');
const MappingModel = require('../Model/MappingModel');
const EmployeeModel = require('../Model/EmployeeModel');
const Organization = require('../Model/OrganizationModel')
const Service = require('../Model/ServiceModel')
const UserModel = require('../Model/UserModel')


async function getHomeIssues(req, res) {
    try {
        const issues = await issueModel.find();
        res.status(200).json(issues);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server failed to fetch issues");
    }
}

async function getIssue(req, res) {
    try {
        const { issueId } = req.params;
        const issue = await issueModel.findOne({ issueId: issueId });
        if (!issue) {
            // res.send(`Issue with ID: ${issueId} not found`);
            console.log(`Issue with ID: ${issueId} not found`)
            res.send()
        } else {
            res.status(200).json(issue);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching the issue");
    }
}

async function IssueDelete(req, res) {
    try {
        const { issueId } = req.params;
        const issue = await issueModel.deleteOne({ issueId: issueId });
        if (issue.deletedCount == 0) {
            res.status(404).send(`Issue with ID: ${issueId} not found`);
        } else {
            await Organization.updateOne(
                { issues: issueId },
                { $pull: { issues: issueId } }
            );
            res.status(200).json({ message: `Issue with ID : ${issueId} deleted successfully` });
        }
        await MappingModel.deleteOne({ issueId: issueId })
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting the issue");
    }
}



async function IssueSave(req, res) {
    try {
        // const { imageUrl, issueName, issueDesc, createdOn, createdBy, connectedBy, status ,issueOrgId, issueServiceId } = req.body;
        const { issueName, issueDesc, createdBy, status, issueOrgId, issueServiceId } = req.body;
        const file = req.file;

        // Generate a unique statusId
        const statusId = 3000 + (await statusModel.countDocuments()) + 1;

        // Find an employee with less than 4 tasks
        if(file)
            console.log("In issue save ", req.body, file.filename)
        const employee = await EmployeeModel.findOne({ taskCount: { $lt: 2 }, empOrgId: issueOrgId, empServiceId: issueServiceId });
        if (!employee) {
            return res.status(400).send('No available employee with less than 10 tasks');
        }
        console.log("In issue save employee ", employee)

        // Create a new issue document
        let newIssueId = (7000 + await issueModel.countDocuments()) * 8 + 1;
        //modified in complete branch
        if (issueModel.findOne({ newIssueId })) {
            newIssueId = (7000 + await issueModel.countDocuments()) * 16 + 1
        } 
        const fileName = file ? file.filename: "";
        const issue = await issueModel.create({
            issueId: newIssueId,
            // imageUrl:"",
            issueName,
            issueDesc,
            createdOn: new Date().toISOString().slice(0, 10),
            createdBy,
            connectedTo: employee.empId,
            status: 'notopened',
            issueStatusId: statusId,
            issueOrgId: issueOrgId,
            issueServiceId: issueServiceId,
            issueFileName: fileName
        });
        console.log("In issue save new issue ", issue)
        let user = await UserModel.findOne({ userId: createdBy });
        if (!user) {
            user = await UserModel.create({
                userId: createdBy,
                userName: 'Unknown3',
                userPassword: 'password3',
                userEmail: 'unknown@example.com3',
                userIssueIds: [],
            });
        }


        user.userIssueIds.push(issue.issueId);
        await user.save();
        console.log("In issue save user ", user)


        const organization = await Organization.findOne({ orgId: issueOrgId });
        if (organization) {
            organization.orgIssueId.push(newIssueId);
            await organization.save();

        }
        console.log("In issue save org ", organization)
        const service = await Service.findOne({ sId: issueServiceId });
        if (service) {
            service.sIssueIds.push(newIssueId);
            await service.save();

        }
        console.log("In issue save service", service)
        await statusModel.create({
            issueId: newIssueId,
            statusId,
            status
        });


        await EmployeeModel.updateOne(
            { empId: employee.empId },
            { $push: { empIssueId: newIssueId }, $inc: { taskCount: 1 } }
        );
        // console.log("In issue save service",service)

        res.status(201).json(issue);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while creating the issue');
    }
}




async function IssueEditSave(req, res) {
    try {
        const { issueId } = req.params;
        // const { status } = req.body;
        // const { status , issueDesc } = req.body;

        // if (status && status !== 'open' && status !== 'closed') {
        //     return res.status(400).send('Status must be either "open" or "closed"');
        // }

        const updatedIssue = await issueModel.findOneAndUpdate(
            { issueId: issueId },
            req.body,
            { new: true }
        );
        if (!updatedIssue) {
            res.status(404).send(`Issue with ID: ${issueId} not found`);
        } else {
            res.status(200).json(updatedIssue);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating the issue");
    }
}

async function getUserIssues(req, res) {

    try {
        const { createdBy } = req.params;
        const issues = await issueModel.find({ createdBy });
        res.status(200).json(issues);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server failed to fetch issues");
    }

}
async function getEmployeeIssues(req, res) {

    try {
        const { connectedTo } = req.params;
        const issues = await issueModel.find({ connectedTo });
        // console.log(issues);
        res.status(200).json(issues);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server failed to fetch issues");
    }

}
module.exports = {
    getHomeIssues,
    getIssue,
    IssueDelete,
    IssueSave,
    IssueEditSave,
    getUserIssues,
    getEmployeeIssues
};
