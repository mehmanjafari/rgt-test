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
function calculate() {
  const selectNode = document.querySelector(".js-form-income__sel");
  const rangeNode = document.querySelector(".js-form-income__range");
  const labelRangeDayClockNode = document.querySelector(
    ".js-form-income__label"
  );
  const daySumNode = document.querySelector(".js-item-statistick__value-day");
  const monthSumNode = document.querySelector(
    ".js-item-statistick__value-month"
  );

  let selectValue = selectNode.value;

  function updateResults() {
    const rangeValue = rangeNode.value;
    const resultDay = rangeValue * selectValue;
    const resultMonth = rangeValue * selectValue * 30;

    labelRangeDayClockNode.textContent = rangeValue;
    daySumNode.textContent = `${resultDay}000`;
    monthSumNode.textContent = `${resultMonth}000`;
  }

  selectNode.addEventListener("change", (e) => {
    selectValue = e.target.value;
    updateResults();
  });

  rangeNode.addEventListener("input", updateResults);
}

calculate();
