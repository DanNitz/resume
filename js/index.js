import ContactForm from "./Contact.js";


const formInfo = document.getElementById("formInfo");

let hasDevJob = false;
if (hasDevJob) {
    //I have a Dev job
    showMessage("Thanks for stopping by, I am currently employed.")
} else {
    //I need a job!
    showMessage("Please take a look around, I am currently seeking a Dev position. Thanks for coming!");
}

let today = new Date(0);
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since it's the weekend, please be patient with my returning your email. Thanks!");
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" +message+ "</p>";
}

function clearMessage() {
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const contact = new ContactForm(contactForm);
    contact.send();
});