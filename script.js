document.querySelector("#temp-form").addEventListener('submit', function(event) {
    event.preventDefault();

    let convertedTemp = null;

    const temp = parseFloat(document.getElementById('temp').value);
    const selectedUnit = document.querySelector('input[name="selected-unit"]:checked').value;
    const conversionUnit = document.querySelector('input[name="conversion-unit"]:checked').value;

    let result;

    if(selectedUnit === conversionUnit){
        convertedTemp = temp;
    }

    else if(selectedUnit === 'Celsius'){
        if(conversionUnit === 'Fahrenheit'){
            convertedTemp =(temp * 9/5) + 32;
        }
        else if(conversionUnit === 'Kelvin'){
            convertedTemp = temp + 273.15;
        }
    }

    else if(selectedUnit === 'Fahrenheit'){
        if (conversionUnit === 'Celsius') {
            convertedTemp = (temp - 32) * 5/9;
        } else if (conversionUnit === 'Kelvin') {
            convertedTemp = (temp - 32) * 5/9 + 273.15;
        }
    }

    else if (selectedUnit === 'Kelvin') {
        if (conversionUnit === 'Celsius') {
            convertedTemp = temp - 273.15;
        } else if (conversionUnit === 'Fahrenheit') {
            convertedTemp = (temp - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById('output-temp').value = convertedTemp.toFixed(2);

})