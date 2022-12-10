const express = require("express");

function handleAllRequests (requestObject, responseObject) {
    console.log("server is ready");
    const url = requestObject.url;
     responseObject.setHeader("content-type", "text/html");
         
     responseObject.write("<h1>Page not found<h1>");
            
     responseObject.end();
};
const handleHomeRequest = (req, res) =>{
    res.send("Welcome to the homepage");
}
const handleLoginRequest = (req, res) =>{
    res.send("Welcome to the loginpage");
}
const handleSignupRequest = (req, res) =>{
    res.send("Welcome to the signuppage");
}
const handleProfileRequest = (req, res) =>{
    res.send("Welcome to the profile page");
}

const server = express();

server.use('/login', handleLoginRequest);
server.use('/signup', handleSignupRequest);
server.use('/profile', handleProfileRequest);
server.use('/', handleHomeRequest);

server.use(handleAllRequests);

server.listen(3000, 'localhost', ()=> console.log("server is ready to accept request"));
