
const form = document.getElementById("contactForm");

if (form) {
    const fields = form.querySelectorAll("input, textarea");
    const successMessage = document.getElementById("successMessage");

    function validateField(field) {
        if (field.checkValidity()) {
            field.classList.add("is-valid");
            field.classList.remove("is-invalid");
        } else {
            field.classList.add("is-invalid");
            field.classList.remove("is-valid");
        }
    }

    fields.forEach(function(field) {
        field.addEventListener("input", function() {
            validateField(field);
            successMessage.classList.add("d-none");
        });
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        fields.forEach(function(field) {
            validateField(field);
        });

        if (form.checkValidity()) {
            successMessage.classList.remove("d-none");
        } else {
            successMessage.classList.add("d-none");
        }
    });
}
