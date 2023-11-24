document.getElementById("resetButton").disabled = true;
document.getElementById("viewImageButton").disabled = true;

let categoryImageSrc = ""; //harus di deklarasi global karena button bukan ikut logic function calculateBMI()
let linkUrl = "";
function calculateBMI() {
  // Get input values
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  // Check if the input is not empty and is within the range
  if (
    isNaN(weight) ||
    weight < 1 ||
    weight > 999 ||
    isNaN(height) ||
    height < 1 ||
    height > 999
  ) {
    alert("Please enter between 1 and 999 for weight and height!");
  } else {
    // Calculate BMI
    let bmi = weight / (height / 100) ** 2;

    // Determine BMI category
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
      categoryImageSrc =
        "https://i.pinimg.com/564x/0c/a3/9c/0ca39ce2d1ee397c730881e094b0f246.jpg";
      linkUrl = "https://www.lybrate.com/topic/diet-for-underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal weight";
      categoryImageSrc =
        "https://alpinecardiology.com/wp-content/uploads/Aim-for-Healthy-Weight-Part-2-2-400x400.jpg";
      linkUrl = "https://www.lybrate.com/topic/heart-healthy-diet-chart";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Overweight";
      categoryImageSrc =
        "https://www.shutterstock.com/shutterstock/photos/688685572/display_1500/stock-vector-weight-loss-diet-tips-688685572.jpg";
      linkUrl =
        "https://www.lybrate.com/topic/diet-chart-for-weight-loss";
    } else {
      category = "Obesity";
      categoryImageSrc =
        "https://pbs.twimg.com/media/ESPvjkMXkAEDNCg.jpg:large";
      linkUrl = "https://www.lybrate.com/topic/obesity-diet-chart";
    }

    // Display result
    document.getElementById("bmi").innerText = bmi.toFixed(1);
    document.getElementById("category").innerText = category;

    // reset button activated
    document.getElementById("resetButton").disabled = false;
    // calculate button deactivated
    document.getElementById("calculateButton").disabled = true;
    document.getElementById("viewImageButton").disabled = false;
  }
}

function resetInput() {
  // Reset input
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";

  // Reset BMI results
  document.getElementById("bmi").innerText = "____";
  document.getElementById("category").innerText = "____";

  // Reset category image source
  categoryImageSrc = ""; // Set it to an empty string

  // reset deactivated
  document.getElementById("resetButton").disabled = true;

  // calculate activated
  document.getElementById("calculateButton").disabled = false;

  //view button deactivated
  document.getElementById("viewImageButton").disabled = true;
  closeModal();
}
// Functions for modal
function openModal() {
  let categoryImage = document.getElementById("modalImage");
  categoryImage.src = categoryImageSrc;
  categoryImage.style.display = "flex";

  // Set link href for the modal
  document.getElementById("modalLink").href = linkUrl;

  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
};