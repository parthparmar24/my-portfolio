const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".nav__menu");

// open nav menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// close nav menu when menu items are clicked
if (window.innerWidth < 1024) {
  document.querySelectorAll(".nav__menu li a").forEach((navItem) => {
    navItem.addEventListener("click", closeNav);
  });
}

// change navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// fetches testimonials from testimonial array
const fetchTestimonials = () => {
  let testimonialsContainer = document.querySelector(
    ".testimonials__container"
  );
  testimonialsContainer.innerHTML = "";

  // loop through array ad print testimonials
  testimonials.forEach((testimonials) => {
    const newTestimonial = document.createElement("article");
    newTestimonial.className = "testimonial";
    newTestimonial.innerHTML = `
    <p>
    "${testimonials.quote}"
          </p>
          <div class="testimonial__client">
            <span class="avatar">
              <img src="./assets/${testimonials.avatar}.jpeg" />
            </span>
            <div class="testimonial__work">
              <p><b>${testimonials.name}</b></p>
              <small>${testimonials.title}</small>
            </div>
          </div> `;
    testimonialsContainer.append(newTestimonial);
  });
};

window.addEventListener("load", fetchTestimonials);
