import QuoteService from "./quote-service.js";

let qs = new QuoteService

function draw(quote) {

	//trying to get quote to screen
	//i'm guessing similar to cars / homes arrays
	//not working but close ( i think)
	//over riding the todo form though...

	var template2 = `<p>qotd: ${quote.quote}</p>
									<p> quoteID: ${quote.id}</p>
									<p>author: ${quote.author}</p>`

	document.getElementById("quote").innerHTML = template2
}
export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(draw)


		// console.log(quote => {
		// 	document.getElementById("quote").innerHTML = quote
		// 	draw(quote)

	}
}
