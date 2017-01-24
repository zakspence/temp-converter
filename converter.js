/*---------------------------------

		  	 THE STAGE

----------------------------------*/


var tempField = document.getElementById('temp-field');
var submitButton = document.getElementById('submit');
var resetButton = document.getElementById('reset');
var display = document.getElementById('display');

tempField.addEventListener('keyup', check13);
submitButton.addEventListener('click', function(){colorChange(convert());});
resetButton.addEventListener('click', reset);


/*---------------------------------

		  FORM FUNCTIONALITY

----------------------------------*/


function check13(event) {
	if (event.keykode === 13) {
		convert(event);
	}
}

function checkRadio() {
	var isFahrenheit = document.getElementById('fahrenheit').checked;

	return isFahrenheit;
}

function reset() {
	tempField.setAttribute('value', 0);
	display.innerHTML = '';
}



/*---------------------------------

		TEMPERATURE CONVERSION 

----------------------------------*/
	

function convert(event) {
	var userTemp = event.target.value;
	var isFahrenheit = checkRadio();

	if (isFahrenheit) {

	//FAHRENHEIT 2 CELSIUS
	//Deduct 32, then multiply by 5, then divide by 9
	return celsius = {
		temp: (userTemp -32) * 5 / 9,
		scale: 'celsius'
	};

	} else {

	//CELSIUS 2 FAHRENHEIT
	//Multiply by 9, then divide by 5, then add 32
	return fahrenheit = {
		temp: (userTemp * 9 / 5) + 32,
		scale: 'fahrenheit'
	};
}


/*---------------------------------

			COLOR CHANGE 

----------------------------------*/

function colorChange(temp) {
	display.innerHTML = (function (temp) {
		//  When the temperature is shown in celsius, color text by heat
		
		if (temp.scale === 'celsius' ){  //  set to blue
			if (temp.temp < 0 ){
				return  `<p color='blue'>${temp.temp}</p>`

			} else if (temp.temp > 32 ){ //  set to red
				return `<p color='red'>${temp.temp}</p>`

			} else {					 //  set to green
				return `<p color='green'>${temp.temp}</p>`

			}
		}
		//  When the temperature is shown in fahrenheit, color text by heat
		
		else if (temp.scale === 'fahrenheit' ){
			if (temp.temp < 32 ){
				return  `<p color='blue'>${temp.temp}</p>`

			} else if (temp.temp > 90 ){
				return `<p color='red'>${temp.temp}</p>`

			} else {
				return `<p color='green'>${temp.temp}</p>`

			}
		}
	}(temp));
}










