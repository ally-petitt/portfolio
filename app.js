// header underline

// show different images for a small screen
document.addEventListener("DOMContentLoaded", () => {
  if (screen.width <= 707) {
    changeProjectPhotos();
  } else {
    restoreLargePhotos();
  }
});

window.addEventListener("resize", () => {
  if (screen.width <= 707) {
    changeProjectPhotos();
  } else {
    restoreLargePhotos();
  }
});

const amazon = document.querySelector(".amazon-img");
const sudoku = document.querySelector(".sudoku-img");
const todo = document.querySelector(".todo-img");
const countingMusic = document.querySelector(".music-img");

function changeProjectPhotos() {
  amazon.setAttribute("src", "photos/amazon-small.jpg");
  sudoku.setAttribute("src", "photos/sudoku-small.jpg");
  todo.setAttribute("src", "photos/todo-small.png");
  countingMusic.setAttribute("src", "photos/music-small.jpg");
}

function restoreLargePhotos() {
  amazon.setAttribute("src", "photos/amazon-logo.png");
  sudoku.setAttribute("src", "photos/sudoku.jpg");
  todo.setAttribute("src", "photos/todo-list.jpeg");
  countingMusic.setAttribute("src", "photos/counting-music.jpg");
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
