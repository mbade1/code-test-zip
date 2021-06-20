## Times

Start: 2:00 PM on 6/20/2021

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

- Build out the form submission, and see what data comes back.
- Create a sample static page based off of the JSON data.
- Utilize querySelectors and append or insertHTML into those items, with the JSON data.
- Finish styling and make it look nice.

### USER INPUT OF ZIP CODE

- Make a form with onClick action.
- What happens if a user puts in a Zip longer than 5 characters and not numbers?
  - regex for just numbers and length of 5 validator?

### FETCH TO ZIPPO API

- Example:
  - fetch("http://api.zippopotam.us/us/78666")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
- Use the example above to start, but improve it with DOM manipulation for error handling.

### Display the location details

- Have a parent div with all JSON data. When the page is initially loaded, it will have instructions for the User on how to use the Zippo fetcher.
- After user starts the fetch (aka inputs a Zip and clicks the 'submit' button) this div's instructional text disappears and is replaced with the stylized data.
