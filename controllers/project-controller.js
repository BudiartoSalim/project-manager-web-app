const { Project, Staff, ProjectStaff} = require('../models/index.js');
const DiscordBot = require('../discord-integration/discord.js');

class ProjectController{

    static showProjectListGetHandler(req, res){
        Project.findAll({order: ['id']})
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
            DiscordBot.sendNewProjectCreated(data)
            res.redirect('/projects');
        })
        .catch(err=>{
            res.send(err);
        })
    }

    static editProjectGetHandler(req, res){
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
        dataInput.id = req.params.projectId;
        
        Project.update({
        name: dataInput.name,
        priority: dataInput.priority,
        isCompleted: dataInput.isCompleted
        }, {where: {id: req.params.projectId}})
        .then(data=>{
            DiscordBot.sendProjectUpdateMessage(dataInput);
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

    static getStaffListHandler(req, res){
        Project.findOne({where:{id:req.params.projectId},
            include: [{model: Staff}]})
        .then(data=>{
            res.redirect('/projects');
        })
        .catch(err=>{
            res.send(err);
        })
    }

    static assignStaffGetHandler(req, res){
        let dataStaff;
        Staff.findAll({order: ['id']})
        .then((data) => {
            dataStaff = data;
            return Project.findByPk(req.params.projectId, {include: Staff})
        })
        .then((dataProject)=>{
            dataStaff = dataStaff.filter((elem)=>{
                let isSame = false;
                for (let i = 0; i < dataProject.Staffs.length; i++){
                    if (dataProject.Staffs[i].id === elem.id){
                        isSame = true;
                    }
                }
                if (isSame === false){
                    return elem;
                }
            })
            let dataCombined = {
                dataProject: dataProject,
                dataStaff: dataStaff
            }
            res.render('assign-staff', {dataCombined: dataCombined});
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static assignStaffPostHandler(req, res){
        let staff_id = Number(req.body.staffId)
        ProjectStaff.create({
            StaffId: staff_id,
            ProjectId: req.params.projectId
        })
        .then(dat=>{
            return Staff.findByPk(dat.StaffId, {include: Project})
        })
        .then(data=>{
            let projectName;
            for (let i = 0; i < data.Projects.length; i++){
                if (data.Projects[i].id === Number(req.params.projectId)){
                    projectName = data.Projects[i].name;
                    break;
                }
            }
            DiscordBot.sendProjectAssignedTo(data.discordId, data.first_name, data.last_name, projectName)
            res.redirect('/projects')
        })
        .catch(err=>{
            res.send(err)
        })
    }
} 

module.exports = ProjectController;