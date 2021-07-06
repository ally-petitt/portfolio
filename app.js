//and make sure it is positioned from the start
document.addEventListener("DOMContentLoaded", ()=> document.addEventListener("scroll", moveUnderline));

const underline = document.querySelector(".underline");
let navbarIsSmall = false;

function moveUnderline() {
  const navItems = ["hero","projects", "skills", "experience", "contact"];
  const underlineLocations = {
    hero: "436px",
    projects: "343px",
    skills: "251px",
    experience: "147px",
    contact: "32px"
  }

  const currentSection = findSection(navItems);
  if(currentSection) {
    const underline = document.querySelector('.underline')
    underline.style.right = underlineLocations[currentSection];
  }

}

// finds the section that the user is scrolling though
function findSection(navItems) {
  let elementsInViewport = [];
  for(let i=0; i<navItems.length; i++) {
    var el = document.getElementById(navItems[i]);
    var top = el.offsetTop;
    var height = el.offsetHeight;

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
    }

    if (top < (window.pageYOffset + window.innerHeight) &&
      (top + height - window.innerHeight/2) > window.pageYOffset) {
        elementsInViewport.push(navItems[i]);
    }
    
    if (window.pageYOffset < window.innerHeight/2) {
      return navItems[0]
    }
  }

  if (elementsInViewport.length === 1) {
    return elementsInViewport[0]
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


// TFG logo reverse animation
const tfgImgContainer = document.querySelector(".tfg-img-container")
const tfgLogo = document.querySelector(".tfg-logo");
const tfgDesc = document.querySelector(".tfg-desc")

tfgImgContainer.addEventListener("mouseout", () => {
  tfgLogo.classList.add("reverseFlipY")
  tfgDesc.classList.remove("fadeUp")
  tfgDesc.style.display = "none";
  tfgLogo.style.display = "block";
})
tfgImgContainer.addEventListener("mouseover", () => {
  tfgLogo.classList.remove("reverseFlipY")
  tfgDesc.classList.add("fadeUp")
    tfgDesc.style.display = "block";
    tfgLogo.style.display = "none";
})