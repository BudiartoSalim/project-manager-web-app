const express = require('express');
const router = express.Router();

const ProjectController = require('../controllers/project-controller.js');

router.get('/', ProjectController.showProjectListGetHandler)
router.get('/add', ProjectController.addProjectGetHandler)
router.post('/add', ProjectController.addProjectPostHandler)
router.get('/edit/:projectId', ProjectController.editProjectGetHandler)
router.post('/edit/:projectId', ProjectController.editProjectPostHandler)
router.get('/delete/:projectId', ProjectController.deleteProjectGetHandler)

router.get('/assign-staff/:projectId', ProjectController.assignStaffGetHandler)
router.post('/assign-staff/:projectId', ProjectController.assignStaffPostHandler)


module.exports = router;