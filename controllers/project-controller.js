const { Project, Staff, ProjectStaff} = require('../models/index.js');
const DiscordBot = require('../discord-integration/discord.js');

class ProjectController{

    static showProjectListGetHandler(req, res){
        Project.findAll()
        .then(dataProject=>{
           // res.render('viewName', {dataProject: dataProject})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static addProjectGetHandler(req, res){
        res.send('ini nanti halaman input buat add')
    //    rest.render('add-project', {})
    }

    static addProjectPostHandler(req, res){
        Project.create({
            name: req.body.name,
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
            console.log(data.toJSON())
            res.redirect('/projects')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editProjectPostHandler(req, res){
        Project.update({
            name: req.body.name,
            priority: req.body.priority,
            isCompleted: req.body.isCompleted
        })
        .then(data=>{
            res.redirect('/projects');
        })
        .catch(err=>{
            res.send(err);
        })
    }

    static deleteProjectGetHandler(req, res){
        Project.destroy({where:{id: req.params.projectId}})
    }
}

module.exports = ProjectController;