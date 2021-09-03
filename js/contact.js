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
function validatePost(input) {
    const reg = new RegExp(/<([^"]+)>/);
    let arr = [];
    input.forEach(elem => {
        if (elem.length > 0) {
           if (reg.test(elem)) {
               arr.push(false);
           } else {
               arr.push(true);
           }
        } else if (elem.length === 0) {
            arr.push(false);
        }
    });
    return arr.includes(false);
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
    bot.value.length <= 0 && !validatePost([fullname.value, company.value, message.value]) ? submitForm() : errorAndClear();
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