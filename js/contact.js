//Grab the inputs
let fullname = document.getElementById("fullName");
let company = document.getElementById("company");
let email = document.getElementById("emailAddress");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
let bot = document.getElementById("bot-field");
//Put success or error message here:
let dispDiv = document.getElementById("messageContainer");
//Success Message:
let successMessage = "Your message has been sent. Thank you!";
//Failure Message:
let failureMessage =
    "Your message has not been sent. Please try again later.";
//Grab the form
let contactForm = document.getElementById("contact-form");
function validateMessage(input) {
    const reg = new RegExp(/<([^"]+)>/);
    return reg.test(input);
};
function errorAndClear() {
    dispDiv.innerText = failureMessage;
    fullname.value = "";
    company.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
}
function successAndClear() {
    dispDiv.innerText = successMessage;
    fullname.value = "";
    company.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
}
//Add event listener
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    bot.value.length > 0 || validateMessage(message.value) ? errorAndClear() : submitForm();
});

//Submit function:
function submitForm() {
    let formData = new FormData(contactForm);
    try {
        fetch("inc/contact-process.php", {
            method: "POST",
            body: formData,
        }).then((res) => {
            if (res.status !== 404) {
                successAndClear();
            } else {
                errorAndClear();
            }
        });
    } catch (error) {
        errorAndClear();
    }
}