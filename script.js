const getValue = () => {
    let binary = document.getElementById('binary').value.trim(); // Remove extra spaces

    // Check if input is empty
    if (binary === "") {
        document.getElementById('decimal').value = ""; // Clear output
        return;
    }

    // Validate that input only contains 0s and 1s
    if (!/^[01]+$/.test(binary)) {
        alert("Please enter a valid binary number (only 0s and 1s).");
        document.getElementById('binary').value = ""; // Clear invalid input
        document.getElementById('decimal').value = ""; // Clear output
        return;
    }

    // Convert binary to decimal
    let decimalValue = parseInt(binary, 2);
    console.log("Decimal Value:", decimalValue);

    // Update the output field
    document.getElementById('decimal').value = decimalValue;
};
