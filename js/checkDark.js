let navbar = document.getElementsByClassName("mainbar")[0];

if (document.cookie.includes("darkMode=true")) {
  console.log(document.cookie);
  document.body.classList.add("dark-mode");
  navbar.classList.add("nav-dark-mode");
}