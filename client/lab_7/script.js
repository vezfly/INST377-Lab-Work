function restoArrayMake(dataArray) {
  console.log('fired dataHandler');
  const range = [...Array(15).keys()];
  const listItems = range.map((item, index) => {
    const restNum = getRandomIntInclusive(0, dataArray.length - 1);
    return dataArray[restNum];
  });

  return listItems;
}

function createHtmlList(collection) {
  const targetList = document.querySelector('.resto-list');
  //targetList = document.querySelector('.resto-list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {name} = item;
    const displayName = name.toLowerCase();
    const injectThisItem = `<li>${displayName}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

async function mainEvent() {
  console.log('script loaded');
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('button');

  const resto = document.querySelector('.restaurant-name');
  const zipcode = document.querySelector('.food-type');
  submit.style.display = 'none';

  const { format } = require("express/lib/response");

  const results = await fetch('/api/foodServicesPG');
  const arrayFromJson = await results.json();

  

  if (arrayFromJson.data.length > 0) {
    submit.style.display = 'block';

    let currentArray = [];
    resto.addEventListener('input', async (event) => {
      console.log(event.target.value);
      
      if (currentArray.length < 1) {
        return;
      }

      //const selectResto = arrayFromJson.data.filter((item) => {
      const selectResto = currentArray.filter((item) => item.name.includes(event.target.value));
        /*const lowerName = item.name.toLowerCase();
        const lowerValue = event.target.value.toLowerCase();
        return lowerName.includes(lowerValue);*/
      });

      console.log(selectResto);
      createHtmlList(selectResto);
    };

    form.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();
      currentArray = restoArrayMake(arrayFromJson.data);
      console.log(currentArray);
      createHtmlList(currentArray);
    });
  }
