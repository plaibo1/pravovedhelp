"use strict";

window.onload = function () {
  lax.init();

  lax.addDriver(
    "scrollY",
    function () {
      return window.scrollY;
    },
    { inertiaEnabled: true }
  );

  AOS.init();
};

// ==== slow scroll ==== //
function slowScroll(id) {
  "use strict";
  var offset = 50;
  var newOffset = parseInt(offset, 10);
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - newOffset,
    },
    500
  );
  return false;
}
// ==== slow scroll ==== //

// ======== phone mask ========= //
$(document).ready(function () {
  $(".phoneMask").mask("+7 (999) 999-99-99");
});
// ======== phone mask ========= //

// ================== validate forms ================== //
let validateForms = function (selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    messages: {
      tel: { required: "Введите номер телефона" },
      person: { required: "Введите имя" },
      email: { required: "Введите почту", email: "Введено некорректно" },
      check_box: { required: "Вы не согласились на обработку данных" },
    },
  });
};

validateForms(".form", {
  email: {
    required: true,
    email: true,
  },
  person: { required: true },
  tel: { required: true },
  check_box: { required: true },
});

validateForms(".form-1", {
  email: {
    required: true,
    email: true,
  },
  person: { required: true },
  tel: { required: true },
  check_box: { required: true },
});

validateForms(".form-2", {
  email: {
    required: true,
    email: true,
  },
  person: { required: true },
  tel: { required: true },
  check_box: { required: true },
});
// ================== validate forms ================== //

// ========== top right button ========== //
function showBtn() {
  const btn = document.querySelector(".btn-main-call");

  window.addEventListener("scroll", function () {
    if (pageYOffset > 550) {
      btn.classList.remove("hide");
    } else {
      btn.classList.add("hide");
    }
  });
}
showBtn();
// ========== top right button ========== //

// ========== navbar toggler ========== //
function navToggler() {
  document.querySelector(".nav-icon").addEventListener("click", function () {
    this.classList.toggle("open");
  });
}
navToggler();
// ========== navbar toggler ========== //

// =====================popup================ //
jQuery(document).ready(function ($) {
  //open popup
  $(".callPopUp").on("click", function (event) {
    event.preventDefault();
    $("#popup").addClass("show");
    document.body.style.overflow = "hidden";
  });

  //close popup
  $("#popup").on("click", function (event) {
    if ($(event.target).is(".popup-close") || $(event.target).is("#popup")) {
      event.preventDefault();
      $(this).removeClass("show");
      document.body.style.overflow = "visible";
    }
  });
});
// =====================popup================ //

// ========= debt swiper ========= //
let swiper = new Swiper(".debtSwiper", {
  slidesPerView: 2,
  spaceBetween: 45,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    544: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
// ========= debt swiper ========= //

// ========= debt slider ========= //

function debtDocSlider() {
  let i = 0;

  const container = document.querySelector(".debtDocSlider");
  const wrap = document.querySelector(".debtDocSlider__wrap");

  const prev = document.querySelector(".debtDocSlider__nav__prev");
  const next = document.querySelector(".debtDocSlider__nav__next");
  const counter = document.querySelector(".debtDocSlider__nav__counter");
  const slides = document.querySelectorAll(".debtDocSlider__wrap__slide");

  const docs = document.querySelectorAll(".debtSwiper__card__img");

  const pdfDocs = document.querySelectorAll(
    ".debtDocSlider__wrap__slide iframe"
  );

  // ==== open slider
  for (let k = 0; k < docs.length; k++) {
    docs[k].setAttribute("whatSlideData", k);

    docs[k].addEventListener("click", function () {
      document.body.style.overflow = "hidden";

      container.classList.add("show");

      i = +this.getAttribute("whatSlideData");
      slidesCounter();

      slides[this.getAttribute("whatSlideData")].classList.add("active");

      setTimeout(() => {
        container.style.transform = "translateY(0)";
        container.style.opacity = 1;
        setTimeout(() => {
          container.classList.add("blur");
        }, 200);
      }, 300);
    });
  }

  // ==== close slider
  const closeMenu = () => {
    slides.forEach((element) => {
      element.classList.remove("active");
    });

    document.body.style.overflow = "visible";
    container.classList.remove("blur");

    setTimeout(() => {
      container.style.transform = "translateY(-300px)";
      container.style.opacity = 0;
      setTimeout(() => {
        container.classList.remove("show");
      }, 200);
    }, 300);
  };

  wrap.addEventListener("click", function () {
    closeMenu();
  });

  // === closeOnSwipe
  swipeUp(closeMenu);

  // ==== next prev onclick
  function slidesCounter() {
    counter.innerHTML = `${i + 1}/${slides.length}`;
  }

  prev.addEventListener("click", function () {
    if (slides[i].classList.contains("active")) {
      if (i != 0) {
        slides[i].classList.remove("active");
        slides[i - 1].classList.add("active");
        i--;
      } else {
        slides[0].classList.remove("active");
        slides[slides.length - 1].classList.add("active");
        i = slides.length - 1;
      }

      slidesCounter();
    }
  });

  next.addEventListener("click", function () {
    if (slides[i].classList.contains("active")) {
      if (i != slides.length - 1) {
        slides[i].classList.remove("active");
        slides[i + 1].classList.add("active");
        i++;
      } else {
        slides[0].classList.add("active");
        slides[slides.length - 1].classList.remove("active");
        i = 0;
      }

      slidesCounter();
    }
  });
}
debtDocSlider();
// ========= debt slider ========= //

// ======= testimonialsSwiper ====== //
let testimonialsSwiper = new Swiper(".testimonialsSwiper", {
  slidesPerView: 3,
  spaceBetween: 45,
  grabCursor: true,
  // centeredSlides: true,
  pagination: {
    el: ".testimonialsSwiper-pagination",
    clickable: true,
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
// ======= testimonialsSwiper ====== //

function swipeUp(foo) {
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);
  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // чистый API JS
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /* отлавливаем разницу в движении */
      if (xDiff > 0) {
        /* swipe влево */
      } else {
        /* swipe вправо */
      }
    } else {
      if (yDiff > 0) {
        foo(); // swipe вверх
      } else {
        /* swipe вниз */
      }
    }
    /* свайп был, обнуляем координаты */
    xDown = null;
    yDown = null;
  }
}
