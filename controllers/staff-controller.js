const { Project, Staff, ProjectStaff} = require('../models/index.js')

class StaffController{
    static showStaffListGetHandler(req, res){
        Staff.findAll({order: ['id']})
        .then((dataStaff) => {
            res.render('staff-list', {dataStaff});
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static addStaffGetHandler(req, res){
        res.render('add-staff')
    }

    static addStaffPostHandler(req, res){
        let dataBody = {
            first_name: req.body.first_name,
            last_name: req.body.last,
            position: req.body.position,
            email: req.body.email
        }
        Staff.create(dataBody)
        .then(dataBody => {
            res.redirect('/staffs')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editStaffGetHandler(req, res){
        Staff.findOne({
            where: {
                id: req.params.staffId
            }
        })
        .then ( (data) => {
            res.render('staff-edit',{ data });
        })
        .catch( (err) => {
            res.send(err)
        })
    }

    static editStaffPostHandler(req, res){
        Staff.update({
            first_name: req.body.first_name,
            last_name: req.body.last,
            position: req.body.position,
            email: req.body.email
        },{where: {id: req.params.staffId}})
        .then(data => {
            res.redirect('/staffs')
        })
        .catch (err => {
            res.send (err);
        })
    }

    static deleteStaffGetHandler(req, res){
        Movie.destroy({
            where: {id: req.params.staffId}
          })
          .then(data=>{
              res.redirect('/staffs')
          })
          .catch(err=>{
              res.send(err)
          });
    }

}

module.exports = StaffController