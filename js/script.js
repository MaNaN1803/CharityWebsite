document.querySelectorAll(".image-container img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".pop-image").style.display = "block";
    document.querySelector(".pop-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".pop-image span").onclick = () => {
  document.querySelector(".pop-image").style.display = "none";
};

function submitDonationDetails() {
  // Retrieve user details from the form
  var userName = document.querySelector(
    '#donationForm input[name="name"]'
  ).value;
  var userMobile = document.querySelector(
    '#donationForm input[name="mobile"]'
  ).value;
  var userAddress = document.querySelector(
    '#donationForm input[name="address"]'
  ).value;
  var donationType = document.querySelector(
    '#donationForm select[name="donation"]'
  ).value;
  var userMessage = document.querySelector(
    '#donationForm textarea[name="message"]'
  ).value;

  // Validate if required fields are not empty
  if (userName && userMobile && userAddress && donationType) {
    // Create an object to store user details
    var userDetails = {
      name: userName,
      mobile: userMobile,
      address: userAddress,
      donationType: donationType,
      message: userMessage,
    };

    // Store user details in localStorage
    localStorage.setItem("donationDetails", JSON.stringify(userDetails));

    // Clear the form
    document.querySelector("#donationForm").reset();

    // Open a form or perform any other action related to donation details
    alert("Donation details submitted successfully!");
  } else {
    alert("Please fill in all required fields.");
  }
}

// Event listener for Donate Now button
document.querySelector(".don-box .btn1").addEventListener("click", () => {
  // Open or perform any action related to donation form
  alert("Open Donation Form");
});

// Event listener for Submit Details button
document
  .querySelector("#donationFormSubmitBtn")
  .addEventListener("click", () => {
    // Call the function to submit donation details
    submitDonationDetails();
  });

document.getElementById("donationType").addEventListener("change", function () {
  var fundAmountSection = document.getElementById("fundAmountSection");
  if (this.value === "fund") {
    fundAmountSection.style.display = "block";
  } else {
    fundAmountSection.style.display = "none";
  }
});

// Update the displayed fund amount when the range input changes
document.getElementById("fundAmount").addEventListener("input", function () {
  document.getElementById("selectedAmount").innerText = this.value;
});
