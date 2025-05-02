const path = require('path');
const express = require('express');
const userrouter = express.Router();
//imporing rootdirectory
const rootDir=require("../utils/pathutils");

// userrouter.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname,'../','views','home.html'));
// });
userrouter.get("/", (req, res) => {
    res.sendFile(path.join(rootDir,'views','home.html'));
});
module.exports = userrouter;