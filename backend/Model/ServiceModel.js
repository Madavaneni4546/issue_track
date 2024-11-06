const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    sId: { type: String, required: true },
    sEmail: { type: String },
    sName: { type: String },
    sPhno: { type: String },
    sOrgId: { type: String, required: true },
    sEmpIds: [{ type: String }],
    sIssueIds: [{ type: String }] ,
    sDescription: { type: String } //added
});

const ServicesModel = mongoose.model('Services', servicesSchema);

module.exports = ServicesModel;
