function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusInput = document.getElementById("celsius");
    
    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
      var celsiusValue = (fahrenheitValue - 32) * (5 / 9);
      celsiusInput.value = celsiusValue.toFixed(2);
    }
  }
  
  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
  
    var celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
      var fahrenheitValue = (celsiusValue * 9 / 5) + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
  }