var express  = require('express');
var path = require('path');
var app = express();
app.get('/',(req,res)=>
{
    res.send('<h1>Hello World!!!</h1>');
});
app.get('/v1/query',(req,res)=>
{
    res.send('<h1>Query Service Started</h1>');
});
app.get('/v1/catalog',(req,res)=>
{
    res.send('<h1>Catalog Service</h1>');
});
var port = 5000;
app.listen(port,()=>console.log('Server started on port '+port));
