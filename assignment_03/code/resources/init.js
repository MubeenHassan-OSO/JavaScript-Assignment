/**
 *  PLEASE DON'T MAKE ANY CHANGES TO THIS FILE
 * 
*/
import main from "../main.js";


/**
 *  take input user user
 * 
*/
window.input = (message = "") => {
  const user_input = window.prompt(message);

  if (!user_input) {
    window.alert("Input cannot be empty");
    return;
  }

  // check if input is a number
  if (!isNaN(user_input)) {
    return parseFloat(user_input);
  }

  // remove spaces, tabs, newlines from string and return
  return user_input.trim();
};


/**
 *  display data on the webpage
 * 
*/
window.print = (...args) => {
  const preview = document.querySelector("#preview");

  // if the preview element is not found, show an error
  if (!preview) {
    const error = `Preview element not found in the HTML. Please make sure that an HTML Element with ID 'preview' is present in the HTML.`;

    alert(error);
    throw new Error(error);
  }

  // create new line
  preview.innerHTML += "<br />";

  for (const data of args) {
    // print arrays and objects 
    if (data.constructor === Array || data.constructor === Object) {
      preview.innerHTML += JSON.stringify(data);
      return;
    }

    // print strings, numbers, booleans
    preview.innerHTML += data;
  }
};


// initialize the scratchpad
document.addEventListener("DOMContentLoaded", init);
function init() {
  // apply functionality to clear button
  const preview = document.querySelector("#preview");
  const clear = document.querySelector("#clear");

  clear.addEventListener("click", () => preview.innerHTML = '');

  // start entrypoint function
  main();
}