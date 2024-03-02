// const menuBtn = document.querySelector("#open-menu-btn");
// const closeBtn = document.querySelector("#close-menu-btn");
// const menu = document.querySelector(".nav__menu");

// // open nav menu
// menuBtn.addEventListener("click", () => {
//   menu.style.display = "block";
//   closeBtn.style.display = "inline-block";
//   menuBtn.style.display = "none";
// });

// // close nav menu
// const closeNav = () => {
//   menu.style.display = "none";
//   closeBtn.style.display = "none";
//   menuBtn.style.display = "inline-block";
// };

// closeBtn.addEventListener("click", closeNav);

// // close nav menu when menu items are clicked
// if (window.innerWidth < 1024) {
//   document.querySelectorAll(".nav__menu li a").forEach((navItem) => {
//     navItem.addEventListener("click", closeNav);
//   });
// }

// // change navbar style on scroll
// window.addEventListener("scroll", () => {
//   document
//     .querySelector("nav")
//     .classList.toggle("window-scroll", window.scrollY > 0);
// });

$(document).ready(function () {
  const $menuBtn = $("#open-menu-btn");
  const $closeBtn = $("#close-menu-btn");
  const $menu = $(".nav__menu");

  // Open nav menu
  $menuBtn.click(function () {
    $menu.show();
    $closeBtn.show();
    $menuBtn.hide();
  });

  // Close nav menu
  $closeBtn.click(function () {
    closeNav();
  });

  // Close nav menu when menu items are clicked
  if ($(window).innerWidth() < 1024) {
    $(".nav__menu li a").click(function () {
      closeNav();
    });
  }

  // Change navbar style on scroll
  $(window).scroll(function () {
    $("nav").toggleClass("window-scroll", $(window).scrollTop() > 0);
  });
});

function closeNav() {
  $(".nav__menu").hide();
  $("#close-menu-btn").hide();
  $("#open-menu-btn").show();
}

$(document).ready(function () {
  const githubUsername = "parthparmar24";
  const githubToken = "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";
  const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

  // Fetch repositories from GitHub API
  $.ajax({
    url: apiUrl,
    headers: {
      Authorization: `token ${githubToken}`,
    },
    success: function (data) {
      // Process the fetched repositories data
      displayRepositories(data);
    },
    error: function (err) {
      console.error("Error fetching repositories:", err);
    },
  });

  // Function to display repositories
  function displayRepositories(repositories) {
    const $repoList = $("#github-repo-list");
    repositories.forEach(function (repo) {
      const repoItem = `
        <li>
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          <p>${repo.description || ""}</p>
          <p>Stars: ${repo.stargazers_count}, Forks: ${repo.forks_count}</p>
        </li>
      `;
      $repoList.append(repoItem);
    });
  }
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
