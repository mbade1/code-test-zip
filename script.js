function zipSubmit(event) {
  // prevent default action for form submission.
  event.preventDefault();

  // Get value of zip code.
  let zip = document.querySelector("#zip").value;

  const zipCodeRegex = /^\d{5}$/;

  // Checks that Zip is 5 digits and still valid after
  if (zipCodeRegex.test(zip) === false) {
    alert("Uh oh! Make sure you enter only 5 numbers for your Zip code!");
    // if the Zip passes frontend validations
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
  // Data to send to DOM
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
  let domInstructions = document.querySelector(".instructions");
  let domLocationInfo = document.querySelector(".location-information");
  let domImage = document.querySelector(".state-image");
  let domLocationName = document.querySelector(".location-name");
  let domLatitude = document.querySelector(".latitude-number");
  let domLongitude = document.querySelector(".longitude-number");

  //DOM Manipulation
  domImage.src = `states/${stateAbb}.svg`;
  domLocationName.innerText = `${city}, ${state}, ${country} (${countryAbb})`;
  domLatitude.innerText = lat;
  domLongitude.innerText = long;

  // Remove instructions and add manipulated DOM
  domInstructions.style.display = "none";
  domLocationInfo.style.display = "inline-block";
}
