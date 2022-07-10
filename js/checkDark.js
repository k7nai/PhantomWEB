let navbar = document.getElementsByClassName("mainbar")[0];

if (document.cookie.includes("darkMode=true")) {
  document.body.classList.add("dark-mode");
  navbar.classList.add("nav-dark-mode");
}
