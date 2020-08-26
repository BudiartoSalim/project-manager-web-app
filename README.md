# project-manager-web-app

Simple project manager web app with CRUD where staff can be assigned to multiple projects, and each project can also have multiple staffs working on it.

This app development will be done using MVC Pattern and using Node.js + Express.js with ejs as the view engine for the web app views.

Feature of the web app includes Discord integration where webapp user can send notification/updates to specific discord server from the web app; for example when a project is assigned to a staff, the web app will send an automated message (such as notifying what project got assigned to who) in the specified discord server.

To achieve that, this app will also use an external module for Discord bots in Node.js called "discord.js" which also will be installed via Node Package Manager and will be one of the app dependencies for the Discord integration.

Data will be stored in Postgres database using Sequelize
