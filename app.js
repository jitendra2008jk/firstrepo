 const path =require('path');
 const express = require('express');


// importing module 
const  userrouter =require("./routers/userrouter");
const hostrouter = require("./routers/hostrouter");
const rootDir = require("./utils/pathutils");

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

// Middleware to parse form data
app.use(express.urlencoded());

app.use(userrouter);
app.use(hostrouter);
// adding 404 page
// app.use((req,res,next)=>{
//      res.status(404).sendFile(path.join(__dirname,'./','views','error.html'));
// });
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','error.html'));
});


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
