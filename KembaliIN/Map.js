function initialize() {
		var latitude;
		var longitude;
		navigator.geolocation.getCurrentPosition(success,error,options);
		function success(position){
			latitude=position.coords.latitude;
					//-6.275072
			longitude=position.coords.longitude;
					//106.8433408
			show(latitude,longitude);
		}
		function error(err) {
  			console.warn(`ERROR(${err.code}): ${err.message}`);
		}
		var options = {
  			enableHighAccuracy: true,
  			timeout: 5000,
  			maximumAge: 0
		};
		
        }
	function show(lat,lon){
		var propertiPeta = {
        	    center:new google.maps.LatLng(lat,lon),
        	    zoom:10
        	};
		var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);
		var marker = new google.maps.Marker({
				position: new google.maps.LatLng(lat,lon),
				map: peta
		});
		console.log(lat,lon);
	}


        google.maps.event.addDomListener(window, 'load', initialize);