import QuoteService from "./quote-service.js";

let qs = new QuoteService

function draw(quote) {
	//trying to get quote to screen
	//i'm guessing similar to cars / homes arrays
	//not working but close ( i think)
	var template = `<p> ${quote}</p>
									<p>author: ${QuoteService.name}</p>`


}
export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(function (quote) {
			console.log('What is the quote', quote)
		})


		console.log(quote => {
			document.getElementById("quote").innerHTML = quote
			draw(quote)
		})
	}
}
