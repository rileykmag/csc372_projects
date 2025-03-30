//load express module
const express = require('express');

//create express application
const app = express();

//create variable for port number
var port = 1337;

//store path to public directory inside myNodeSite
const dir = __dirname + '/public/';

//specify css as root directory for static files
app.use(express.static('public/css'));

//specify images as root directory for static files
app.use(express.static('public/images'));

//specify js as root directory for static files
app.use(express.static('public/js'));

//specify data as root directory for static files
app.use(express.static('public/data'));

//begin serving each web page
//route to homepage (index.html)
app.get('/', function(request, response){
    response.sendFile(dir + 'index.html');
});

//route to index page (index.html)
app.get('/index', function(request, response){
    response.sendFile(dir + 'index.html');
});

//route to about page (about.html)
app.get('/about', function(request, response){
    response.sendFile(dir + 'about.html');
});

//route to contact page (contact.html)
app.get('/contact', function(request, response){
    response.sendFile(dir + 'contact.html');
});

//route to exec page (exec.html)
app.get('/exec', function(request, response){
    response.sendFile(dir + 'exec.html');
});

//route to event page (events.html)
app.get('/events', function(request, response){
    response.sendFile(dir + 'events.html');
});

//route to wildcard page (send to 404.html)
app.get('/*', function(request, response){
    response.sendFile(dir + '404.html');
});


//make the app listen on port 1337
app.listen(port, function(){
    console.log('Listening on http://localhost:' + port);
});