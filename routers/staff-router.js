const express = require('express');
const router = express.Router();
const StaffController = require('../controllers/staff-controller');
const ProjectStaffController = require('../controllers/projectstaff-controller.js');

router.get('/', StaffController.showStaffListGetHandler)
router.get('/add', StaffController.addStaffGetHandler)
router.post('/add', StaffController.addStaffPostHandler)
router.get('/edit/:staffId', StaffController.editStaffGetHandler)
router.post('/edit/:staffId', StaffController.editStaffPostHandler)
router.get('/delete/:staffId', StaffController.deleteStaffGetHandler)

//below are from projectstaffcontroller
router.get('/status/:staffId', ProjectStaffController.showStaffProjectsGetHandler)

module.exports = router;