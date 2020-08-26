# IMPORTANT
main branch = development
clone code dari branch development kalau perlu clone

TIDAK PERLU NPM INIT
TIDAK PERLU NPM INSTALL EXPRESS EJS PG DST 
-> yang perlu cuman: npm install
TANPA PARAMETER karena module yang diperlukan sudah di record di package.json,
dia otomatis install semua yang tertulis di package.json

kalau mau test pakai nodemon -> npx nodemon app.js

jangan lupa untuk bikin branch sendiri seperti biasa untuk tugas masing masing -> git checkout -b branchName
update branch agar dapat update yang sudah di apply ke branch development -> git pull origin development

untuk nge push kerjaan, push sebagai branch masing masing -> git push origin myBranchName
Untuk membuat fitur/modul/bagian yang telah dipush masuk ke development, buatlah pull request dengan melakukan compare: newbranchname
Pilih Merge pull request untuk menggabungkan fitur/modul/bagian ke development. Setelah merge, development memiliki fitur/modul/bagian yang tadi dikerjakan di branch

Jika pengerjaan sudah selesai, sudah dimerge ke development semua dan siap untuk dirilis, buatlah pull request dengan melakukan compare: development ke base: master. Setelah itu lakukan Merge pull request

source detail cara managenya:
https://github.com/julindra/pair-project-101

# project-manager-web-app

Simple project manager web app with CRUD where staff can be assigned to multiple projects, and each project can also have multiple staffs working on it.

This app development will be done using MVC Pattern and using Node.js + Express.js with ejs as the view engine for the web app views.

Feature of the web app includes Discord integration where webapp user can send notification/updates to specific discord server from the web app; for example when a project is assigned to a staff, the web app will send an automated message (such as notifying what project got assigned to who) in the specified discord server.

To achieve that, this app will also use an external module for Discord bots in Node.js called "discord.js" which also will be installed via Node Package Manager and will be one of the app dependencies for the Discord integration.

Data will be stored in Postgres database using Sequelize
