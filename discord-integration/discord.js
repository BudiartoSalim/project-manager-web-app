'use strict';
const Discord = require('discord.js');
const config = require('../config/discord-webhook-config.json');
const hook = new Discord.WebhookClient(config.webhook_id, config.webhook_token);

//cara tag: <@discordid>
class DiscordBot{
    static sendMessage(messageStr){
        hook.send(messageStr);
        //console.log(`<@180714078338023425>`)
       // hook.send(`ini dikirim dari ${messageStr}`);
    }

    static sendProjectUpdateToDiscordId(discordId, projectName){
        hook.send(`<@${discordId}> just got assigned to work on project: ${projectName}`);
    }

    static sendProjectAssignedTo(discordId, first_name, last_name, project_name){
        let msg = "";
        if (discordId){
            msg+=`<@${discordId}> `;
        }
        if (last_name.length < 1){
            last_name = "";
        }
        if (first_name.length < 1){
            first_name = "";
        }
        msg+= `Project ${project_name} just got assigned to ${first_name} ${last_name}`
        hook.send(msg);
    }

    static sendProjectUpdateToName(staffname, projectName){
        hook.send(`${staffname} just got assigned to work on project: ${projectName}`);
    }

    static sendUnfinishedProjectList(projectObjArr){
        let message = `List of ongoing projects: \n`
        projectObjArr.forEach(elem=>{
            message += `- ${elem.name} \n`
        })
        hook.send(message)
    }

    
}

module.exports = DiscordBot;