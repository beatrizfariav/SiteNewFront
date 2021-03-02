var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

//NAVBAR - SHOW ON SCROLL UPDATE

var lastScrollTop = 0;
var desktopViewport = window.matchMedia("(min-width: 921px)");

navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (desktopViewport.matches) {
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-6rem";
    } else {
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
  }
});

// GSAP ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-hero", {
  duration: 0.5,
  opacity: 0,
  y: -20,
  stagger: 0.3,
});

gsap.from(".animate-services", {
  scrollTrigger: {
    trigger: ".animate-services",
    start: "top bottom",
    scrub: 0.1,
  },
  duration: 0.6,
  opacity: 0,
  x: -20,
  stagger: 0.3,
  delay: 0.5,
});

gsap.from(".animate-benefits", {
  scrollTrigger: {
    trigger: ".animate-benefits",
    start: "top bottom",
    scrub: 1,
  },
  duration: 0.6,
  opacity: 0,
  y: 20,
  stagger: 0.3,
  delay: 1.2,
});

gsap.from(".animate-agency", {
  scrollTrigger: {
    trigger: ".animate-agency",
    start: "top bottom",
    scrub: 1,
  },
  duration: 0.3,
  opacity: 0,
  x: -20,
  stagger: 0.2,
  delay: 1.3,
});

gsap.from(".animate-pricing", {
  scrollTrigger: ".animate-benefits",
  duration: 0.6,
  opacity: 0,
  y: 20,
  stagger: 0.3,
  delay: 1.2,
});

gsap.from(".animate-process", {
  scrollTrigger: {
    trigger: ".animate-process",
    start: "top bottom",
    scrub: 1,
  },
  duration: 0.3,
  y: -20,
  stagger: 0.2,
});

gsap.from(".animate-testimonial", {
  scrollTrigger: {
    trigger: ".animate-process",
    start: "top bottom",
    scrub: 1,
  },
  duration: 0.3,
  y: -100,
  stagger: 0.1,
});

gsap.from(".animate-contact", {
  scrollTrigger: ".animate-contact",
  duration: 0.6,
  opacity: 0,
  y: 20,
  stagger: 0.3,
  delay: 1.2,
});
