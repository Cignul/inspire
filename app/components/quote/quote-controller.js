import QuoteService from "./quote-service.js";

let qs = new QuoteService

function draw(quote) {



	var template2 = `<p class="font-weight-light textShadow textColorWhite centerText fontSizeBig">quote: ${quote.quote}</p>
									<p class="font-weight-light textShadow textColorWhite centerText fontSizeBig">author: ${quote.author}</p>`

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
