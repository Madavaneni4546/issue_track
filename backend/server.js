const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer')
const path = require("path")
const fs = require('fs');


// const filesDir = path.join(__dirname, 'files');
// if (!fs.existsSync(filesDir)) {
//     fs.mkdirSync(filesDir);
// }
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, filesDir);
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now();
//         cb(null, uniqueSuffix + file.originalname);
//     }

// })

const queryRoutes = require('./routes/queryRoutes')

const IssueModel = require('./Model/IssueModel');
const issueController = require('./Controller/IssueController');


const StatusModel = require('./Model/StatusModel');
const statusController = require('./Controller/StatusController');
 
const mailController = require('./Controller/ContactFormController');

const app = express();
app.use(express.urlencoded({ extended: true }))
const PORT = 2000;

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/issue_tracker');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const corsOptions = {
    origin: 'http://localhost:3000', // specify your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // allow cookies to be sent
};

app.use(cors(corsOptions));

app.post('/admin/mapIssue/:issueId', statusController.mapIssue)
app.get('/admin/openStatus', statusController.showOpenStatus);
app.get('/admin/closedStatus', statusController.showClosedStatus);
app.put('/status/:issueId', statusController.updateStatus)


app.get('/api/issues', issueController.getHomeIssues);
app.get('/api/issues/:issueId', issueController.IssueEditData);
app.post('/api/issues', issueController.IssueSave);
app.put('/api/issues/:issueId', issueController.IssueEditSave);
app.delete('/api/issues/:issueId', issueController.IssueDelete);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});