<?php
include 'includes/form.php';

//hold values for form
$formData = [
    'name' => '',
    'age' => '',
    'year' => ''
];

//hold values for errors
$errorMessages = [
    'name' => '',
    'age' => '',
    'year' => ''
];

// varible to hold success/error message after validation
$statusMessage = '';

//check if was submitted w/ post method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formData['name'] = $_POST['name'];
    $formData['age'] = $_POST['age'];
    $formData['year'] = $_POST['year'];
}

//validate form w/ functions from php file
if(isValidText($formData['name'], 1, 100)) {
    $errorMessages['name'] = '';
} else {
    $errorMessages['name'] = 'Name must be between 1 and 100 characters.' . htmlspecialchars($formData['name'] .  ' is invalid.');
}
if(isValidNumber($formData['age'], 0, 100)) {
    $errorMessages['age'] = '';
} else {
    $errorMessages['age'] = 'Age must be between 0 and 100.' . htmlspecialchars($formData['age'] .  ' is invalid.');
}
if(isValidOption($formData['year'], ['Freshman', 'Sophomore', 'Junior', 'Senior'])) {
    $errorMessages['year'] = '';
} else {
    $errorMessages['year'] = 'Please select a valid year.';
}

// combine all error messages into a single string
$allErrors = implode(' ', array_filter($errorMessages));

// if errors, update status message
if (!empty($allErrors)) {
    $statusMessage = 'Please fix the following errors: ' . $allErrors;
} else {
    // if no errors, update status message
    $statusMessage = 'Data is valid. Thank you for your submission!';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Contact: The Society for Women in Computing</title>
    <meta charset="UTF-8">
    <!-- BOOTSTRAP LINK -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- PERSONAL CSS LINK -->
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <!-- BOOTSTRAP JS LINK -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <div class="header">
        <img src="images/SWIC_logo.png" alt="SWiC logo">
        <h1>Society for Women in Computing</h1>
    </div>

    <div class="navbar">
        <!-- navigation bar -->
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="events.html">Events</a>
        <a href="exec.html">Meet the Exec</a>
        <a id="active" href="contact.html">Contact Us</a>
    </div>

    <br>

    <div class="container-fluid">
        <div class="row">
            <div class="contact">
                <h2>Contact Us</h2>
                <p>For more information about the Society for Computing, join our mailing list or follow us on Instagram below!</p>
        </div>
        <div class="row">
            <div class="contact col-sm-6">
                <h3>Join our email list here!</h3>
                <form id="contact-form">
                    <p><label for="email" class="form-label">Email:</label></p>
                    <input type="email" class="form-control" id="email" name="email" required>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div class="contact col-sm-6">
                <?php
                // display the status message from php validation at top
                if (!empty($statusMessage)) {
                    echo '<style>#php_form { display: none; }</style>';
                    echo '<div class="contact"><p>' . htmlspecialchars($statusMessage) . '</p></div>';
                }
                // set a cookie with the form's name if the form entry is valid AND there are no errors
                if (empty($allErrors) && !empty($formData['name'])) {
                    //set cookie & also set time to expire (30 days)
                    setcookie('visitor_name', $formData['name'], time() + (86400 * 30), "/"); // Expires in 30 days
                }

                // display the cookie value if it exists and is set
                if (isset($_COOKIE['visitor_name'])) {
                    // htmlspecialchars to prevent XSS attacks
                    $visitorName = htmlspecialchars($_COOKIE['visitor_name']);
                    // display the cookie value with a welcome message
                    echo '<p>Welcome ' . $visitorName . '!</p>';
                }

                // Start a new session or resume the existing one
                session_start();

                // if the form is valid and there are no errors, store the visitor's name in the session
                if (empty($allErrors) && !empty($formData['name'])) {
                    $_SESSION['visitor_name'] = $formData['name'];
                }

                // display the session data if it exists
                if (isset($_SESSION['visitor_name'])) {
                    echo '<p>Session Active: Welcome ' . htmlspecialchars($_SESSION['visitor_name']) . '!</p>';
                    echo '<form method="post"><button type="submit" name="logout">Logout</button></form>';
                }

                // handle the session termination (logout)
                if (isset($_POST['logout'])) {
                    // unset all session variables
                    session_unset();
                    // destroy the session
                    session_destroy();
                    // redirect to the html page to refresh the session
                    header("Location: contact.html");
                    exit;
                }
                ?>
            </div>
        </div>
    </div>

    <footer>
        <p>Author: Riley <a id="specific"href="mailto: riley_maguire@uri.edu">riley_maguire@uri.edu</a></p>
    </footer>
    <script src="js/contact.js"></script>
</body>
</html>