<?php
$dbconn = pg_connect("host=giv-siidemo.uni-muenster.de port=2121 dbname=featuredb user=group06 password=HA131506DKt873C")
    or die('Verbindungsaufbau fehlgeschlagen: ' . pg_last_error());
	
	
	//$Name = $_POST['Name'];
	//$Description = $_POST['Description'];
	//$Comments = $_POST['Comments'];
	//$ID = $_POST['ID'];
	
	
	

  //$query=pg_query($dbconn,"Insert into \"Feature\" values (42,'test','bla','{eins,zwei}','51.1234,7.12345');");
//	$query=pg_query($dbconn,"UPDATE \"Feature\" SET \"Name\"='".$Name."' where \"ID\"=".$ID.";");
	//$query=pg_query($dbconn,"UPDATE \"Feature\" SET \"Description\"='".$Description."' where \"ID\"=".$ID.";");
	
?>