<?php

require("phpsqlsearch_dbinfo.php");

// Start XML file, create parent node

$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

// Opens a connection to a MySQL server

$connection=mysql_connect ('localhost', $username, $password);
if (!$connection) {  die('Not connected : ' . mysql_error());}

// Set the active MySQL database

$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}

//Load csv into the database
// TODO 

	 //get the csv file 
    $file = 'dummy.csv'; 
    $handle = fopen($file,"r"); 
     
    //loop through the csv file and insert into database 
    while ($data = fgetcsv($handle,1000,",","\"")) { 
        if ($data[0]) { 
            mysql_query("INSERT INTO markers (name, address, lat, lng, type) VALUES 
                ( 
                    '".addslashes($data[0])."', 
                    '".addslashes($data[1])."', 
                    '".addslashes($data[2])."',
                    '".addslashes($data[3])."',
                    '".addslashes($data[4])."'
                ) 
            "); 
        } 
    }

    fclose($handle);

// Select all the rows in the markers table

$sql = "SELECT * FROM markers WHERE 1";
$result = mysql_query($sql);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

$xml = new XMLWriter();

$xml->openURI("php://output");
$xml->startDocument();
$xml->setIndent(true);

$xml->startElement('markers');

while ($row = mysql_fetch_assoc($result)) {
  $xml->startElement("marker");

  $xml->writeAttribute('name', $row['name']);
  $xml->writeAttribute('address', $row['address']);
  $xml->writeAttribute('lat', $row['lat']);
  $xml->writeAttribute('lng', $row['lng']);
  $xml->writeAttribute('type', $row['type']);

  $xml->endElement();
}

$xml->endElement();

header("Content-type: text/xml");

// Iterate through the rows, adding XML nodes for each



?>