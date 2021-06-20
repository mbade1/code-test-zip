## Times

Start: 2:00 PM on 6/20/2021

Commit #1: 3:15

- User Input Form built (Challenge Pt. 1)
- Front end validators built and can fetch (Challenge Pt. 2)
- Sample static data built

Commit #2: 4:40

- Rebuilt FE validations (RegEx; Challenge Pt. 2)
- DOM shows location details (Challenge Pt. 3)

Commit #3: 6:00

- Stylized and further DOM manipulation added. Final push for review

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

- Once all location details are added to the DOM, add CSS Styling to make it look good. **DONE**

## Process

I love using JS to manipulate the DOM, so this was a fun exercise for me.

### Planning and Static HTML

For this exercise, I started with typing out some initial thoughts and planning out this project. To start, I created the input form, added some front end validators (which ended up being replaced by RegEx later), and created a static page with the end result in mind. With the HTML built out, I moved onto JS.

### JS

The user flow is as follows: When a user submits a form, an **onClick** event is called on the submit input. This triggers a call to the Zippopotamus API, and elements on the DOM are manipulated by the data from this call. A user can then look up another Zip code.

With this in mind, I used querySelector(s) to grab items from the DOM. Since I was primarily changing text, I used the innerText method to change grabbed items. After double checking that all of the correct information was grabbed, I moved onto the final step.

### CSS & JS

The CSS is where I decided to create some fun JS and CSS animations. I wanted each item to fade in, so that the user's attention would be grabbed by every newly manipulated DOM item. So, to do that, I utilized the built-in setTimeout method, which allowed for different items to fade in at specific times.

If a user reloaded his/her webpage and made an initial search for a Zip code, the fade-in animations took place and the fade ins were amazing. However, if they decided to search for another Zip Code, the fade-in animations no longer occured, since they had just run. In order to have them run again, I decided to set an if statement that checks for the length of the .state-image class list on the DOM. If the state-image has 2 class names (state-image, fade-in) attached to it, then the following block removes the fade-in className from all DOM-manipulated items.

### Clean up & Submission

This was a fun project, and I enjoyed it very much. If I had more time, I would have done made the following changes:

- **onClick** call on the submit button
  - I would have refactored the onClick event to be an event listener, so that all JS code is in script.js, keeping separation of concerns in mind.
- fade-in manipulation
  - I wish I had time to change the logic for the if block on lines 61-79. Rather than checking for the length of a classList, I would set a boolean variable, called **fadeIn** to false. Then, filter over the classList array attached to the **domImage** variable. If the filter method found the className "fade-in," then set the **fadeIn** variable to true. Then, replace the current if statement on 61 with:
    - **if (fadeIn === true)**... continue with that block of logic (61-79).
- Refactored the CSS page
  - I would refactor the CSS page, to make it DRY-er.
- **statee** variable name
  - To not become confused with the JS **state** keyword, I would rename the **state** variable on line 35 (**state** --> **statee**)
