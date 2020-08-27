const express = require('express');
const router = express.Router();

const ProjectController = require('../controllers/project-controller');

router.get('/', ProjectController.showStaffListGetHandler)
router.get('/add', ProjectController.addStaffGetHandler)
router.post('/add', ProjectController.addStaffPostHandler)
router.get('/edit/:staffId', ProjectController.editStaffGetHandler)
router.post('/edit/:staffId', ProjectController.editStaffPostHandler)


module.exports = router;