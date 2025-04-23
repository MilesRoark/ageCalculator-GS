let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function restartAnimation() {
  result.style.animation = "none";

  void result.offsetWidth;

  const animationDuration = window.innerWidth <= 500 ? "1.5s" : "3s";
  result.style.animation = `infoEntrance ${animationDuration} ease-in-out`;
}

result.innerHTML = "Select a date to calculate your age";

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  let today = new Date();

  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let dayDifference, monthDifference, yearDifference;

  yearDifference = currentYear - birthYear;

  if (currentMonth >= birthMonth) {
    monthDifference = currentMonth - birthMonth;
  } else {
    yearDifference--;
    monthDifference = 12 + currentMonth - birthMonth;
  }

  if (currentDay >= birthDay) {
    dayDifference = currentDay - birthDay;
  } else {
    monthDifference--;
    dayDifference =
      getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
  }

  if (monthDifference < 0) {
    monthDifference = 11;
    yearDifference--;
  }

  result.innerHTML = `You are <span>${yearDifference}</span> years <span>${monthDifference}</span> months and <span>${dayDifference}</span> days old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

userInput.addEventListener("change", () => {
  calculateAge();
  restartAnimation();
});
