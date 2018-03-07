const request = require('request');

var geocodeAddress = (address,callback) => {
	var encodedAddress = encodeURIComponent(address);

	request({
		url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBYffqjTKlDFUcBjp_os3IfEbD-Z7L-68M&address=${encodedAddress}`,
		json:true
		},
		(error,response,body)=>{
			if(error){
				callback('Unable to connect to google servers.');
			}else if(body.status === 'OK'){
				callback(undefined,{
					address:body.results[0].formatted_address,
					latitude:body.results[0].geometry.location.lat,
					longitude:body.results[0].geometry.location.lng
				});
			}else if(body.status === 'ZERO_RESULTS'){
				callback('Unable to find address.');
			}
		}

	);
};

module.exports.geocodeAddress = geocodeAddress;