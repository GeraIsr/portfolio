let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


let sections =  document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });

    };
  });


let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);



menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');



};


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', {
  origin: 'top'
});

ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', {
  origin: 'bottom'
});

ScrollReveal().reveal('.home-content h1, .about-img img', {
  origin: 'left'
});

ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {
  origin: 'right'
});

document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("1F-3uz-Ik4DGCrVmQ");

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_24gol8x',
            'template_23ydxna',
            contactForm
        )
        .then(() => {
            alert("Message sent successfully");
            contactForm.reset();
        })
        .catch((error) => {
            alert("Error: " + JSON.stringify(error));
        });
    });

});

function toggleText() {
  const moreText = document.getElementById("moreText");
  const btn = document.querySelector("btn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "block";
      btn.innerText = "Скрыть";
  } else {
      moreText.style.display = "none";
      btn.innerText = "Читать больше";
  }

}

