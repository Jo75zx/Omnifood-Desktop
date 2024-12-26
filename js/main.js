const icon = document.querySelector("header");
const link = document.querySelector("nav-link");

icon.addEventListener("click", () => {
  icon.classList.toggle("nav-opened");

  link.addEventListener("click", () => {
    icon.classList.toggle("nav-opened");
  });
});
