$(document).ready(function () {
  wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: false,
    live: false,
  });
  wow.init();
  // boxClass: Имя класса, которое показывает скрытое поле при прокрутке.
  // animateClass: Имя класса, который запускает CSS анимацию
  // offset: Определяет расстояние между нижней частью окна браузера и верхней частью скрытого окна.
  // Когда страница прокручивается и достигает этого расстояния, открывается скрытое поле и запускается анимация.
  // mobile: Включает и выключает WOW.js на мобильных устройствах.
  // live: Действие с асинхронно загруженным содержимым.

  $('a[href^="#"]').click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top - 300 }, 600);
    return false;
  });

  /* Apply fancybox to multiple items */
  $("a.popup-img").fancybox({
    transitionIn: "elastic",
    transitionOut: "elastic",
    speedIn: 600,
    speedOut: 200,
    overlayShow: false,
  });

  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="prev-arr"></button>',
    nextArrow: '<button class="next-arr"></button>',
    // autoplay: true,
    // centerMode: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
    dotsClass: "dots-style",
    // adaptiveHeight: true,
  });

  $(".slider1").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="prev-arr"></button>',
    nextArrow: '<button class="next-arr"></button>',
    fade: true,
    cssEase: "linear",
  });

  let header = $(".desktop-nav"),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
      header.addClass("out");
    } else {
      header.removeClass("out");
    }
    scrollPrev = scrolled;
  });

  $(".comment-bottom").each(function () {
    let more = $(this).find(".btn-more");
    let hide = $(this).find(".hide-content");
    hide.hide();
    more.click(function () {
      hide.slideToggle();
      // more.text(more.text() == "Arrollar" ? "Leer más" : "Arrollar");
      more.css("display", "none");
    });
  });

  $(".glow-button").on("click", function () {
    $(".item").addClass("item-show");
    // $(".shine-button").addClass("show");
    $(".glow-button").css("display", "none");
  });

  $(".sh-lang").on("click", function (event) {
    event.preventDefault();
    $("#sh").css("display", "block");
    $("#en").css("display", "none");

    $(".slider3").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="prev-arr"></button>',
      nextArrow: '<button class="next-arr"></button>',
      // autoplay: true,
      // centerMode: true,
      // autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
      dotsClass: "dots-style",
      // adaptiveHeight: true,
    });

    $(".slider2").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="prev-arr"></button>',
      nextArrow: '<button class="next-arr"></button>',
      fade: true,
      cssEase: "linear",
    });
  });

  $(".en-lang").on("click", function (event) {
    event.preventDefault();
    $("#sh").css("display", "none");
    $("#en").css("display", "block");
  });

  document.addEventListener("click", (event) => {
    let target = event.target;
    const menu = document.querySelector(".mobile-menu");
    const navMobile = document.querySelector(".mobile-nav");
    const burgerMenu = document.querySelector(".burger-menu");
    const imgLogo = document.querySelector(".img-logo-mobile");

    if (target.matches(".burger-menu") || target.closest(".mobile-link")) {
      menu.classList.toggle("active");
      navMobile.classList.toggle("active");
      burgerMenu.classList.toggle("active");
      imgLogo.classList.toggle("active");
    }
  });

  let scene = document.getElementById("scene");
  let parallaxInstance = new Parallax(scene);
});
