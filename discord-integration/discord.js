'use strict';
const Discord = require('discord.js');
const config = require('../config/discord-webhook-config.json');
const hook = new Discord.WebhookClient(config.webhook_id, config.webhook_token);

//cara tag: <@discordid>
//untuk dapat discordId: setting discord applicationmu ke developer mode, klik kanan user bisa copy ID

//untuk setting channel dari server mana bot akan mengirim pesan:
//server settings -> integrations -> webhook
//biasanya perlu administration atau webhooks permission role baru bisa generate webhook token
//webhooknya nanti berupa link yang terdiri dari 2 bagian dipisah / yaitu webhookid dan webhooktoken
//masukkan webhookid dan webhooktoken di config/discord-webhook-config.json

class DiscordBot{
    static sendMessage(messageStr){
        hook.send(messageStr);
       // hook.send(`ini dikirim dari ${messageStr}`);
    }

    static sendNewProjectCreated(projectObj){
        hook.send(`New Project **${projectObj.name}** with priority: **${projectObj.priority}** has been created! `)
    }

    static sendNewStaffAdded(staffObj){
        if (staffObj.last_name.length < 1){
            staffObj.last_name = "";
        }
        if (staffObj.first_name.length < 1){
            staffObj.first_name = "";
        }
        hook.send(`New Staff **${staffObj.first_name} ${staffObj.last_name}** has joined the team! Welcome!`)        
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
        msg+= `The project **${project_name}** just got assigned to **${first_name} ${last_name}**`
        hook.send(msg);
    }

    static sendProjectUpdateMessage(projectObj){
        let status;
        if (projectObj.isCompleted){
            status = "Completed"
        } else {
            status = "In Progress"
        }
        hook.send(`***======================================\nProject with ID # ${projectObj.id} Update***\nName: **${projectObj.name}\n**Status: **${status}**\nPriority: **${projectObj.priority}\n======================================**`);
    }

}

module.exports = DiscordBot;