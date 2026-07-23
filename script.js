const ageForm = document.getElementById("ageForm");
const dobInput = document.getElementById("dobInput");
const errorMessage = document.getElementById("errorMessage");
const resetBtn = document.getElementById("resetBtn");
 
const emptyState = document.getElementById("emptyState");
const resultsSection = document.getElementById("resultsSection");


const yearsValue = document.getElementById("yearsValue");
const monthsValue = document.getElementById("monthsValue");
const daysValue = document.getElementById("daysValue");
const totalMonthsValue = document.getElementById("totalMonthsValue");
const totalWeeksValue = document.getElementById("totalWeeksValue");
const totalDaysValue = document.getElementById("totalDaysValue");

dobInput.max = new Date().toISOString().split("T")[0];

ageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  calculateAge();
});
resetBtn.addEventListener("click", resetForm);

function calculateAge() {
    clearError();


    const dobValue = dobInput.value;
if (!dobValue) {
    showError("Please choose your date of birth.");
    return;
  }

const birthDate = new Date(dobValue);
const today = new Date ();

if (isNaN(birthDate.getTime())) {
    showError("That doesn't look like a valid date.");
    return;
  }
  if (birthDate > today) {
     showError("Date of birth cant be in the future.");
     return;
  }

const ageDetails = getAgeDetails(birthDate, today);

displayResults(ageDetails)
}


function getAgeDetails(birthDate, today) {
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
 
  // If days is negative, borrow days from the previous month
  if (days < 0) {
    months -= 1;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

if (months < 0) {
    years -= 1;
    months += 12;
  }


  



