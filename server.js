var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile')
var search_res = require("./search_res.js");
app.use(express.static(__dirname + "/html"));

// to support JSON-encoded bodies
app.use(bodyParser.json());
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

var file = 'data.json'
app.post("/formlogin", function(req, res) {
    console.log(req.body);
    jsonfile.writeFile(file, req.body, function(err) {
        console.error(err)
    })
});


app.get("/getdata", function(req, res) {
    console.log(req.body);
    search_res.readfile(res);
});

app.listen(3000);
console.log("Server is running on port 3000");
