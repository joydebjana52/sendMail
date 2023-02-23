// Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// )

const form = document.querySelector(".contact_form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const msg = document.querySelector(".msg");
const btn = document.getElementById("submit");

btn.addEventListener('click',sendMail);

function sendMail()
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "janajoydeb083@gmail.com",
        Password : "Joydeb#1234567",
        To : 'khokanjana840@gmail.com',
        From : "janajoydeb083@gmail.com",
        Subject : "Demo",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

// Function to send email...
// Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );