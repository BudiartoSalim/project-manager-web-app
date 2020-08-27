const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/project-controller.js');
const ProjectStaffController = require('../controllers/projectstaff-controller');

router.get('/', ProjectController.showProjectListGetHandler)
router.get('/add', ProjectController.addProjectGetHandler)
router.post('/add', ProjectController.addProjectPostHandler)
router.get('/edit/:projectId', ProjectController.editProjectGetHandler)
router.post('/edit/:projectId', ProjectController.editProjectPostHandler)
router.get('/delete/:projectId', ProjectController.deleteProjectGetHandler)
router.get('/assign-staff/:projectId', ProjectController.assignStaffGetHandler)
router.post('/assign-staff/:projectId', ProjectController.assignStaffPostHandler)

//below uses projectstaff-controller.js
router.get('/status/:projectId',ProjectStaffController.showProjectStatusGetHandler)


module.exports = router;