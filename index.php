<?php
//object for meetings
class Meeting {
    //data for meeting information
    public $description;
    public $date;
    public $time;
    public $location;

    //constructor for meeting information
    function __construct($description, $date, $time, $location) {
        $this->description = $description;
        $this->date = $date;
        $this->time = $time;
        $this->location = $location;
    }

    //function to get meeting details and display them
    function getMeetingDetails() {
        return "Description: " . $this->description . "<br>" .
               "Date: " . $this->date . "<br>" .
               "Time: " . $this->time . "<br>" .
               "Location: " . $this->location;
    }
}

// creating meeting objects
$meeting1 = new Meeting("Study session", "April 9, 2025", "5-6 PM", "Tyler Hall Room 055");
$meeting2 = new Meeting("Women in AI Workshop", "April 16, 2025", "4:30-6 PM", "Ballentine Hall Room 115");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Society for Women in Computing</title>
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
        <a id="active" href="index.php">Home</a>
        <a href="about.html">About</a>
        <a href="events.html">Events</a>
        <a href="exec.html">Meet the Exec</a>
        <a href="contact.html">Contact Us</a>
    </div>

    <br>

    <div class="content">
        <div class="homeLeft">
            <p>
                The Society for Women in Computing is dedicated to building a community of technical women and their allies 
                at the University of Rhode Island and beyond. We hope to provide a supportive environment for women in 
                technical fields to find resources, network, and grow as professionals.
            </p>

            <button class="questions btn" type="button">When do we meet?</button>
            <button class="questions btn" type="button">How to contact us?</button>
            <p id="questionText"></p>

            <!-- display meeting details from PHP here using getMeetingDetails function -->
            <div id="meetingDetails">
                <h2>Upcoming Meetings</h2>
                <p><?php echo $meeting1->getMeetingDetails(); ?></p>
                <p><?php echo $meeting2->getMeetingDetails(); ?></p>
            </div>



        </div>

        <br>

        <div class="homeRight">
            <h2>Upcoming Events</h2>
            <p>Our next meeting is on Thursday, February 13th from 6:30-7:30PM in Bliss Hall Room 290. We will be celebrating 
                Galentine's Day with a fun craft and some snacks! We hope to see you there!</p>
            <img src="images/galentinesSWIC.png" alt="Next meeting photo" width="300">
            <button class="btn" id="moreEvent" type="button">See More Events</button>
        </div>
    </div>

    <footer>
        <p>Author: Riley Maguire <a id="specific"href="mailto: riley_maguire@uri.edu">riley_maguire@uri.edu</a></p>
    </footer>

    <!-- jQuery script include -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

    <!-- Load in AJAX Script -->
    <script src="js/index_load.js"></script>

    <!-- Personal JavaScript -->
    <script src="js/home.js"></script>
</body>
</html>