let emailInput = document.querySelector(".email-input");
const submitButton = document.querySelector(".btn");
const errorMessage = document.querySelector(".error-message");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitButton.addEventListener("click", (e) => {
    if (!emailInput.value.match(mailformat)) {
        e.preventDefault();
        errorMessage.innerHTML = "Please provide a valid email address"
        emailInput.style.border = "1px solid #ff0000";
        return false;
    } else {
        errorMessage.innerHTML = ""
        emailInput.style.border = "1px solid var(--clr-email)";
        return true;
    }
})


