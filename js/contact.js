//get the form input
// declare the email variable
var email = '';
// get the form element
var form = document.getElementById("contact-form");
//event listener for form submission
form.addEventListener("submit", function() {
    var formData = new FormData(form); //get the form data
    email = formData.get("email"); //get the email from the form

    // CODE SNIPPET BELOW TAKEN FROM MAILCHIMP API DOCUMENTATION
    // LINK: https://mailchimp.com/developer/marketing/api/list-members/add-or-update-list-member/
    var client = require("@mailchimp/mailchimp_marketing");
    var crypto = require("crypto");

    var subscriberhash = crypto.createHash("md5").update(email.toLowerCase()).digest("hex");

    client.setConfig({
    apiKey: "40affaf3bda574e74c1883b12ebc1f00", //add in the API key
    server: "-us20", //add in the server (us20 taken from the end of the api key)
    });

    const run = async () => {
    const response = await client.lists.setListMember(
        "b0a6488b52", //this is the audience ID from mailchimp
        subscriberhash, //this is the user's inputted email address but hashed. 
        { email_address: email, status_if_new: "pending" } //put the previously retrieved email address here
    );
    console.log(response);
    };

    run();

    // CODE SNIPPET ABOVE TAKEN FROM MAILCHIMP API DOCUMENTATION
});


