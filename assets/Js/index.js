tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#3730A3',
        }
      }
    }
  }


  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
  });


//   slider js
        const slider = document.querySelector('.slider-content');
        const slides = document.querySelectorAll('.slider-item');
        let currentIndex = 0;
        const totalSlides = slides.length;

        function showNextSlide() {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        setInterval(showNextSlide, 3000); // Change slide every 3 seconds