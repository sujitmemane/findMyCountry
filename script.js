const inputCountry = document.querySelector(".searchValue");
const searchButton = document.querySelector(".search");
const output = document.querySelector("#output");

searchButton.addEventListener("click", async function () {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${inputCountry.value}?fullText=true`
    );
    const data = await res.json();
    output.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img">
     
       <h2 class="country-name">${data[0].name.common}</h2>
       <div class="main-data">
        <h5>CAPITAL : ${data[0].capital[0]} </h5>
        <h5>CONTINENT : ${data[0].continents[0]} </h5>
        <h5> POPULATION : ${data[0].population} </h5>
        <h5> COMMON LANGUAGE : ${Object.values(data[0].languages).join(
          ","
        )} </h5>
        <h5>CURRENCIES : ${
          data[0].currencies[Object.keys(data[0].currencies)].name
        } </h5>
       </div>
      `;
    inputCountry.value = "";
  } catch (error) {
    if (inputCountry.value.length == 0) {
      output.innerHTML = `<h3>The input field cannot be empty</h3>`;
    } else {
      output.innerHTML = `<h3>Please enter a valid country name.</h3>`;
    }
  }
});
