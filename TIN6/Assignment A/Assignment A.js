// a)	Write a JS function that will
// convert temperatures between Celsius and Fahrenheit scales
// (https://en.wikipedia.org/wiki/Fahrenheit) ,
// taking input from a form on the page and
// printing output to a field on the same page.
// Function should be invoked using HTML button.

function convertTemp() {
    const fahrenheit = document.forms.converter.fahrenheit.value
    const celsius = document.forms.converter.celsius.value

    document.getElementById("celsiusVal").innerText = `${(fahrenheit - 32) * 5 / 9}` + " °C"
    document.getElementById("fahrenheitVal").innerText = `${celsius * 9 / 5 + 32}` + " °F"
}