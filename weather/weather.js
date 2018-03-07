const request = require('request')


var getWeather = (lat,lng,callback) =>{
	request({
		url:`https://api.darksky.net/forecast/5f24448833124f7eb9340ded943b0df8/${lat},${lng}`,
		json:true
	},(error,response,body)=>{
		if(!error && response.statusCode === 200){
			callback(undefined,{
				tempreature:body.currently.temperature,
				apparentTemperature:body.currently.apparentTemperature
			});
		}else{
			callback("Unable to fetch weather");
		}
	});
}

module.exports.getWeather = getWeather;