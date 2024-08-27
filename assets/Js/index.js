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

