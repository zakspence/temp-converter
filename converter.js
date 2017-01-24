/*---------------------------------

		  	 THE STAGE

----------------------------------*/


var tempField = document.getElementById('temp-field');
var submitButton = document.getElementById('submit');
var resetButton = document.getElementById('reset');
var display = document.getElementById('display');

tempField.addEventListener('keyup', check13);
submitButton.addEventListener('click', function(event){colorChange(convert(event));});
resetButton.addEventListener('click', reset);


/*---------------------------------

		  FORM FUNCTIONALITY

----------------------------------*/


function check13(event) {
	if (event.keykode === 13) {
		convert();
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
	

function convert() {
	var userTemp = tempField.value;
	console.log(userTemp);
	var isFahrenheit = checkRadio();

	if (isFahrenheit) {

		//CELSIUS 2 FAHRENHEIT
		//Multiply by 9, then divide by 5, then add 32
		return fahrenheit = {
			temp: ((userTemp * 9 / 5) + 32),
			scale: 'fahrenheit'
		};	
	} else {

		//FAHRENHEIT 2 CELSIUS
		//Deduct 32, then multiply by 5, then divide by 9
		return celsius = {
			temp: ((userTemp -32) * 5 / 9),
			scale: 'celsius'
		};
	}
}


/*---------------------------------

			COLOR CHANGE 

----------------------------------*/

function colorChange(temp) {
	console.log('before: ', temp)
	display.innerHTML = (function (temp) {
		console.log('after: ', temp)
		
		//  When the temperature is shown in celsius, color text by heat
		if (temp.scale === 'celsius' ){  
			if (temp.temp < 0 ){
				return  `<p id='blue'>${temp.temp}</p>`//  set to blue

			} else if (temp.temp > 32 ){ 
				return `<p id='red'>${temp.temp}</p>`//  set to red

			} else {					 
				return `<p id='green'>${temp.temp}</p>`//  set to green

			}
		}
		//  When the temperature is shown in fahrenheit, color text by heat
		else if (temp.scale === 'fahrenheit' ){
			if (temp.temp < 32 ){
				return  `<p id='blue'>${temp.temp}</p>`//  set to blue

			} else if (temp.temp > 90 ){
				return `<p id='red'>${temp.temp}</p>`// set to red

			} else {
				return `<p id='green'>${temp.temp}</p>`// set to green

			}
		}
	})(temp);
}










