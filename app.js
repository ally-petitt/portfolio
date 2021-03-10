// move navbar underline on scroll
window.addEventListener("scroll", checkLocation);

const underline = document.querySelector(".underline");
let navbarIsSmall = false;

function checkLocation() {
  checkNavbarSize();
  checkHomeLocation();
  checkProjectsLocation();
  checkContactLocation();
  console.log(underline.style.right);
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
      console.log("small navbar");
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
      console.log("small navbar");
    }
  }
}

function checkContactLocation() {
  const contact = document.querySelector("#contact");
  const verticalDistance = Math.abs(contact.getBoundingClientRect().top);
  console.log(verticalDistance);
  if (verticalDistance <= 285) {
    if (navbarIsSmall == false) {
      underline.style.right = "32px";
    } else {
      console.log("small navbar");
    }
  }
}

// show different images for a small screen
// document.addEventListener("DOMContentLoaded", () => {
//   if (screen.width <= 707) {
//     changeProjectPhotos();
//   } else {
//     restoreLargePhotos();
//   }
// });

// window.addEventListener("resize", () => {
//   if (screen.width <= 707) {
//     changeProjectPhotos();
//   } else {
//     restoreLargePhotos();
//   }
// });

// let amazon = document.querySelector(".amazon-img");
// let sudoku = document.querySelector(".sudoku-img");
// let todo = document.querySelector(".todo-img");
// let countingMusic = document.querySelector(".music-img");

// function changeProjectPhotos() {
//   redefineProjects();
//   amazon.setAttribute("src", "photos/amazon-small.jpg");
//   sudoku.setAttribute("src", "photos/sudoku-small.jpg");
//   todo.setAttribute("src", "photos/todo-small.png");
//   countingMusic.setAttribute("src", "photos/music-small.jpg");
// }

// function restoreLargePhotos() {
//   amazon.setAttribute("src", "photos/amazon-logo.png");
//   sudoku.setAttribute("src", "photos/sudoku.jpg");
//   todo.setAttribute("src", "photos/todo-list.jpeg");
//   countingMusic.setAttribute("src", "photos/counting-music.jpg");
// }

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
