function convertTemperature() {
   const temperatureInput = document.getElementById('temperature').value;
   const unit = document.getElementById('unit').value;
   let convertedTemp;
   
   if (isNaN(temperatureInput)) {
     alert('Please enter a valid number for temperature!');
     return;
   }
   
   const temperature = parseFloat(temperatureInput);
   
   switch (unit) {
     case 'celsius':
       convertedTemp = celsiusToFahrenheit(temperature) + ' °F';
       break;
     case 'fahrenheit':
       convertedTemp = fahrenheitToCelsius(temperature) + ' °C';
       break;
     case 'kelvin':
       convertedTemp = kelvinToCelsius(temperature) + ' °C';
       break;
     default:
       break;
   }
   
   document.getElementById('result').textContent = `Converted temperature: ${convertedTemp}`;
 }
 
 function celsiusToFahrenheit(celsius) {
   return (celsius * 9/5) + 32;
 }
 
 function fahrenheitToCelsius(fahrenheit) {
   return (fahrenheit - 32) * 5/9;
 }
 
 function kelvinToCelsius(kelvin) {
   return kelvin - 273.15;
 }
 