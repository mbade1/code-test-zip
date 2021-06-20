function zipSubmit() {
  // Get value of zip code.
  let zip = document.querySelector("#zip").value;

  // Fetched data from Zippopotamus
  let zippoData;

  // Zip validates numbers only and input is 5 digits long.
  let parsedInt = parseInt(zip);
  let parsedIntLength = parsedInt.toString().length;

  // if the Zip is not a Zip
  if (zip.length !== 5 || parsedIntLength !== 5) {
    alert("Uh oh! Make sure you enter only 5 numbers for your Zip code!");
    // if the Zip passes frontend validations
  } else {
    fetch(`http://api.zippopotam.us/us/${zip}`)
      .then((response) => response.json())
      .then((data) => alert(data))
      .catch((error) => console.log(error));
  }
  console.log(zippoData);
  debugger;
}

// API Info:

// Country: United States ( (country abbreviation) US)<br>
// (places[0])
// 	Latitude: 29.8754<br>
// 	Longitude: -97.9404<br>
// 	City: San Marcos<br>
// 	State: Texas (state abbreviation TX)<br>
// post code: 78666
