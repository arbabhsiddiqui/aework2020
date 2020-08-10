const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");
const rep = document.querySelector("#rep");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

var name, email, number, message;

const send = document.querySelector("#query");

send.addEventListener("click", (e) => {
  e.preventDefault();

  name = document.querySelector("#name").value;
  email = document.querySelector("#email").value;
  number = document.querySelector("#number").value;
  message = document.querySelector("#message").value;

  var xhr = new XMLHttpRequest();
  var req =
    "name=" +
    name +
    "&number=" +
    number +
    "&email=" +
    email +
    "&message=" +
    message;
  xhr.open("POST", "message.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (this.responseText == "send") {
      name.value = "";
      email.value = "";
      number.value = "";
      message.value = "";
      rep.innerHTML = "Thank you for Contacting Us !";

      window.setTimeout(function () {
        // Move to a new location or you can do something else
        location.reload();
      }, 300);
    }
  };
  xhr.send(req);
});
