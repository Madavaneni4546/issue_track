const mongoose = require('mongoose');
const Service = require('../Model/ServiceModel');
const Organization = require('../Model/OrganizationModel');
const mongoURI = 'mongodb://localhost:27017/issue_tracker';

async function addService(req, res) {
    try {
        // const documentCount = await Service.countDocuments();
        // const sid =200+documentCount+1;
        const { sId, sEmail, sName, sPhno, sOrgId, sEmpIds, sIssueIds, sDescription, } = req.body;
        let service = await Service.findOne({ sId });
        if (!service) {
            service = await Service.create({  //added attributes
                sId,
                sEmail,
                sName,
                sPhno,
                sOrgId,
                sEmpIds,
                sIssueIds,
                sDescription,
            });
            const organizations = await Organization.find();
            for (const organization of organizations) {
                if (sOrgId === organization.orgId) {
                    organization.serviceIds.push(service.sId);
                    await organization.save();
                    break;
                }
            }
        }


        //await organizations.save();
        console.log("service created",service);
        res.status(201).json(service);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while creating service');
    }
}

async function getServices(req, res) {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server failed to fetch services");
    }
}
async function getService(req, res) {
    try {
        const { sId } = req.params;
        const service = await Service.findOne({ sId });
        if (!service) {
            res.status(404).send(`Service with ID: ${sId} not found`);
        } else {
            res.status(200).json(service);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error finding the service");
    }
}

async function deleteService(req, res) {
    try {
        const { sId } = req.params;
        const service = await Service.deleteOne({ sId });
        if (service.deletedCount === 0) {
            res.status(404).send(`Service with ID: ${sId} not found`);
        } else {
            res.status(200).json({ message: `Service with ID: ${sId} deleted successfully` });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting the service");
    }
}

async function editService(req, res) {
    try {
        const { sId } = req.params;
        const updatedService = await Service.findOneAndUpdate(
            { sId },
            req.body,
            { new: true }
        );
        if (!updatedService) {
            res.status(404).send(`Service with ID: ${sId} not found`);
        } else {
            res.status(200).json(updatedService);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating the service");
    }
}

module.exports = {
    addService,
    getServices,
    deleteService,
    editService,
    getService
};
