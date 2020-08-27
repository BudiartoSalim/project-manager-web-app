const { Project, Staff, ProjectStaff} = require('../models/index.js');
const DiscordBot = require('../discord-integration/discord.js');

class ProjectController{

    static showProjectListGetHandler(req, res){
        Project.findAll()
        .then(dataProject=>{
            res.render('project-list', {dataProject: dataProject})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static addProjectGetHandler(req, res){
        res.render('add-project')
    //    rest.render('add-project', {})
    }

    static addProjectPostHandler(req, res){
        Project.create({
            name: req.body.project_name,
            priority: req.body.priority,
            isCompleted: false
        })
        .then(data=>{
            res.redirect('/projects');
        })
        .catch(err=>{
            res.send(err);
        })
    }

    static editProjectGetHandler(req, res){
        //belum dites, perlu views edit 

        Project.findByPk(req.params.projectId, {})
        .then(data=>{
            res.render('project-edit', {data:data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editProjectPostHandler(req, res){
        let dataInput = req.body;
        if (dataInput.status){
            dataInput.isCompleted = true;
        } else {
            dataInput.isCompleted = false;
        }

        Project.update({
        name: dataInput.name,
        priority: dataInput.priority,
        isCompleted: dataInput.isCompleted
        }, {where: {id: req.params.projectId}})
        .then(data=>{
            res.redirect('/projects');
        })
        .catch(err=>{
            res.send(err);
        })
    }

    static deleteProjectGetHandler(req, res){
        Project.destroy({where:{id: req.params.projectId}})
        .then(dat=>{
            res.redirect('/projects');
        })
        .catch(err=>{
            res.send(err);
        })
    }

    static assignStaffGetHandler(req, res){
        Staff.findAll({include: Project})
        .then(data=>{
            //console.log(data.toJSON())
        })
        .catch(err=>{

        })
    }

    static assignStaffPostHandler(req, res){

    }
}

module.exports = ProjectController;