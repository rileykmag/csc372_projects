//load express
var express = require('express');

//load application
var app = express();

//set port number
var port = 1337;

//handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//store path to public
const dir = __dirname + '/public';

//specify css as root directory
app.use(express.static('public/css'));

//specify images as root directory
app.use(express.static('public/images'));

//specify js as root directory
app.use(express.static('public/js'));

//specify data as root directory
app.use(express.static('public/data'));

//render each template
//go through each route
//default login
app.get('/', function(request,response){
    response.render('index', { title: 'Society for Women in Computing' });
});

//index page
app.get('/index', function(request,response){
    response.render('index', { title: 'Society for Women in Computing' });
});

//about page
app.get('/about', function(request,response){
    response.render('about', { title: 'About: Society for Women in Computing' });
});

//contact page
app.get('/contact', function(request,response){
    response.render('contact', { title: 'Contact: Society for Women in Computing' });
});

//exec page
app.get('/exec', function(request,response){
    response.render('exec', { title: 'Exec: Society for Women in Computing' });
});

//event page
app.get('/events', function(request,response){
    response.render('events', { title: 'Events: Society for Women in Computing' });
});

//400 page
app.use(function(request,response){
    response.status(404);
    response.render('404', { title: 'Page not found!' });
});

//500 page
app.use(function(err, request, response, next){
    console.error(err.stack);
    response.status(500);
    response.render('500');
});

//make the app listen on the port
app.listen(port, function(){
    console.log('Listening on http://localhost:' + port);
});
