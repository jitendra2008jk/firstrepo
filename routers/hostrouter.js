
const path = require('path');
const express = require('express');
const hostrouter= express.Router();
//serving html file
hostrouter.get("/add-home", (req, res) => {
    res.sendFile(path.join(__dirname,'../','views','form.html'));
});

hostrouter.post("/add-home", (req, res) => {
    console.log(req.body); // Now this will correctly show the form data
    res.send(`
        <h1>Registered successfully</h1>
        <a href="/">Go to home</a>
    `);
});
module.exports=hostrouter;
