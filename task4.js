
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    const inputs = registrationForm.querySelectorAll(
        "input[type='text'], input[type='email'], input[type='password'], select"
    );

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const genderInputs = registrationForm.querySelectorAll("input[name='gender']");
    const genderFeedback = document.getElementById("genderFeedback");
    const registrationSuccess = document.getElementById("registrationSuccess");

    function validateRegistrationField(field) {
        if (field === confirmPassword) {
            if (confirmPassword.value !== password.value) {
                confirmPassword.setCustomValidity("Passwords do not match");
            } else {
                confirmPassword.setCustomValidity("");
            }
        }

        if (field.checkValidity()) {
            field.classList.add("is-valid");
            field.classList.remove("is-invalid");
        } else {
            field.classList.add("is-invalid");
            field.classList.remove("is-valid");
        }
    }

    function validateGender() {
        const selected = registrationForm.querySelector("input[name='gender']:checked");

        if (selected) {
            genderFeedback.textContent = "Looks good!";
            genderFeedback.style.color = "green";
        } else {
            genderFeedback.textContent = "Please select your gender.";
            genderFeedback.style.color = "red";
        }
    }

    inputs.forEach(function(field) {
        field.addEventListener("input", function() {
            validateRegistrationField(field);

            if (field === password) {
                validateRegistrationField(confirmPassword);
            }

            registrationSuccess.classList.add("d-none");
        });
    });

    genderInputs.forEach(function(field) {
        field.addEventListener("change", function() {
            validateGender();
            registrationSuccess.classList.add("d-none");
        });
    });

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        inputs.forEach(function(field) {
            validateRegistrationField(field);
        });

        validateGender();

        if (registrationForm.checkValidity()) {
            registrationSuccess.classList.remove("d-none");
        } else {
            registrationSuccess.classList.add("d-none");
        }
    });

    registrationForm.addEventListener("reset", function() {
        inputs.forEach(function(field) {
            field.classList.remove("is-valid", "is-invalid");
            field.setCustomValidity("");
        });

        genderFeedback.textContent = "";
        registrationSuccess.classList.add("d-none");
    });
}
