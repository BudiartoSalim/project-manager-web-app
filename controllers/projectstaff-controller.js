const { Project, Staff, ProjectStaff} = require('../models/index.js');

class ProjectStaffController{
    static showProjectStatusGetHandler(req, res){
        Project.findByPk(req.params.projectId, {include: Staff}) 
        .then(data=>{
            res.render("project-status", {data: data})
        })       
    }
}

module.exports = ProjectStaffController