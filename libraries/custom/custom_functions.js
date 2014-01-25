<script>

//function to get all the data from the WFS/Json

function loadGeoJson(data) {
myLayer.addData(data); 
}

var geoJsonUrl ="http://giv-siidemo.uni-muenster.de:8080/geoserver/group10ws/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=group10ws:flats&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson";
$.ajax({ 
        url: geoJsonUrl, 
        dataType: 'jsonp' 
}); 

function alldata(data){
var geoJsonUrl ="http://giv-siidemo.uni-muenster.de:8080/geoserver/group10ws/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=group10ws:flats&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJson";
$.ajax({ 
        url: geoJsonUrl, 
        dataType: 'jsonp' 
}); 
}





//Query by filter


function initialvariables(){
	qsizemin=-1;
	qsizemax=-1;
	qpricemin=-1;
	qpricemax=-1;
	qflats=-1;
	gfsc=-1;
	qmaxlodger=-1;
	qminlodger=-1;
	qmaxroom=-1;
	qminroom=-1;
	qzip=-1;
}

function Query(){
	queryclear();
	sidebar.show();	
}

function queryattributes(){
	qsizemin=document.getElementById('qsizemin').value;
	qsizemax=document.getElementById('qsizemax').value;
	qpricemin=document.getElementById('qpricemin').value;
	qpricemax=document.getElementById('qpricemax').value;
	if (document.getElementById('qflat').checked==true)
		qflats=1;
	if (document.getElementById('qfsc').checked==true)
		gfsc=1;
	qmaxlodger=document.getElementById('qmaxlodger').value;
	qminlodger=document.getElementById('qminlodger').value;
	qmaxroom=document.getElementById('qmaxroom').value;
	qminroom=document.getElementById('qminroom').value;
	qzip=document.getElementById('qzip').value;
	
	var geoJsonquery ="http://giv-siidemo.uni-muenster.de:8080/geoserver/group10ws/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=group10ws:flats&Filter=<Filter><And>"
	if (qsizemin != ''){
	geoJsonquery +="<PropertyIsGreaterThanOrEqualTo><PropertyName>area</PropertyName><Literal>"
	geoJsonquery +=qsizemin
	geoJsonquery +="</Literal></PropertyIsGreaterThanOrEqualTo>"
	}
	
	if (qsizemax != ''){
	geoJsonquery +="<PropertyIsLessThanOrEqualTo><PropertyName>area</PropertyName><Literal>"
	geoJsonquery +=qsizemax
	geoJsonquery +="</Literal></PropertyIsLessThanOrEqualTo>"
	}
	
	if (qpricemin != ''){
	geoJsonquery +="<PropertyIsGreaterThanOrEqualTo><PropertyName>price</PropertyName><Literal>"
	geoJsonquery +=qpricemin
	geoJsonquery +="</Literal></PropertyIsGreaterThanOrEqualTo>"
	}
	
	if (qpricemax != ''){
	geoJsonquery +="<PropertyIsLessThanOrEqualTo><PropertyName>price</PropertyName><Literal>"
	geoJsonquery +=qpricemax
	geoJsonquery +="</Literal></PropertyIsLessThanOrEqualTo>"
	}
	
	//if (qflats == 1){
	//geoJsonquery +="<PropertyIsEqualTo><PropertyName>price</PropertyName><Literal>"
	//geoJsonquery +=qpricemax
	//geoJsonquery +="</Literal></PropertyIsEqualTo>"
	//}
	
	//if (qfsc == 1){
	//geoJsonquery +="<PropertyIsEqualTo><PropertyName>price</PropertyName><Literal>"
	//geoJsonquery +=qpricemax
	//geoJsonquery +="</Literal></PropertyIsEqualTo>"
	//}
	
	//if (qmaxlodger != ''){
	//geoJsonquery +="<PropertyIsLessThanOrEqualTo><PropertyName>price</PropertyName><Literal>"
	//geoJsonquery +=qpricemax
	//geoJsonquery +="</Literal></PropertyIsLessThanOrEqualTo>"
	//}
	
	//if (qminlodger != ''){
	//geoJsonquery +="<PropertyIsLessThanOrEqualTo><PropertyName>price</PropertyName><Literal>"
	//geoJsonquery +=qpricemax
	//geoJsonquery +="</Literal></PropertyIsLessThanOrEqualTo>"
	//}
	
	if(qminroom != ''){
	geoJsonquery +="<PropertyIsGreaterThanOrEqualTo><PropertyName>rooms</PropertyName><Literal>"
	geoJsonquery +=qminroom
	geoJsonquery +="</Literal></PropertyIsGreaterThanOrEqualTo>"
	}
	
	if(qmaxroom != ''){
	geoJsonquery +="<PropertyIsLessThanOrEqualTo><PropertyName>rooms</PropertyName><Literal>"
	geoJsonquery +=qmaxroom
	geoJsonquery +="</Literal></PropertyIsLessThanOrEqualTo>"
	}
	
	if(qzip != ''){
	geoJsonquery +="<PropertyIsEqualTo><PropertyName>zip</PropertyName><Literal>"
	geoJsonquery +=qzip
	geoJsonquery +="</Literal></PropertyIsEqualTo>"
	}
	
	geoJsonquery +="</And></Filter>&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJsonQuery";
	
	alert(geoJsonUrl);
	
	$.ajax({ 
        url: geoJsonquery, 
        dataType: 'jsonp' 
}); 
}

function onEachFeaturequery(feature, layer){
document.getElementById('divtable').innerHTML = '<tr><td>feature.properties.Street</td><td>feature.properties.rooms</td></tr>';
}

function loadGeoJsonQuery(data) {
myLayer.clearLayers();
myLayer.addData(data);

}

function queryclear(){
	document.getElementById('qsizemin').value='';
	document.getElementById('qsizemax').value='';
	document.getElementById('qpricemin').value='';
	document.getElementById('qpricemax').value='';
	document.getElementById('qflat').checked=false;
	document.getElementById('qfsc').checked=false;
	document.getElementById('qmaxlodger').value='';
	document.getElementById('qminlodger').value='';
	document.getElementById('qmaxroom').value='';
	document.getElementById('qminroom').value='';
	document.getElementById('qzip').value='';
	
	initialvariables()
}

function Querylocation(){
	sidebarqlocation.show();	
}

function submitquerylocation(){
		
var geoJsonUrl ="http://giv-siidemo.uni-muenster.de:8080/geoserver/group10ws/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=group10ws:flats&"
geoJsonUrl +="Filter=<Filter xmlns=\"http://www.opengis.net/ogc\"  xmlns:gml=\"http://www.opengis.net/gml\"><DWithin><PropertyName>the_geom</PropertyName><gml:Point><gml:coordinates>"
geoJsonUrl +=lat
geoJsonUrl +=","
geoJsonUrl +=lon
geoJsonUrl +="</gml:coordinates></gml:Point><Distance units='km'>3</Distance></DWithin></Filter>"
geoJsonUrl +="&format=text/javascript&outputFormat=json&format_options=callback:loadGeoJsonQuery";

alert(geoJsonUrl)

$.ajax({ 
        url: geoJsonUrl, 
        dataType: 'jsonp' 
}); 





}

map.on('locationerror', onLocationError);


// Add a marker

//-----------------------
function AddAccomod(Coord){
	AddAccomodationsidebar.show();
	$.get( "AddNewAccomodation.php?Coord="+Coord, function( data ) {
	document.getElementById('NewAccomationCoordinates').innerHTML = data;
	});
}

function InsertObservation(coordinate)	{
	//insertObservationSidebar.show();	
	
	obs_sidebar.show();		
	var index = coordinate.indexOf(",");	
	document.getElementById("obsLatitude").value = coordinate.substring(0,index); 
	document.getElementById("obsLongitude").value = coordinate.substring(index+1);
	
	
	//$.get( "insert_observation.php?coordinate=" + coordinate, function( data ) {
		//document.getElementById('coordinateValues').innerHTML = data;
	//});

}


function InvokeMarker(Coord){
	new L.Draw.Marker(map, drawControl.options.marker).enable( )// to invoke draw Marker command 
}


//???
function Observation(){
/*


	alert('yes');
	
	obs_sidebar.show();	
	alert('lat');
	alert(document.getElementById('lat').value);
	document.getElementById('obsLatitude').value = document.getElementById('lat').value;
	alert('obslat');
	alert(document.getElementById('obsLatitude').value);
	*/
}

// Functions for adding new flats by formular 
function addRoomDetails()	{		
					
	var getUrl = "submit.php?";
	getUrl += "obsLatitude=" + document.getElementById("obsLatitude").value + "&";				
	getUrl += "obsLongitude=" + document.getElementById("obsLongitude").value + "&";				
	getUrl += "obsStreet=" + document.getElementById("obsStreet").value + "&";				
	getUrl += "obsZip=" + document.getElementById("obsZip").value + "&";
	getUrl += "obsCity=" + document.getElementById("obsCity").value + "&";
	getUrl += "obsArea=" + document.getElementById("obsArea").value + "&";
	getUrl += "obsRent=" + document.getElementById("obsRent").value + "&";
	getUrl += "obsType=" + document.getElementById("obsType").value + "&";
	getUrl += "obsFellowLodger=" + document.getElementById("obsFellowLodger").value + "&";
	getUrl += "obsNoOfRoom=" + document.getElementById("obsNoOfRoom").value + "&";
	getUrl += "obsDate=" + document.getElementById("obsDate").value + "&";				
	getUrl += "obsInformation=" + document.getElementById("obsInformation").value;
				
	$.ajax({					
		type: "GET",
		url: getUrl,					
		data: { }
	}).done(function( msg ) {					
					
		msg = msg.toLowerCase();
		if(msg.indexOf("success") != -1)
			alert("Data saved succesfully");
		else
			alert("Error saving data");
	});
}

function clearRoomDetails()	{
	
	document.getElementById("obsLatitude").value = '';
	document.getElementById("obsLongitude").value = '';
	document.getElementById("obsStreet").value = '';
	document.getElementById("obsZip").value = '';
	document.getElementById("obsCity").value = '';
	document.getElementById("obsArea").value = '';
	document.getElementById("obsRent").value = '';
	//document.getElementById("obsType").value = '';
	document.getElementById("obsFellowLodger").value = '';
	document.getElementById("obsNoOfRoom").value = '';
	document.getElementById("obsDate").value = '';
	document.getElementById("obsInformation").value = '';
}





</script>