document.addEventListener("DOMContentLoaded", function () {
  const loadComponent = (url, element) => {
    fetch(url)
      .then(response => response.ok ? response.text() : Promise.reject('File not found'))
      .then(data => {
        element.innerHTML = data;
        // Re-initialize scripts for the loaded content
        if (element.tagName === 'HEADER') {
          initializeHeader();
        }
        if (element.tagName === 'FOOTER') {
          initializeFooter();
        }
      })
      .catch(error => console.error(`Error loading ${url}:`, error));
  };

  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const isEnglish = window.location.pathname.includes('_en.html') || window.location.pathname.endsWith('/en/');

  if (header) {
    const headerUrl = isEnglish ? '/header_en.html' : '/header.html';
    loadComponent(headerUrl, header);
  }

  if (footer) {
    const footerUrl = isEnglish ? '/footer_en.html' : '/footer.html';
    loadComponent(footerUrl, footer);
  }
});

function initializeHeader() {
  // The original myFunction for the responsive topnav
  window.myFunction = function () {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  // Set active class on nav links
  const path = window.location.pathname;
  const page = path.split("/").pop();

  if (path.includes('about')) document.getElementById('nav-about')?.classList.add('active');
  else if (path.includes('visit/calendar')) { document.getElementById('nav-culture')?.classList.add('active'); document.getElementById('nav-calendar')?.classList.add('active'); }
  else if (path.includes('visit/donation')) { document.getElementById('nav-culture')?.classList.add('active'); document.getElementById('nav-donation')?.classList.add('active'); }
  else if (path.includes('visit/library')) { document.getElementById('nav-culture')?.classList.add('active'); document.getElementById('nav-library')?.classList.add('active'); }
  else if (path.includes('visit/classics')) { document.getElementById('nav-culture')?.classList.add('active'); document.getElementById('nav-classics')?.classList.add('active'); }
  else if (path.includes('news')) document.getElementById('nav-past-events')?.classList.add('active');
  else if (path.includes('contact')) document.getElementById('nav-contact')?.classList.add('active');
  else if (page.startsWith('index')) document.getElementById('nav-home')?.classList.add('active');
}

function initializeFooter() {
  // Footer dropdown functionality
  document.querySelectorAll('.footer-dropdown .footer-arrow').forEach(arrow => {
    arrow.addEventListener('click', function (event) {
      event.stopPropagation();
      const dropdown = this.closest('.footer-dropdown');
      const submenu = dropdown.querySelector('.footer-submenu');
      
      // Close other open submenus
      document.querySelectorAll('.footer-dropdown.open').forEach(openDropdown => {
        if (openDropdown !== dropdown) {
          openDropdown.classList.remove('open');
          openDropdown.querySelector('.footer-submenu').style.display = 'none';
        }
      });

      dropdown.classList.toggle('open');
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
  });
}