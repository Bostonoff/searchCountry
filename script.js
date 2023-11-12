const serchBtn = document.getElementById("search-btn");
const countrInp = document.getElementById("country-inp");
const counter = document.getElementById("counter");

serchBtn.addEventListener("click", () => {
  let countryName = countrInp.value;
  let URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data[0]);
      // console.log(data[0].capital[0]);
      // console.log(data[0].flags.svg);
      // console.log(data[0].name.common);
      // console.log(data[0].continents[0]);
      // console.log(data[0].population);
      // console.log(Object.keys(data[0].currencies)[0]);
      // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      // console.log(Object.values(data[0].languages).toString().split(",").join(", "));

      result.innerHTML = `
            <img src = "${data[0].flags.svg}" class = "flag-img">
            <h2>${data[0].name.common}</h2>
            <div class = "wrapper">
            <div class = "data-wrapper">
            <h4>Capital: <span>${data[0].capital[0]}</span></h4>
            </div>
            </div>
            <div class = "wrapper">
            <div class = "data-wrapper">
            <h4>Continent: <span>${data[0].continents[0]}</span></h4>
            </div>
            </div>
            <div class = "wrapper">
            <div class = "data-wrapper">
            <h4>Population of: <span>${data[0].population}</span></h4>
            </div>
            </div>
            <div class = "wrapper">
            <div class = "data-wrapper">
            <h4>Currency: <span>${
              data[0].currencies[Object.keys(data[0].currencies)].name
            } -  ${Object.keys(data[0].currencies)[0]}</span></h4>
            </div>
            </div>
            <div class = "wrapper">
            <div class = "data-wrapper">
            <h4>Language: <span>${Object.values(data[0].languages)
              .toString()
              .split(",")
              .join(", ")}</span></h4>
            </div>
            </div>
        `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3 class= "errorText">The field cannot be empty.</h3>`;
      } else {
        result.innerHTML = `<h3 class= "errorText">Please enter the country name.</h3>`;
      }
    });
});
