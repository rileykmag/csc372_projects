<?php 

//include database connection script
require './includes/database-connection.php';

// check if a specific meeting ID is provided in the query string
if (isset($_GET['meeting_id']) && is_numeric($_GET['meeting_id'])) {
    $meeting_id = $_GET['meeting_id'];

    // prepare SQL query to fetch the specific meeting
    $sql = "SELECT * FROM meetings WHERE id = :meeting_id";
    $statement = pdo($pdo, $sql, ['meeting_id' => $meeting_id]);
    $meeting = $statement->fetch();

    // check if meeting found/exists
    if ($meeting) {
        $meetings = [$meeting];
    } else {
        //no meeting found, empty 
        echo "<p>No meeting found with the specified ID.</p>";
        $meetings = [];
    }
} else {
    // no specific meeting ID provided->fetch all meetings
    $sql = "SELECT * FROM meetings";
    $statement = $pdo->query($sql);
    $meetings = $statement->fetchAll();

    if (!$meetings) {
        // no meetings found in the database
        echo "<p>No meetings found.</p>";
    }
}


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
            <?php if (!empty($meetings)): ?>
                <!-- use bootstrap table & add the font from the rest of the page -->
                <table class="table table-striped" style="font-family: Lucida, monospace;"> 
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Time</th>
                            <th>Location</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($meetings as $meeting): ?>
                            <tr>
                                <td><?= htmlspecialchars($meeting['date']) ?></td>
                                <td><?= htmlspecialchars($meeting['title']) ?></td>
                                <td><?= htmlspecialchars($meeting['time']) ?></td>
                                <td><?= htmlspecialchars($meeting['location']) ?></td>
                                <td><?= htmlspecialchars($meeting['description']) ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            <?php endif ?>
        </div>
    </div>

    <footer style="clear: both; text-align: center; margin-top: 20px;">
        <p>Author: Riley Maguire <a id="specific" href="mailto: riley_maguire@uri.edu">riley_maguire@uri.edu</a></p>
    </footer>

    <script src="js/events.js"></script>
</body>
</html>