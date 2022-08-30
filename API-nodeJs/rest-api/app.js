const { response } = require('express');
const express = require('express');
//app executes express as a function
const app = express();

//incoming requests has to go through app.use and to whatever we pass to it
app.use((req, res, next)=> {
    res.status(200).json({
        message: "It works!"
    });  // we send 200 if everything is ok

});

module.exports = app;