tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#3730A3',
        secondary: '#64748B'
      }
    }
  }
}


const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// tab part 

const links = document.querySelectorAll('.tab-link');

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(l => l.className = 'tab-link py-4 uppercase text-[18px] font-medium text-[#0000003b] mx-10');
    this.className += ` ${this.getAttribute('data-active')}`;
  });
});

//  smooth scroll 
function smoothScroll(event, targetId) {
  event.preventDefault();

  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;

  const startPosition = window.pageYOffset;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, startPosition + distance * progress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// carousel slider 

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector('.owl-carousel');

  if (carousel) {
    $(carousel).owlCarousel({
      items: 2,
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        520: {
          items: 2
        },
        770: {
          items: 2
        },
        1280: {
          items: 2
        }
      }
    });
  }
});
