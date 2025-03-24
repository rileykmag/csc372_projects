//set question text visibility to none when page loads
var question = $('#questionText'); // get the question text message to update it
question.css('display', 'none');

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
        // //make the question text visible
        // question.css('display', 'block');

        setActive(button); // function from above to set active button
        // have to slide up the question text before updating it
        question.slideUp(1000, function(){

            // update the question text based on the button clicked
            // want the text to slide down and then slide up as the buttons are selected/swapped

            //first question button selected
            if (index === 0) {
                question.html("We meet on Wednesdays from 5-6pm in Tyler Hall Room 055!"); //update with .html() instead of innerHTML
                //slide the question text down 
                question.slideDown(1000);
            } 
            //second question button selected
            else if (index === 1) {
                //slide the question text down 
                question.html("You can contact us at uriswic@gmail.com and follow us on Instagram @uriswic!"); //update with .html() instead of innerHTML

                question.slideDown(1000);
            }
        });

    });
});