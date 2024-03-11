const menu_icon = document.querySelector(".menu-icon");
const nav_header = document.querySelector(".header");
const toggleNavbar = (before) => {
  
    nav_header.classList.toggle("active");
    
};


menu_icon.addEventListener('click',() => toggleNavbar ());
