var details = document.getElementsByClassName('details');

// function to control the display of the details of the project
function visiblity(){
    for (var i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
}

// function to load JSON data from a file and display it on the page
function request(filePath, index){
    var xhr = new XMLHttpRequest();

    //check for successful response
    xhr.onload = function(){
        if(xhr.status === 200){
            //parse the JSON data
            var responseObject = JSON.parse(xhr.responseText);

            //create a variable to hold the new data
            var newData = '';

            //AGAIN, NO LOOP BECAUSE WE ARE USING THE INDEX PASSED INTO THE FUNCTION
            //create the new elements
            newData += '<h3>' + responseObject.exec[index].name + '</h3>';
            newData += '<p>' + responseObject.exec[index].year + '</p>';
            newData += '<p>' + responseObject.exec[index].major + '</p>';

            //display the new data
            details[index].innerHTML = newData;

            console.log(newData);
            console.log(details[index]);
        }
    };

    //prep the request
    xhr.open('GET', filePath, true);

    //send the request
    xhr.send(null);
}

//event listeners for each exec position for info to be displayed upon hover
var pres = document.getElementById('president');
pres.addEventListener('click', function() {
    request('data/exec.json', 0);
    visiblity();
    details[0].style.display = "block";
});

var vp = document.getElementById('vp');
vp.addEventListener('click', function() {
    request('data/exec.json', 1);
    visiblity();
    details[1].style.display = "block";
});

var treas = document.getElementById('treasurer');
treas.addEventListener('click', function() {
    request('data/exec.json', 2);
    visiblity();
    details[2].style.display = "block";
});

var sec = document.getElementById('secretary');
sec.addEventListener('click', function() {
    request('data/exec.json', 3);
    visiblity();
    details[3].style.display = "block";
});

