
const form = document.getElementById("contactForm");
const inputs = form.querySelectorAll("input, textarea");

function validateInput(input) {
    if (input.checkValidity()) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
}

inputs.forEach(function(input) {
    input.addEventListener("input", function() {
        validateInput(input);
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    inputs.forEach(function(input) {
        validateInput(input);
    });
});
