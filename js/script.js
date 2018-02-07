function textStats() {
	var text = document.getElementById('textbox').value;
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var fragment = document.createDocumentFragment();
	var container = document.querySelector('.results-cont');
	var total = text.match(/[a-z]/gi).length;
	var totalCont = document.querySelector('.results-total')
	var regx;

	container.innerHTML = "";
	for (var i = 0; i < alphabet.length; i++) {
		regx = new RegExp(alphabet[i], "gi");
		var match = text.match(regx);

		if (match !== null) {
			var percent = match.length / total * 100;
			var resultElement = document.createElement('div');
			var resultChar = document.createElement('span');
			var resultPercent = document.createElement('span');

			resultChar.className = 'result-char';
			resultPercent.className = 'result-percent';
			resultChar.innerHTML = alphabet[i];
			resultPercent.innerHTML = percent.toFixed(2) + "%";

			resultElement.className = 'result';
			resultElement.style.height = Math.round(percent) + "%";
			resultElement.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);

			resultElement.appendChild(resultPercent);
			resultElement.appendChild(resultChar);
			fragment.appendChild(resultElement);
		}
	}
	totalCont.innerHTML = "Total: " + total;
	container.appendChild(fragment);
}