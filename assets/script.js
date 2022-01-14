//DOM Element

var input;
var confirmUpper;
var confirm;
var confirmLower;
var confirmSym;
var symbols = "!@#$%^&*_-+=";

symbol = symbols[Math.floor(Math.random() * symbols.length)];
lower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
upper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
number = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

// DOM Element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    password = generatePassword();
    document.getElementById("password");
});


// Start function to generate password
function generatePassword() {
    // Prompt to select password length
    enter = parseInt(prompt("How long would you like your password? Choose between 8 and 128"));
    // Required user value 
    if (!enter) {
        alert("A value is required");
    } else if (enter < 8 || enter > 128) {
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmUpper = confirm("Will this contain Uppercase letters?");
        confirm = confirm("Will this contain Lowercase letters?");
        confirmLower = confirm("Will this contain numbers?");
        confirmSym = confirm("Will this contain special symbols?");
    };

    // Else if for 4 negative options
    if (!confirmSym && !confirmLower && !confirmUpper && !confirm) {
        input = alert("Choose criteria");

    }
    // If statements covering all possible outcomes
    // Else if for 4 positive options
    else if (confirmSym && confirmLower && confirmUpper && confirm) {

        input = symbol.concat(number, lower, upper);
    }
    // Else if for 3 positive options
    else if (confirmSym && confirmLower && confirmUpper) {
        input = symbol.concat(number, upper);
    }
    else if (confirmSym && confirmLower && confirm) {
        input = symbol.concat(number, lower);
    }
    else if (confirmSym && confirm && confirmUpper) {
        input = symbol.concat(lower, upper);
    }
    else if (confirmLower && confirm && confirmUpper) {
        input = number.concat(lower, upper);
    }
    // Else if for 2 positive options 
    else if (confirmSym && confirmLower) {
        input = symbol.concat(number);

    } else if (confirmSym && confirm) {
        input = symbol.concat(lower);

    } else if (confirmSym && confirmUpper) {
        input = symbol.concat(upper);
    }
    else if (confirm && confirmLower) {
        input = lower.concat(number);

    } else if (confirm && confirmUpper) {
        input = lower.concat(upper);

    } else if (confirmLower && confirmUpper) {
        input = number.concat(upper);
    }
    // Else if for 1 positive option
    else if (confirmSym) {
        input = symbol;
    }
    else if (confirmLower) {
        input = number;
    }
    else if (confirm) {
        input = lower;
    }

    else if (confirmUpper) {
        input = upper;
    };

    // Variable for password length
    var password = [];

}


