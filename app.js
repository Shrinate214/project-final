const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
const port = 3000;
const path= require("path");
app.get("/",(req,res)=>
{
res.render("home");
});
app.get("/education",(req,res)=>
{
res.render("education");
});
app.get("/experience",(req,res)=>
{
res.render("experience");
});
app.get("/resume",(req,res)=>
{
res.render("resume");
});
app.post("/compose",(req,res)=>
{
var newpost="";
newpost=req.body.newData;
console.log(newpost);
});
app.listen(port, function()  {
    console.log(`Weather app listening on port 3000`);
  });
  