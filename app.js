// move navbar underline on scroll
window.addEventListener("scroll", checkLocation);
//and make sure it is positioned from the start
document.addEventListener("DOMContentLoaded", checkLocation);

const underline = document.querySelector(".underline");
let navbarIsSmall = false;

function checkLocation() {
  checkNavbarSize();
  checkHomeLocation();
  checkProjectsLocation();
  checkContactLocation();
}

function checkNavbarSize() {
  screen.width <= 576 ? (navbarIsSmall = true) : (navbarIsSmall = false);
}

function checkHomeLocation() {
  const home = document.querySelector("#hero");
  const verticalDistance = Math.abs(home.getBoundingClientRect().top);
  if (verticalDistance <= 80) {
    if (navbarIsSmall == false) {
      underline.style.right = "230px";
    } else {
      underline.style.right = "212px";
    }
  }
}

function checkProjectsLocation() {
  const projects = document.querySelector(".projects");
  const verticalDistance = projects.getBoundingClientRect().top;
  if (verticalDistance > -286 && verticalDistance < 500) {
    if (navbarIsSmall == false) {
      underline.style.right = "137px";
    } else {
      underline.style.right = "119px";
    }
  }
}

function checkContactLocation() {
  const contact = document.querySelector("#contact");
  const verticalDistance = Math.abs(contact.getBoundingClientRect().top);
  if (verticalDistance <= 285) {
    if (navbarIsSmall == false) {
      underline.style.right = "32px";
    } else {
      underline.style.right = "13px";
    }
  }
}

//trigger contact form and footer animation
const form = document.querySelector(".form-container");
window.onscroll = () => {
  addFormAnimation();
  addFooterAnimation();
};

function addFormAnimation() {
  let formPosition = form.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if (formPosition < screenPosition / 1.3) {
    form.classList.add("flipDown");
  }
}

const pElement = document.querySelector("footer p");
function addFooterAnimation() {
  let pPosition = pElement.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if (pPosition < screenPosition / 1.3) {
    pElement.classList.add("fadeUp");
  }
}

// contact form
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("contact-form");
  var button = document.getElementById("submit-btn");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    status.style.display = "inline-block";
    status.innerHTML = "Your message was delivered!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
