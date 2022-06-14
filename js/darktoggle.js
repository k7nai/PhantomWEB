let darkButton = document.getElementById("dark-button");
let navbar = document.getElementsByClassName("mainbar")[0];
let darkMode = false

// This code by https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

if (document.cookie.includes("darkMode=true")) {
    document.body.classList.add("dark-mode");
    navbar.classList.add("nav-dark-mode");
}

darkButton.addEventListener("click", function() {
    darkMode = !(getCookie("darkMode") === 'true');
    document.cookie = "darkMode=" + darkMode + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
    document.body.classList.toggle("dark-mode");
    navbar.classList.toggle("nav-dark-mode");
});