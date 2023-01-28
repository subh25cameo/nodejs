var express = require('express');
var app = express();
const storage = require('node-persist');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();//this object is used to parse jason in any of our scenarios
storage.init();//initialize our storage on our device

app.post("/student", jsonParser, async (req, res) => {
    const {student_id, student_name} = req.body;//it gone go to body of the request and find student id and student name
    await storage.setItem(student_id, student_name);//await is ude to finish this particular command then set item is used to map student id and student name
    res.send("Added student!");
});

app.listen(5000, () => {
    console.log("server has started")
});