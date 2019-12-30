'use strict'
const express = require('express');
const session = require('express-session');
const parser = require('body-parser');
const email = require('email');
const Email = email.Email;
const app = express();
const mainEmail = "tutoring@sidhututors.com";
const chiefURL = "http://localhost:3002/";
app.use(parser.json());

// root route 
app.use("/", express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/contactus/email", (req, res, error) => {
    // email route for emailing schedules
    const email = new Email({
        from: mainEmail, 
        to: req.body.to, 
        subject: req.body.subject, 
        body: req.body.body
    });
    email.send();
    if (error){
        res.send(200);
    } else {
        res.send(500);
    }
});

app.post("/contactus/queries", (req, res, error) => {
    // email route for emailing queries
    const email = new Email({
        from: mainEmail, 
        to: req.body.to, 
        subject: req.body.subject, 
        body: req.body.body
    });
    email.send();
    if (error){
        res.send(200);
    } else {
        res.send(500);
    }
});

/**********************************************/
// main redirection route
app.get("*", (req, res) => {
    res.redirect(chiefURL);
});

/**********************************************/
// port and listening process
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})