function dataHandler(array) {
  const button = document.querySelector('button');

  button.addEventListener("button", display => {
    button.style.setProperty(display:"none")

    // ^ NOT SURE IF THIS RIGHT

  });

  const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object

  array => console.table(arrayFromJson.data); // this is called "dot notation"
    // arrayFromJson.data - we're accessing a key called 'data' on the returned object
    // it contains all 1,000 records we need

    // ^ NOT SURE IF THIS RIGHT
}

async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.main_form');
  form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
    submitEvent.preventDefault(); // This prevents your page from refreshing!
    console.log('form submission'); // this is substituting for a "breakpoint"
  });
}

dataHandler(); // < NOT SURE IF THIS RIGHT


if(array.length() > 0){
  // this actually runs first! It's calling the function above
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests

  button.addEventListener("button", display => {
    button.style.setProperty(display:"block")

    // ^ NOT SURE IF THIS RIGHT
  });
}