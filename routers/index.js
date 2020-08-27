const express = require('express');
const router = express.Router();
const ProjectRouter = require('./project-router.js');
const StaffRouter = require('./staff-router.js');

router.get('/', (req, res)=>{
    res.send(`ini homepage`);
})
router.use('/projects', ProjectRouter);
router.use('/staffs', StaffRouter);

module.exports = router;