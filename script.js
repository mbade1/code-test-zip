function zipSubmit(event) {
  // prevent default action for form submission.
  event.preventDefault();

  // Get value of zip code.
  let zip = document.querySelector("#zip").value;

  const zipCodeRegex = /^\d{5}$/;

  // Checks that Zip is 5 digits and still valid after. If valid, fetch.
  if (zipCodeRegex.test(zip) === false) {
    alert("Uh oh! Make sure you enter only 5 numbers for your Zip code!");
  } else {
    fetch(`http://api.zippopotam.us/us/${zip}`)
      .then((response) => response.json())
      .then((data) => manipulateDOM(data))
      .catch((error) =>
        alert(
          "Uh oh! This Zip code could not be found.\nPlease try a valid Zip Code. \nError: " +
            error
        )
      );
  }
}

function manipulateDOM(data) {
  // Data from Zippopotamus
  let country = data.country;
  let countryAbb = data["country abbreviation"];
  let zipCode = data["post code"];
  let dataPlaces = data.places[0];
  let lat = dataPlaces.latitude;
  let long = dataPlaces.longitude;
  let city = dataPlaces["place name"];
  let state = dataPlaces.state;
  let stateAbb = dataPlaces["state abbreviation"];

  // querySelectors

  // containers
  let domInstructions = document.querySelector(".instructions");
  let domLocationInfo = document.querySelector(".location-information");
  let domZipDisplay = document.querySelector(".zip-display");

  //image and text to manipulate
  let domImage = document.querySelector(".state-image");
  let domLocationName = document.querySelector(".location-name");
  let domLatitude = document.querySelector(".latitude");
  let domLongitude = document.querySelector(".longitude");
  let domReqZip = document.querySelector(".requested-zip");
  let domFurtherInstructions = document.querySelector(".further-instructions");

  //DOM Manipulation

  // Remove instructions and add manipulated DOM
  domInstructions.style.display = "none";
  domLocationInfo.style.display = "inline-block";
  domZipDisplay.style.display = "inline-block";

  // If animation has been set, remove class and innerText (content) so CSS animation effect can take place again.
  if (domImage.classList.length === 2) {
    // Remove fade-in
    domImage.classList.remove("fade-in");
    domLocationName.classList.remove("fade-in");
    domLongitude.classList.remove("fade-in");
    domLatitude.classList.remove("fade-in");
    domReqZip.classList.remove("fade-in");
    domFurtherInstructions.classList.remove("fade-in");

    // Make all manipulated items empty for animation
    domImage.alt = "";
    domImage.src = "";
    domImage.style.border = "none";
    domLocationName.innerText = "";
    domLongitude.innerText = "";
    domLatitude.innerText = "";
    domReqZip.innerText = "";
    domFurtherInstructions.innerText = "";
  }

  // CSS Fade in

  setTimeout(function () {
    domLocationName.classList.add("fade-in");
    domLocationName.innerText = `${city}, ${state}, ${country} (${countryAbb})`;
  }, 1000);

  setTimeout(function () {
    domLongitude.classList.add("fade-in");
    domLongitude.innerText = `Longitude: ${long}`;
  }, 2000);

  setTimeout(function () {
    domLatitude.classList.add("fade-in");
    domLatitude.innerText = `Latitude: ${lat}`;
  }, 3000);

  setTimeout(function () {
    domReqZip.classList.add("fade-in");
    domReqZip.innerText = `Request Zip Code: ${zipCode}`;
  }, 4000);

  setTimeout(function () {
    domImage.classList.add("fade-in");
    domImage.style.border = "2px solid #c06c84";
    domImage.src = `states/${stateAbb}.svg`;
    domImage.alt = `Picture of ${state}`;
  }, 5000);

  setTimeout(function () {
    domFurtherInstructions.classList.add("fade-in");
    domFurtherInstructions.style.display = "block";
    domFurtherInstructions.innerText = "Enter another Zip code to learn more!";
  }, 6000);
}
