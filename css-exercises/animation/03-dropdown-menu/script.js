const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible")
    menuTitle.animate(
      [{transform: 'scaleY(1)'},
       {transform: 'scaleY(1)'},
       {transform: 'scaleY(0.8)'},
       {transform: 'scaleY(1)'}],
      {
        duration:500
      }
    )
  }  
})

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.remove("visible")
  }
})