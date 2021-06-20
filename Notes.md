## Times

Start: 2:00 PM on 6/20/2021

Commit #1: 3:15

- User Input Form built (Challenge Pt. 1)
- Front end validators built and can fetch (Challenge Pt. 2)
- Sample static data built

Commit #2: 4:40

- Rebuilt FE validations (RegEx; Challenge Pt. 2)
- DOM shows location details (Challenge Pt. 3)

## Challenge

- User input of Zip Code
- **Fetch** location details about that zip code form Zippopotomus API (fetch() method)
- Display the location details (appendChild or use querySelectors to display info)
- Personalize it (CSS, make it awesome)

## Requirements

- 4 hours
- May use /states pictures
- No 3rd-party libraries
- Code works in latest version of Chrome

## Thoughts

### Initial Thoughts

- Build out the form submission, and see what data comes back. **DONE**
- Create a sample static page based off of the JSON data. **DONE**
- Utilize querySelectors and append or insertHTML into those items, with the JSON data.
- Finish styling and make it look nice.

### USER INPUT OF ZIP CODE

- Make a form with onSubmit action. **DONE**
- What happens if a user puts in a Zip longer than 5 characters and not numbers? **Validators set**
  - regex for just numbers and length of 5 validator? **DONE - no regex but parseInt and length of inputted zip. Other errors caught by API**

### FETCH TO ZIPPO API

- Example: **DONE**
  - fetch("http://api.zippopotam.us/us/78666")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error)) **DONE**
- Use the example above to start, but improve it with DOM manipulation for error handling. **DONE**

### Display the location details

- Have a parent div with all JSON data. When the page is initially loaded, it will have instructions for the User on how to use the Zippo fetcher. **DONE**
- After user starts the fetch (aka inputs a Zip and clicks the 'submit' button) this div's instructional text disappears and is replaced with the stylized data. **DONE**

### Stylize it

- Once all location details are added to the DOM, add CSS Styling to make it look good.
