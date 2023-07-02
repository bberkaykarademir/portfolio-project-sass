//typeProjectsTitle
const projectsTitleElem = document.querySelector(".projects__title");
const projectsTitleText = "<Here are my projects/>";
let i = 1;
const typeProjectsTitle = () => {
  projectsTitleElem.innerText = projectsTitleText.slice(0, i);
  i++;
  if (i <= projectsTitleText.length) {
    setTimeout(typeProjectsTitle, 150);
  }
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      typeProjectsTitle();
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(projectsTitleElem);

//projects animation

document.addEventListener("DOMContentLoaded", function () {
  var projects = document.querySelectorAll(".project");

  function checkScroll() {
    var triggerPosition = window.innerHeight;
    projects.forEach((project) => {
      var projectPosition = project.getBoundingClientRect().top;

      if (projectPosition < triggerPosition) {
        project.classList.add("projects--animate");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
});

//contact

document.addEventListener("DOMContentLoaded", function () {
  var contact = document.querySelector(".contact");

  function checkScroll() {
    var triggerPosition = window.innerHeight;

    var contactPosition = contact.getBoundingClientRect().top;

    if (contactPosition < triggerPosition) {
      contact.classList.add("contact--animate");
    }
  }

  window.addEventListener("scroll", checkScroll);
});
