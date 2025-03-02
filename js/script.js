//Кнопка навверх========================================================================================================================================================
const button = document.querySelector(".up-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});

button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//Калькулятор дохода========================================================================================================================================================
