//XML STUFF
function xmlRequest(filePath) {
    var xhr = new XMLHttpRequest(); // get the XMLHttpRequest object

    //load the requested file
    xhr.onload = function(){
        if(xhr.status === 200){ // if the request is successful
            document.getElementById('details').innerHTML = xhr.responseText; // update the details div with the response text
        }
    };

    // open the request
    xhr.open('GET', filePath, true);

    // send the request
    xhr.send(null);
}


var message = $('#details'); // get the question text message to update it
message.css('display', 'none');

// get message and update it when button is clicked
var buttons = $('.questions'); // get all buttons and store them
function setActive(button) {
    buttons.each(function(index, btn) {
            btn.classList.remove('active'); // bootstrap btn class
        });
    button.classList.add('active'); // passed in button to function
}

buttons.each(function(index, button) { //swap forEach for .each() to use jQuery
    $(button).on('click', function() { //event with jQuery instead of event handler
        //make the message text visible
        message.css('display', 'block');

        setActive(button); // function from above to set active button

        if(index === 0){ //history button selected
            xmlRequest('data/history.html');
        } else if(index === 1){//values button selected
            xmlRequest('data/mission.html');
        }

    });
});

// on load, set the history button as active and load history.html
$(document).ready(function() {
    var historyButton = buttons[0];
    setActive(historyButton);
    message.css('display', 'block');
    xmlRequest('data/history.html');
});