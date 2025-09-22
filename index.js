/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000); // Change slide every 5 seconds
})
// 控制下拉菜单显示/隐藏
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".footer-dropdown");

  dropdowns.forEach(drop => {
    const submenu = drop.querySelector(".footer-submenu");
    const arrow = drop.querySelector(".footer-arrow");

    if (!submenu || !arrow) return;

    // 桌面版 - hover 显示
    /*arrow.addEventListener("mouseenter", () => {
      if (window.innerWidth > 600) {
        submenu.style.display = "block";
        drop.classList.add("open");
      }
    });

    arrow.addEventListener("mouseleave", () => {
      if (window.innerWidth > 600) {
        submenu.style.display = "none";
        drop.classList.remove("open");
      }
    });*/

    arrow.addEventListener("click", () => {
      if (window.innerWidth > 600) {
        e.preventDefault();
        const isOpen = submenu.style.display === "block";
        submenu.style.display = isOpen ? "none" : "block";
        drop.classList.toggle("open", !isOpen);
      }
    });

    // 手机版 - 点击箭头切换
    arrow.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = submenu.style.display === "block";
      submenu.style.display = isOpen ? "none" : "block";
      drop.classList.toggle("open", !isOpen);
    });
  });
});