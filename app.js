const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routers/index.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

app.use('/', router);

app.listen((PORT), ()=>{
    console.log(`app is running at http://localhost:${PORT} CTRL+CLICK HERE to check`)
})