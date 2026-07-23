const ageForm = document.getElementById("ageForm");
const dobInput = document.getElementById("dobInput");
const errorMessage = document.getElementById("errorMessage");
const resetBtn = document.getElementById("resetBtn");
 
const emptyState = document.getElementById("emptyState");
const resultsSection = document.getElementById("resultsSection");
  const ageForm = document.getElementById("ageForm");
const dobInput = document.getElementById("dobInput");
const errorMessage = document.getElementById("errorMessage");
const resetBtn = document.getElementById("resetBtn");
 
const emptyState = document.getElementById("emptyState");
const resultsSection = document.getElementById("resultsSection");

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
return;
}






