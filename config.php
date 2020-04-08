<?php
    $host = "fdb26.mutanthost.com";
    $userName = "******";
    $password = "****";
    $dbName = "2969409_wpress4147363c";
    // Create database connection
    $conn = new mysqli($host, $userName, $password, $dbName);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        // echo "Conected : Success";
    }
?>