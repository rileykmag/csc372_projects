//load http
var http = require('http');

//load filesystem
var fs = require('fs');

//store port name
const port = 1337;

// routes for the changing pages
var routes = {
    '/': '/public/index.html',
    '/index': '/public/index.html',
    '/contact': '/public/contact.html',
    '/about': '/public/about.html',
    '/events': '/public/events.html',
    '/exec': '/public/exec.html'
}

//function to read file located at path passed in
function serveStaticFile(res, path, contentType, responseCode){
    // if no responsecode then set to 200
    if(!responseCode){
        responseCode = 200;
    }

    //try to read file
    fs.readFile(__dirname + path, function(err,data) {
        //if there is an error
        if(err){
            //internal server error
            res.writeHead(500, {'Content-Type': 'text/plain'});

            //give error message to user
            res.end('500 - Internal Error');
        }
        //no error! it works
        else{
            //give the response code/content type
            res.writeHead(responseCode, {'Content-Type': contentType});

            //send data we have
            res.end(data);
        }
    })
}

//create server here
http.createServer(function(req, res){
    //normalize the url and remove querystring, trailing slash, and make it lowercase
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    //serve each web page based on the path that a user has navigated to, check the html files to determine what paths
    switch(path){
        //if they go to 1337->serve home page
        case '':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        
        //if they go to index
        case '/index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        
        // if they go to contact
        case '/contact':
            serveStaticFile(res, '/public/contact.html', 'text/html');
            break;
        
        //if they go to about
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        
        //if they go to events
        case '/events':
            serveStaticFile(res, '/public/events.html', 'text/html');
            break;

        //if they go to exec
        case '/exec':
            serveStaticFile(res, '/public/exec.html', 'text/html');
            break;
        
        //serve the css file
        case '/css/style.css':
            serveStaticFile(res, '/public/css/style.css', 'text/css');
            break;
        
        // go through the images folder
        case '/images/galentines.png':
            serveStaticFile(res, '/public/images/galentines.png', 'image/png');
            break;
        case '/images/leetcode_meeting.png':
            serveStaticFile(res, '/public/images/leetcode_meeting.png', 'image/png');
            break;
        case '/images/murder_meeting.png':
            serveStaticFile(res, '/public/images/murder_meeting.png', 'image/png');
            break;
        case '/images/product_meeting.png':
            serveStaticFile(res, '/public/images/product_meeting.png', 'image/png');
            break;
        case '/images/pres_exec.jpeg':
            serveStaticFile(res, '/public/images/pres_exec.jpeg', 'image/jpeg');
            break;
        case '/images/vp_exec.png':
            serveStaticFile(res, '/public/images/vp_exec.png', 'image/png');
            break;
        case '/images/secretary_exec.jpeg':
            serveStaticFile(res, '/public/images/secretary_exec.jpeg', 'image/jpeg');
            break;
        case '/images/treasurer_exec.png':
            serveStaticFile(res, '/public/images/treasurer_exec.png', 'image/png');
            break;
        case '/images/swic_logo.png':
            serveStaticFile(res, '/public/images/swic_logo.png', 'image/png');
            break;
        
        // serve the js files
        case '/js/about.js':
            serveStaticFile(res, '/public/js/about.js', 'application/javascript');
            break;
        case '/js/events.js':
            serveStaticFile(res, '/public/js/events.js', 'applicatoin/javascript');
            break;
        case '/js/exec.js':
            serveStaticFile(res, '/public/js/exec.js', 'application/javascript');
            break;
        case '/js/contact.js':
            serveStaticFile(res, '/public/js/contact.js', 'application/javascript');
            break;
        case '/js/index_load.js':
            serveStaticFile(res, '/public/js/index_load.js', 'application/javascript');
            break;
        case '/js/home.js':
            serveStaticFile(res, '/public/js/home.js', 'application/javascript');
            break;
        case '/js/jquery-3.7.1.min.js':
            serveStaticFile(res, '/public/js/jquery-3.7.1.min.js', 'application/javascript');
            break;

        //serve the data files (html, json, xml)
        case '/data/history.html':
            serveStaticFile(res, '/public/data/history.html', 'text/html');
            break;
        case '/data/mission.html':
            serveStaticFile(res, '/public/data/mission.html', 'text/html');
            break;
        case '/data/partialEvent.html':
            serveStaticFile(res, '/public/data/partialEvent.html', 'text/html');
            break;
        case '/data/exec.json':
            serveStaticFile(res, '/public/data/exec.json', 'application/json');
            break;
        case '/data/meetings.xml':
            serveStaticFile(res, '/public/data/meetings.xml', 'application/xml');
            break;

        //if none of the above cases, default is 404 error (not found)
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
}).listen(port);

console.log("Listening.. go to http://localhost:" + port);