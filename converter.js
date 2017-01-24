var tempField = document.getElementById('temp-field');
var submitButton = document.getElementById('submit');

tempField.addEventListener('keyup', check13);
submitButton.addEventListener('click', convert);


function check13(event) {
	if (event.keykode === 13) {
		convert(event);
	}
}

function convert(event) {
	var userTemp = event.target.value;
	


}


