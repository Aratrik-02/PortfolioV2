$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
$(document).ready(function(){
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active__work"));
  this.classList.add("active__work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Typing animation
var typed = new Typed(".typing", {
  strings: ["Frontend Dev", "Aspiring SDE", "Cloud Enthusiast", "CSE Undergrad"],
  typeSpeed: 90,
  backSpeed: 50,
  loop: true
});

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 800,
  delay: 400,
  reset: true,
})

// sr.reveal(`.home__data`)
// sr.reveal(`.home__handle`, {delay: 700})
// sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'})

// sr.reveal(`.about__data`)
// sr.reveal(`.about__img`, {delay: 700})
// sr.reveal(`.section__subtitle, .section__title`)
// sr.reveal(`.resume`, {delay: 900, origin: 'bottom'})

// sr.reveal(`.skills__content`, {delay: 900, origin: 'bottom'})

// sr.reveal(`.work__filters`, {origin: 'bottom'})
// sr.reveal(`.portfolio, .work__card`, {delay: 600, origin: 'bottom'})

// sr.reveal(`.contact__info`, {delay: 600, origin: 'bottom'})
// sr.reveal(`.contact__title`)
// sr.reveal(`.contact__form`, {delay: 900, origin: 'bottom'})
// });
sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700})
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'})

sr.reveal(`.about__data`)
sr.reveal(`.about__img`, {delay: 700,origin: 'bottom'})
sr.reveal(`.about__box, .about__description`, {delay: 700,origin: 'bottom'})
sr.reveal(`.section__subtitle, .section__title`, {delay: 700,origin: 'bottom'})
sr.reveal(`.resume`, {delay: 100, origin: 'bottom'})

sr.reveal(`.skills__left`, {delay: 900, origin: 'left'})
sr.reveal(`.skills__right`, {delay: 900, origin: 'right'})

sr.reveal(`.portfolio, .work__filters`, {delay: 200,origin: 'bottom',distance: '30px'})
sr.reveal(`.work__card`, {delay: 200, origin: 'bottom'})

sr.reveal(`.contact__info`, {delay: 600, origin: 'bottom'})
sr.reveal(`.contact__title`)
sr.reveal(`.contact__form`, {delay: 900, origin: 'bottom'})
});
