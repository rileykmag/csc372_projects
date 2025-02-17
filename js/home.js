// // get meeting button and message
// var questions = document.getElementsByClassName("questions");
// var meetmessage = document.getElementById("meetText");

// // update meeting message when button is clicked
// questions[0].addEventListener("click", function() {
//     meetmessage.innerHTML = "We meet on Wednesdays from 5-6pm in Tyler Hall Room 055!";
// });

// // get contact message and update it when button is clicked
// var contactmessage = document.getElementById("contactText");
// questions[1].addEventListener("click", function() {
//     contactmessage.innerHTML = "You can contact us at uriswic@gmail.com and follow us on Instagram @uriswic!";
// });

// get message and update it when button is clicked
function setActive(button) {
    var buttons = document.querySelectorAll('.questions');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}

// add event listeners for when the buttons are clicked
var buttons = document.querySelectorAll('.questions');
var question = document.getElementById('questionText');
buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        setActive(button);
        if (index === 0) {
            question.innerHTML = "We meet on Wednesdays from 5-6pm in Tyler Hall Room 055!";
        } else if (index === 1) {
            question.innerHTML = "You can contact us at uriswic@gmail.com and follow us on Instagram @uriswic!";
        }
    });
});