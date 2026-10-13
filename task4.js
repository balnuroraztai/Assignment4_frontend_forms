
const form = document.getElementById("registrationForm");
const inputs = form.querySelectorAll("input:not([type='checkbox']):not([type='radio']), select");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const genderInputs = form.querySelectorAll("input[name='gender']");
const genderFeedback = document.getElementById("genderFeedback");

function validateInput(input) {
    if (input.checkValidity()) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}

function validatePasswordConfirmation() {
    if (confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Passwords must match.");
    }

    validateInput(confirmPassword);
}

function validateGender() {
    const selected = form.querySelector("input[name='gender']:checked");

    genderInputs.forEach(function(input) {
        input.classList.remove("is-valid", "is-invalid");
    });

    if (selected) {
        selected.classList.add("is-valid");
        genderFeedback.textContent = "Looks good!";
        genderFeedback.style.color = "green";
    } else {
        genderInputs.forEach(function(input) {
            input.classList.add("is-invalid");
        });

        genderFeedback.textContent = "Please select your gender.";
        genderFeedback.style.color = "red";
    }
}

inputs.forEach(function(input) {
    input.addEventListener("input", function() {
        validateInput(input);

        if (input === password || input === confirmPassword) {
            validatePasswordConfirmation();
        }
    });

    input.addEventListener("change", function() {
        validateInput(input);
    });
});

genderInputs.forEach(function(input) {
    input.addEventListener("change", function() {
        validateGender();
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    inputs.forEach(function(input) {
        validateInput(input);
    });

    validatePasswordConfirmation();
    validateGender();
});

form.addEventListener("reset", function() {
    inputs.forEach(function(input) {
        input.classList.remove("is-valid", "is-invalid");
        input.setCustomValidity("");
    });

    genderInputs.forEach(function(input) {
        input.classList.remove("is-valid", "is-invalid");
    });

    genderFeedback.textContent = "";
});
