var express  = require('express');
var path = require('path');
var members = require('./Members');
var app = express();

/*
app.get('/',(req,res)=>
{
    //res.send('<h1>Hello World!!!</h1>');
     res.sendFile(path.join(_dirname,'public','index.html'));
});
*/

var  logger = (req,res,next)=>
{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

// Init middleware
app.use(logger);

app.get('/api/members',(req,res)=>
{
    res.json(members);  
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
//app.listen(port,()=>console.log('Server started on port '+port));
app.listen(port,()=>console.log(`Server started on port ${port}`));