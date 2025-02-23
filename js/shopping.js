
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").onsubmit = function (event) {

        let emailField = document.querySelector("input[name='email']");
        let commentField = document.querySelector("textarea[name='comment']");
        let email = emailField.value.trim();
        let comment = commentField.value.trim();

        document.querySelectorAll(".error-message").forEach(el => el.remove());
        emailField.style.border = "";
        commentField.style.border = "";

        let valid = true;

        if (!email) {
            displayError(emailField, "Email is required.")
            valid = false;
        } else if (email.length < 6 || email.length >= 15 || !email.includes("@")) {
            displayError(emailField, "Email must be between 6 and 15 characters long and contain @.");
            valid = false;
        }
        if (!comment) {
            displayError(commentField, "Comment required.");
            valid = false;
        } else if (comment.length > 50) {
            comment = comment.substring(0, 50);
        }

        if (!valid) {
            event.preventDefault();
            return false;
        }

        alert("Email: " + email);
        alert("Comment: " + comment);
    };

    function displayError(field, message) {
        let error = document.createElement("span");
        error.className = "error-message";
        error.style.color = "red";
        error.innerHTML = message;
        field.style.border = "2px solid red";
        field.parentNode.appendChild(error);
    }

});

document.addEventListener("DOMContentLoaded", setupEventListeners);

function setupEventListeners() {
    let typeSelect = document.getElementById("type");
    let yearsInput = document.getElementById("years")
    let submitButton = document.getElementById("submit");

    typeSelect.addEventListener("input", updateCost);
    yearsInput.addEventListener("input", updateCost);
    }

//Hinnan laskeminen
function updateCost() {
    let prices = {
        basic: 10,
        premium: 15,
        gold: 20,
        platinum: 25
    };

    let typeSelect = document.getElementById("type");
    let yearsInput = document.getElementById("years");
    let costInput = document.getElementById("cost");
    let discountMessage = document.getElementById("span_discount");

    let selectedType = typeSelect.value;
    let numberOfYears = parseInt(yearsInput.value, 10);

    let totalCost = prices[selectedType] * numberOfYears;

// Alennuksen lasku
    if (numberOfYears > 1) {
        totalCost *= 0.8;
        discountMessage.textContent = "You got 20% discount for selecting more than 1 years :)!";
    }

    if (numberOfYears >= 5) {
        totalCost -= 5;
        discountMessage.textContent = "You got additional 5 $ discount for selecting atleast 5 years :)!";
    }
    costInput.value = "$" + totalCost;
}

function calculate() {
    'use strict';

    
    var total;

    
    var quantity = parseInt(document.getElementById('quantity').value); // add value

    var price = parseFloat(document.getElementById('price').value);
    var tax = parseFloat(document.getElementById('tax').value); // add value
    var discount = parseFloat(document.getElementById('discount').value); //add value
    var shipping = parseFloat(document.getElementById('shipping').value); // add shipping

    // Add validation here later!
    if (isNaN(quantity) || isNaN(price) || isNaN(tax) || isNaN(discount) || isNaN(shipping)) {
        alert("Please enter valid numbers in all fields.");
        return false;
    }

    
    total = quantity * price;
    console.log("total before tax: " + total);


    tax = tax / 100;
    tax = tax + 1;

    total = total * tax;
    console.log("total after tax: " + total);

    if (quantity > 100) {
        total = total - (2 * discount);
    } else {

        total = total - discount;
    }
    total = total + (1.0 * shipping);
    console.log("total after discount: " + total);

    document.getElementById('total').value = total;

    return false;

} 

function init() {
    'use strict';

    // Add an event listener to the form:

    var theForm = document.getElementById('theForm');
    theForm.addEventListener("submit", function (e) {
        if (!calculateMembership()) {
            // Prevent to upload the page 
            e.preventDefault();
        }
    });
}

// End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;

function hiddenExtra() {

    var xtra = document.getElementById("extraField");

    xtra.style.display = "block";

    var selection = document.forms.extra.cont.selectedIndex;
    if (selection == 0 || selection == 2) {
        document.getElementById("extra_text").innerHTML = "Phone number: ";

    } else {
        document.getElementById("extra_text").innerHTML = "E-mail address: ";
        return false;
    }
}

var x = document.getElementById("extraField");
x.style.display = "none";