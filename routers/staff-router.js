const express = require('express');
const router = express.Router();
const StaffController = require('../controllers/staff-controller');

router.get('/', StaffController.showStaffListGetHandler)
router.get('/add', StaffController.addStaffGetHandler)
router.post('/add', StaffController.addStaffPostHandler)
router.get('/edit/:staffId', StaffController.editStaffGetHandler)
router.post('/edit/:staffId', StaffController.editStaffPostHandler)
router.get('/delete/:staffId', StaffController.deleteStaffGetHandler)
module.exports = router;