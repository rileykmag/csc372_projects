// function to change the images on the page to be transparent
function opacity(){
    var image = document.getElementsByTagName("img");
    for (var i = 0; i < image.length; i++) {
        image[i].style.opacity = "0.5";
    }
}

// function to load XML data from a file and display it on the page
function xmlRequest(filePath,index) {
    var xhr = new XMLHttpRequest();

    //clear out old text
    var div = document.getElementById('details');
    div.innerHTML = '';

    xhr.onload = function(){
        if(xhr.status === 200){ //successful response
            // get response from the server
            var response = xhr.responseXML;

            // get the event elements
            var events = response.getElementsByTagName("event");

            //variables to hold the title, date, and description
            var title, date, description;

            
            //INSTEAD OF LOOPING, USE THE INDEX THAT WAS PASSED IN!

            //create the title element
            title = document.createElement("h3");
            title.appendChild(document.createTextNode(events[index].getElementsByTagName("title")[0].firstChild.nodeValue));
            div.appendChild(title);

            //create the date element
            date = document.createElement("p");
            date.appendChild(document.createTextNode(events[index].getElementsByTagName("date")[0].firstChild.nodeValue));
            div.appendChild(date);

            //create the description element
            description = document.createElement("p");
            description.appendChild(document.createTextNode(events[index].getElementsByTagName("description")[0].firstChild.nodeValue));
            div.appendChild(description);
        }

    };

    //prep the request
    xhr.open('GET', filePath, true);

    //send the request
    xhr.send(null);
}


//event listeners for the images, one for each meeting
// will change opacity of images not selected
// will display the details of the selected meeting

var meeting1 = document.getElementById('meeting1');
meeting1.addEventListener('click', function() {
    xmlRequest('meetings.xml', 0);
    opacity();
    meeting1.style.opacity = "1";
});

var meeting2 = document.getElementById('meeting2');
meeting2.addEventListener('click', function() {
    xmlRequest('meetings.xml', 1);
    opacity();
    meeting2.style.opacity = "1";
});

var meeting3 = document.getElementById('meeting3');
meeting3.addEventListener('click', function() {
    xmlRequest('meetings.xml', 2);
    opacity();
    meeting3.style.opacity = "1";
});