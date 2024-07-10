var popup = document.querySelector(".modal_feedback");
var link = document.querySelector(".btn_feedback");
var closeButton = document.querySelector(".modal_close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
var overlay = document.querySelector(".popup_overlay");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по ссылке форма обратной связи");
  popup.classList.add("modal_show");
  overlay.classList.add("popup_overlay_show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

closeButton.addEventListener("click", function(evt) {
  console.log("Клик по кнопке закрыть")
  evt.preventDefault();
  popup.classList.remove("modal_show");
  overlay.classList.remove("popup_overlay_show");
  popup.classList.remove("modal_error");
});

overlay.addEventListener ("click", function() {
  console.log("Клик снаружи модала");
  popup.classList.remove("modal_show");
  overlay.classList.remove("popup_overlay_show");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal_error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal_error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal_show")) {
      console.log("Закрытие по ESC");
      popup.classList.remove("modal_show");
      overlay.classList.remove("popup_overlay_show");
      popup.classList.remove("modal_error");
    }
  }
});
