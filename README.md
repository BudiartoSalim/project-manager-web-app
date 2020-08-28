# project-manager-web-app

Simple project manager web app with CRUD where staff can be assigned to multiple projects, and each project can also have multiple staffs working on it.

This app is developed using MVC pattern.

This app uses PostgreSQL for database with Sequelize ORM.
Additional modules used are Express JS and EJS view engine, also uses Discord.js module for Discord notification integration

Feature of the web app includes Discord integration where webapp user can send notification/updates to specific discord server from the web app; for example when a project is assigned to a staff, the web app will send an automated message (such as notifying what project got assigned to who) in the specified discord server and it can tag the users related to the message (like if they got assigned to a task) if the user have their Discord ID registered in the database, which can be added to DB by the person, typically the admin who will manage the project assignments, who operate the web app.

The goal of this website is to have a web interface with relational database that can assign peoples and projects to each other, and have the updates (like new project started, new people joined the team, or someone got assigned to a project) sent through Discord automatically, which can help teams or organizations that uses Discord as their communication platform. 
This will reduce the need for manual notifications sent to the team every update, as with this app, every update will be automatically sent over without needing the app or the admin to open discord at all.

Discord integration methods are done in a separate script and only being called on controllers using static methods passing info/data needed for the message, so it should be pretty modular and easy to add new methods/notification type as it is designed to be as modular and separated from the main scripts as possible.
