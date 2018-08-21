import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()
let ws = new WeatherService

function draw(ws) {
	let Fahrenheit = (ws.main.temp * (9 / 5) - 459.67).toFixed(2)

	//trying to get weather
	//i'm guessing similar to cars / homes arrays
	//not working but close ( i think)
	//returning the wrong values...
	console.log(weatherService.getWeather)
	//need to get temp out of this not whole weather object
	var template3 = `<p>weather: ${Fahrenheit} degrees F</p>
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
