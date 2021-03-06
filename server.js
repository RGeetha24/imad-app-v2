var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
  host: 'db.imad.hasura-app.io',
  user: 'rgeetha24',
  password: process.env.DB_PASS,
  database: 'rgeetha24',
  port:'5432'
};



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool(config)
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM test',function(err,result){
   if(err){
       res.status(500).send(err.toString());
   }else{
       res.send(JSON.string(fy(result)));
   }
   });
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/page1',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
});
app.get('/test-db',function(req,res){
    
});
app.get('/page2',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'page2.html'));
});
app.get('/page3',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'page3.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
//JSON JAVASCRIPT OBJECT NOTATION
var names=[];
app.get('/submit-name', function (req, res) {
var name=req.query.name;
names.push(name);
res.send(JSON.stringify(names));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
