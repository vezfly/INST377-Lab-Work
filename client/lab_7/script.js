function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function dataHandler(array) {
    const listItems = document.querySelector('#resto-list');
    listItems.innerHTML = ""
    let newArray = [...Array(15).keys()]
    let arrayMap = newArray.map((elm) => { 
      randomInt =  getRandomIntInclusive(0,array.length)
      return array[randomInt]
    })
  
    arrayMap.forEach((elm) => {
      const str = `<li>${elm.name}</li>`
      listItems.innerHTML +=str
    })
  
  }
  
  async function mainEvent() { // the async keyword means we can make API requests
    const form = document.querySelector('.main_form');
    const button = document.querySelector('button');
    button.style.display = 'none';
    const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
    const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  
      if(arrayFromJson.data.length > 0){
        button.style.display = 'block'
  
        form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
          submitEvent.preventDefault(); // This prevents your page from refreshing!
          console.log('form submission'); // this is substituting for a "breakpoint"
  
          dataHandler(arrayFromJson.data)
        });
    }
  }
  
  // this actually runs first! It's calling the function above
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
  