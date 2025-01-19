// Get the HTML element with the ID "display" and store it in the variable `display`.
const display = document.getElementById("display");

// Function to append a given input to the display
function appendToDisplay(input) {
    // Add the input value to the current value of the display
    display.value += input;
}

// Function to clear the display
function clearDisplay() {
    // Set the display value to an empty string, effectively clearing it
    display.value = "";
}

// Function to evaluate the expression entered in the display
funct
