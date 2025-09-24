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
    const showMoreBtn = document.getElementById('show-more-btn');
    const showLessBtn = document.getElementById('show-less-btn');
    const timelineItems = document.querySelectorAll('.timeline .timeline-item');
    const itemsToShowInitially = 2;

    // Initially hide the extra items
    timelineItems.forEach((item, index) => {
        if (index >= itemsToShowInitially) {
            item.classList.add('hidden');
        }
    });

    // Hide the "show more" button if there are not enough items
    if (timelineItems.length <= itemsToShowInitially) {
        if(showMoreBtn) showMoreBtn.style.display = 'none';
    }

    if (showMoreBtn && showLessBtn) {
        showMoreBtn.addEventListener('click', function() {
            timelineItems.forEach((item, index) => {
                if (index >= itemsToShowInitially) {
                    item.classList.remove('hidden');
                }
            });
            showMoreBtn.style.display = 'none';
            showLessBtn.style.display = 'inline-block';
        });

        showLessBtn.addEventListener('click', function() {
            timelineItems.forEach((item, index) => {
                if (index >= itemsToShowInitially) {
                    item.classList.add('hidden');
                }
            });
            showLessBtn.style.display = 'none';
            showMoreBtn.style.display = 'inline-block';
        });
    }
});
// 控制下拉菜单显示/隐藏
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".footer-dropdown");

  dropdowns.forEach(drop => {
    const submenu = drop.querySelector(".footer-submenu");
    const arrow = drop.querySelector(".footer-arrow");

    if (!submenu || !arrow) return;

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