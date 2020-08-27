const express = require('express');
const router = express.Router();
const ProjectRouter = require('./project-router.js');
const StaffRouter = require('./staff-router.js');
const { Project, Staff, ProjectStaff,Admin} = require('../models')

// const harusLogin = (req,res,next) => {
//     res.redirect('/login');
//     next();
// }

router.get('/', (req, res)=>{
    if(req.session.isLoggedIn === true){
        res.render('home-session',{
            username: req.session.username
        });
    }else{
        res.redirect('/login');
    }
})
router.get('/login', (req,res) => {
    if(req.query.err){
        res.render('login',{
            errorLogin: true
        })
    }else {
        res.render('login',{
            errorLogin: false
        })
    }
})
router.post('/login',(req,res) => {
    let userName = req.body.admin_username;
    let userPassword = req.body.password;
    Admin.findOne({
        where: {
            admin_username: userName,
            password: userPassword
        }
    })
    .then(data => {
        if(data === null){
            res.redirect('/login?err=true');
        }
        else{
            req.session.isLoggedIn = true;
            req.session.username = data.admin_username;

            res.redirect('/');
        }
    });
});
router.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err){
            res.send(err);
        }else {
            res.redirect('/login');
        }
    });
});

router.use('/projects', ProjectRouter);
router.use('/staffs', StaffRouter);

module.exports = router;