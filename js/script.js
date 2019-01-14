var write_us_link =document.querySelector(".button-contacts");
var write_us = document.querySelector(".modal-write-us");
var close = write_us.querySelector(".modal-close");

var promo_slide_1 = document.querySelector(".promo-slide-1");
var promo_slide_2 = document.querySelector(".promo-slide-2");
var promo_slide_3 = document.querySelector(".promo-slide-3");

var slide_promo1_1 = promo_slide_1.querySelector(".slider-controls-item--1");
var slide_promo1_2 = promo_slide_1.querySelector(".slider-controls-item--2");
var slide_promo1_3 = promo_slide_1.querySelector(".slider-controls-item--3");

var slide_promo2_1 = promo_slide_2.querySelector(".slider-controls-item--1");
var slide_promo2_2 = promo_slide_2.querySelector(".slider-controls-item--2");
var slide_promo2_3 = promo_slide_2.querySelector(".slider-controls-item--3");

var slide_promo3_1 = promo_slide_3.querySelector(".slider-controls-item--1");
var slide_promo3_2 = promo_slide_3.querySelector(".slider-controls-item--2");
var slide_promo3_3 = promo_slide_3.querySelector(".slider-controls-item--3");


var form_write_us = write_us.querySelector(".write-us-form");
var user_name = write_us.querySelector("[name=user-name]");
var user_email = write_us.querySelector("[name=user-email]");
var user_text = write_us.querySelector("[name=user-text]");

var isStorageSupport = true;
var storage_user_name = "";
var storage_user_email = "";

var delivery = document.querySelector(".delivery");
var warranty = document.querySelector(".warranty");
var credit = document.querySelector(".credit");

var slide_delivery = document.querySelector(".slide-delivery");
var slide_warranty = document.querySelector(".slide-warranty");
var slide_credit = document.querySelector(".slide-credit");
var   index_slide_promo=0;
var   index_slide_servises=0;

delivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  delivery.classList.add("active-servises");
  slide_delivery.classList.add("servis-slide-flex");

  if (slide_warranty.classList.contains("servis-slide-flex")) {
    slide_warranty.classList.remove("servis-slide-flex");
    warranty.classList.remove("active-servises");
  }
  if (slide_credit.classList.contains("servis-slide-flex")) {
    slide_credit.classList.remove("servis-slide-flex");
    credit.classList.remove("active-servises");
  }
});

warranty.addEventListener("click", function (evt) {
  evt.preventDefault();
  warranty.classList.add("active-servises");
  slide_warranty.classList.add("servis-slide-flex");

  if (slide_delivery.classList.contains("servis-slide-flex")) {
    slide_delivery.classList.remove("servis-slide-flex");
    delivery.classList.remove("active-servises");
  }
  if (slide_credit.classList.contains("servis-slide-flex")) {
    slide_credit.classList.remove("servis-slide-flex");
    credit.classList.remove("active-servises");
  }
});

credit.addEventListener("click", function (evt) {
  evt.preventDefault();
  credit.classList.add("active-servises");
  slide_credit.classList.add("servis-slide-flex");

  if (slide_delivery.classList.contains("servis-slide-flex")) {
    slide_delivery.classList.remove("servis-slide-flex");
    delivery.classList.remove("active-servises");
  }
  if (slide_warranty.classList.contains("servis-slide-flex")) {
    slide_warranty.classList.remove("servis-slide-flex");
    warranty.classList.remove("active-servises");
  }
});

slide_promo1_2.addEventListener("click", function (evt) {
  evt.preventDefault();
  promo_slide_1.classList.remove("slider-list-display-block");
  promo_slide_2.classList.add("slider-list-display-block");
});

slide_promo1_3.addEventListener("click", function (evt) {
  evt.preventDefault();
  promo_slide_1.classList.remove("slider-list-display-block");
  promo_slide_3.classList.add("slider-list-display-block");
});

slide_promo2_1.addEventListener("click", function (evt) {
  evt.preventDefault();
  promo_slide_2.classList.remove("slider-list-display-block");
  promo_slide_1.classList.add("slider-list-display-block");
});

slide_promo2_3.addEventListener("click", function (evt) {
  evt.preventDefault();
  promo_slide_2.classList.remove("slider-list-display-block");
  promo_slide_3.classList.add("slider-list-display-block");
});

slide_promo3_1.addEventListener("click", function (evt) {
  evt.preventDefault();
  promo_slide_3.classList.remove("slider-list-display-block");
  promo_slide_1.classList.add("slider-list-display-block");
});

slide_promo3_2.addEventListener("click", function (evt) {
  evt.preventDefault();
  promo_slide_3.classList.remove("slider-list-display-block");
  promo_slide_2.classList.add("slider-list-display-block");
});


try {
  storage_user_name = localStorage.getItem("user_name");
  storage_user_email = localStorage.getItem("user_email");
} catch (err) {
  isStorageSupport = false;
}

write_us_link.addEventListener ("click", function (evt) {
  evt.preventDefault();
  console.log ("2");
  write_us.classList.add("modal-show");
  user_name.focus();

  if (storage_user_name) {
    user_name.value = storage_user_name;
    user_email.focus();
  }
  if (storage_user_email) {
    user_email.value = storage_user_email;
    user_text.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  write_us.classList.remove("modal-show");
  write_us.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (write_us.classList.contains("modal-show")) {
      write_us.classList.remove("modal-show");
      write_us.classList.remove("modal-error");

    }
  }
});

form_write_us.addEventListener("submit", function (evt) {
  if (!user_name.value || !user_email.value || !user_text.value) {
    evt.preventDefault();

    write_us.classList.remove("modal-error");
    write_us.offsetWidth = write_us.offsetWidth;
    write_us.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user_name", user_name.value);
      localStorage.setItem("user_email", user_email.value);
    }
  }
});


var small_map = document.querySelector(".map");
var modal_map = document.querySelector(".modal-map");
var close_map = modal_map.querySelector(".modal-close");

small_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_map.classList.add("modal-show");
});

close_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal_map.classList.contains("modal-show")) {
      modal_map.classList.remove("modal-show");
    }
  }
});
