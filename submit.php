<?php

	//$wfs_server_url = "http://giv-siidemo.uni-muenster.de:8080/geoserver/group06/wfs";
	$wfs_server_url = "http://giv-siidemo.uni-muenster.de:8080/geoserver/group10ws/wfs";

	function do_post_request($url, $data, $optional_headers = null)
	{
	  $params = array('http' => array(
				  'method' => 'POST',
				  'content' => $data
				));
	  if ($optional_headers !== null) {
		$params['http']['header'] = $optional_headers;
	  }
	  $ctx = stream_context_create($params);
	  $fp = @fopen($url, 'rb', false, $ctx);
	  if (!$fp) {
		throw new Exception("Problem with $url, $php_errormsg");
	  }
	  $response = @stream_get_contents($fp);
	  if ($response === false) {
		throw new Exception("Problem reading data from $url, $php_errormsg");
	  }
	  return $response;
	}
?> 
<html>
	<head>
		<title>Rent a Room: Submission Page</title>
  </head>
  
  <body>
    <b>You submitted:</b><br><br>
    <?php 
      // $_GET[] allows you to find out what the user submitted via parameters to this page, like submit.php?lat=123&...
      // 
      // we have defined names for our input text boxes in the index.php file like this: <input type="text" name="lat">
      // the names are the same here:
  
		$latitude = $_GET["obsLatitude"];
		$longitude = $_GET["obsLongitude"];  
	  
		$street = $_GET["obsStreet"];
		$zip = $_GET["obsZip"];
	
		$city = $_GET["obsCity"];
		$rent = $_GET["obsRent"];
		$room = $_GET["obsNoOfRoom"];
		$area = $_GET["obsArea"];
		$roomtype = $_GET["obsType"];
		$fellowLodger = $_GET["obsFellowLodger"];
		$information = $_GET["obsInformation"];
		$movedate = '2014-02-14';
		
      //  This is the XML part that will be sent to the server. Please change where needed, according to the 
      //  GetCapabilities response of your WFS, your database schema, etc.
	  //  
	  //  Make sure that $longitude and $latitude variables are not switched!
	  //  replace wobs2 with the name of your PostGIS layer and group00ws with the name of your workspace
      $query_string = '<wfs:Transaction xmlns:wfs="http://www.opengis.net/wfs" service="WFS" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/WFS-transaction.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
		<wfs:Insert>
			<feature:flats xmlns:feature="group10ws">			
			<feature:Street>'.$street.'</feature:Street>
			<feature:zip>'.$zip.'</feature:zip>
			<feature:city>'.$city.'</feature:city>
			<feature:price>'.$rent.'</feature:price>
			<feature:rooms>'.$room.'</feature:rooms>
			<feature:area>'.$area.'</feature:area>
			<feature:information>'.$information.'</feature:information>
			<feature:the_geom>
				<gml:Point xmlns:gml="http://www.opengis.net/gml" srsName="EPSG:4326">
					<gml:coordinates>'.$longitude.','.$latitude.'</gml:coordinates>
				</gml:Point>
			</feature:the_geom>			
			<feature:type>'.$roomtype.'</feature:type>
			<feature:fellowlodger>'.$fellowLodger.'</feature:fellowlodger>
			<feature:movein_date>'.$movedate.'</feature:movein_date>
			<feature:Lat>'.$latitude.'</feature:Lat>
			<feature:Long>'.$longitude.'</feature:Long>
		</feature:flats>
	</wfs:Insert>
	</wfs:Transaction>';

      echo "<br><br>";
      echo "Request sent:<br>";
      echo "<textarea style=\"width:550px;height:250px;\">";
      echo htmlspecialchars($query_string);
      echo "</textarea><br><br>";
      echo "The server responded: <br>";
      echo "<textarea style=\"width:550px;height:250px;\">";
      echo htmlspecialchars(do_post_request($wfs_server_url, $query_string, "Content-Type: text/xml; charset=utf-8"));
      echo "</textarea>";
    ?>
	</body>
</html>
