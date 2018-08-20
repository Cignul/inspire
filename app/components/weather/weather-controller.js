import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()
let ws = new WeatherService

function draw(ws) {

	//trying to get weather
	//i'm guessing similar to cars / homes arrays
	//not working but close ( i think)
	//returning the wrong values...

	var template3 = `<p>weather: ${weatherService.getWeather}</p>
									`

	document.getElementById("weather").innerHTML = template3
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			console.log(weather);
			draw(weather)
			//What can you do with this weather object?
		})
	}
}
