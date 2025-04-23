<?php 

//include database connection script
require './includes/database-connection.php';

//retrieve all of the info for the meetings
$sql = "SELECT * 
        FROM meetings";

$meetings = pdo($pdo, $sql)->fetchAll();



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Events: The Society for Women in Computing</title>
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
        <a href="index.php">Home</a>
        <a href="about.html">About</a>
        <a id="active" href="events.php">Events</a>
        <a href="exec.html">Meet the Exec</a>
        <a href="contact.html">Contact Us</a>
    </div>

    <br>
    <h2 class="meetingSection">Spotlight Meetings</h2>
    <div class="content">

        <div class="eventContent">
            <div id="meetings">
                <img id="meeting1" src="images/productMeeting.png" alt="product/project management meeting">
                <img id="meeting2" src="images/murderMeeting.png" alt="murder mystery meeting">
                <img id="meeting3" src="images/leetcodeMeeting.png" alt="leetcode meeting">
            </div>
            <div id="details">
                <p>Click on a meeting to learn more!</p>
            </div>
        </div>
    </div>
    <h2 class="meetingSection">All Meetings</h2>
    <!-- display meetings database here!!!! -->
    <div class="content">
        <div id="dataMeeting">
            <!-- display names and information for each meeting line -->
            
            <p><?= $meetings[0]['date'] . ": " . $meetings[0]['title'] . " at " . $meetings[0]['time'] . " in " . $meetings[0]['location'] . ". " . $meetings[0]['description']?></p>
            <p><?= $meetings[1]['date'] . ": " . $meetings[1]['title'] . " at " . $meetings[1]['time'] . " in " . $meetings[1]['location'] . ". " . $meetings[1]['description']?></p>
            <p><?= $meetings[2]['date'] . ": " . $meetings[2]['title'] . " at " . $meetings[2]['time'] . " in " . $meetings[2]['location'] . ". " . $meetings[2]['description']?></p>
            <p><?= $meetings[3]['date'] . ": " . $meetings[3]['title'] . " at " . $meetings[3]['time'] . " in " . $meetings[3]['location'] . ". " . $meetings[3]['description']?></p>
            <p><?= $meetings[4]['date'] . ": " . $meetings[4]['title'] . " at " . $meetings[4]['time'] . " in " . $meetings[4]['location'] . ". " . $meetings[4]['description']?></p>
            <p><?= $meetings[5]['date'] . ": " . $meetings[5]['title'] . " at " . $meetings[5]['time'] . " in " . $meetings[5]['location'] . ". " . $meetings[5]['description']?></p>
        </div>  
    </div>

    <footer>
        <p>Author: Riley Maguire <a id="specific"href="mailto: riley_maguire@uri.edu">riley_maguire@uri.edu</a></p>
    </footer>

    <script src="js/events.js"></script>
</body>
</html>