

document.addEventListener('click', randomQuote, true);
document.addEventListener('click', changeColor ,true);

function randomQuote () {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://talaikis.com/api/quotes/random/', true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);

			var output = '';
			output +=
				'<p>'+data.quote+'</p>'+
				'<p>By - '+data.author+'</p>';

			document.getElementById('quote-body').innerHTML = output;

		}
	}

	xhr.send();

}

function changeColor () {
	document.body.style.background = 'black';

}



