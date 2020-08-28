const { Project, Staff, ProjectStaff} = require('../models/index.js');

class ProjectStaffController{
    static showProjectStatusGetHandler(req, res){
        Project.findByPk(req.params.projectId, {include: Staff}) 
        .then(data=>{
            res.render("project-status", {data: data})
        })
        .catch(err=>{
            res.send(err)
        })       
    }

    static showStaffProjectsGetHandler(req, res){
        Staff.findByPk(req.params.staffId, {include: Project}) 
        .then(data=>{
            res.render("staff-status", {data: data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = ProjectStaffController