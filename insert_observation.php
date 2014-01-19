<html>
	<head>
		<title> Flat details </title>
		
		<script type="text/javascript">
			// the Geolocation API provides us with the visitor's location
			navigator.geolocation.getCurrentPosition(GetLocation);
			
			function GetLocation(location)	{
				// after we have acquired the user's location, it is written into the HTML <input ...> text boxes below
				document.form.obsLatitude.value = location.coords.latitude;
				document.form.obsLongitude.value = location.coords.longitude;
				document.form.obsAccuracy.value = location.coords.accuracy;				
			}
			
		</script>
		
	</head>
<body>


<form name="form" action="submit.php" method="get">
	
	<table width="400px">

		<tr align="center">
			<td colspan="2">
				<b>Insert Observation</b>
			</td>
		</tr>
		<tr>
			<td width="150px" align="right">
				Latitude: 				
			</td>
			<td width="250px">				
				<input type="text" id="obsLatitude" name="obsLatitude"><br>				
			</td>		
		</tr>
		
		<tr>
			<td align="right">
				Longitude:				
			</td>
			<td>
				<input type="text" id="obsLongitude" name="obsLongitude"><br>
			</td>			
		</tr>
		<tr>
			<td align="right">
				Accuracy:				
			</td>
			<td>
				<input type="text" id="obsAccuracy" name="obsAccuracy"><br>
			</td>			
		</tr>
		
		<tr>
			<td align="right">				
				Street: 				
			</td>
			<td>
				<input type="text" id="obsStreet" name="obsStreet"><br>
			</td>
		</tr>
		
		<tr>
			<td align="right">
				Zip: 				
			</td>
			<td>
				<input type="text" id="obsZip" name="obsZip"><br>
			</td>
		</tr>
		<tr>
			<td align="right">
				City: 				
			</td>
			<td>
				<input type="text" id="obsCity" name="obsCity"><br>
			</td>
		</tr>
		
		<tr>
			<td align="right">
				Rent: 				
			</td>
			<td>
				<input type="text" id="obsRent" name="obsRent"><br>
			</td>
		</tr>
		
		<tr>
			<td align="right">
				Room(s): 				
			</td>
			<td>
				<input type="text" id="obsNoOfRoom" name="obsNoOfRoom"><br>
			</td>
		</tr>
		
		<tr>
			<td align="right">
				Area: 				
			</td>
			<td>
				<input type="text" id="obsArea" name="obsArea"><br>
			</td>
		</tr>
		
		<tr>
			<td align="right">
				Room Type: 				
			</td>
			<td>
				<input type="radio" id="obsType" name="obsType" value="Flat">
				<input type="radio" id="obsType" name="obsType" value="Sharing">
			</td>
		</tr>
		
		<tr>
			<td align="right">
				Fellow lodger: 				
			</td>
			<td>
				<input type="text" id="obsFellowLodger" name="obsFellowLodger"><br>
			</td>
		</tr>
		
		<tr>
			<td align="right">
				Other Information: 				
			</td>
			<td>
				<textarea rows="5" cols="30" id="obsInformation" name="obsInformation"></textarea>
			</td>
		</tr>
		
		<tr>
			<td colspan="2" align="center">				
				<input type="reset" value="Cancel">
				<input type="submit" value="Submit" class="input_submit">				
			</td>
		</tr>		
	</table>

</form>

</body>
</html> 
