/*The querySelector() method returns the first element 
that matches a specified CSS selector(s) in the document.
In this case the first <p> element in the document where 
the parent is a <div> element. it gives you the input inside of the celcius div or the faharenheit one*/

const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');

function celciusToFahrenheit() {
    /*The if checks that if there is no number in the celcius div
    or it has been deleted so it doesn't show any number, the fahrenheit value should
    also be updated to not show any values. Else, executes the convertion in real time*/
    if(celciusInput.value == ''|| Number(celciusInput.value)== Math.NaN) {
        fahrenheitInput.value = "";
        return;
    }
//it's gonna read the input value typed in the div;
const celciusTempterature = celciusInput.value; 
//convertion from celcius to fahrenheit formula
const fahrenheitTemperature = (celciusTempterature * 1.8) + 32;
//it shows directly the converstion of celcius on the
//fahrenheit div
fahrenheitInput.value =roundNumber(fahrenheitTemperature);
colorChange();
}

function fahrenheitToCelcius() {
    if(fahrenheitInput.value == ''|| Number(fahrenheitInput.value)== Math.NaN) {
        celciusInput.value = "";
        return;
    }
const fahrenheitTemperature = fahrenheitInput.value;
const celciusTempterature = (fahrenheitTemperature -32) / 1.8;
celciusInput.value = roundNumber(celciusTempterature);
colorChange();
}

/*This function is to avoid the massive amount of decimal points
when converting celcius to fahrenheit. It roundes it and move the decimal point
to the left */
function roundNumber (number){
    return Math.round(number*100)/100;
}

function colorChange() {
    if (celciusInput.value < 4){
        celciusInput.style.color = "blue";
        fahrenheitInput.style.color = "blue";
    } else if (celciusInput.value > 27){ 
        celciusInput.style.color = "red";
        fahrenheitInput.style.color = "red";
    }else {
        celciusInput.style.color = "white";
        fahrenheitInput.style.color = "white";
    }
}

/*Event handler for reacting to the input field 
when the user inputs celcius or fahrenheit, to the click in the div.
it calls the celcius to fahrenheit function from above and viceversa.
the eventlistener logs the value whenever you 
change the value of the <input> element*/
function main(){
    celciusInput.addEventListener('input', celciusToFahrenheit);
    fahrenheitInput.addEventListener('input', fahrenheitToCelcius);
}

main();