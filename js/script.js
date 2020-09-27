let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');

  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#tabFavorites');

  totalPopulationList = document.querySelector('#totalPopulationList');
  totalPopulationFavorites = document.querySelector(
    '#totalPopulationFavorites'
  );

  numberFormat = Intl.NumberFormat('en-IN');
  fetchCountries();
});

async function fetchCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await res.json();
  allCountries = json.map((country) => {
    const { numericCode, name, population, flag } = country;
    return {
      id: numericCode,
      name,
      population,
      flag,
    };
  });

  render();
}

function render() {
  renderCountrylist();
  renderFavorites();
  renderSummary();

  handleCountryButtons();
}

function renderCountrylist() {
  let countriesHTML = '<div>';

  allCountries.forEach((country) => {
    const { id, name, population, flag } = country;

    const countryHTML = `
      <div class='country'>
        <div>
          <a id="${id}" class="waves-effect waves-effect waves-light btn">+</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}">
        </div>
        <div>
          <ul>
            <li>${name}</li>
            <li>${population}</li>
          </ul>
        </div>
      </div>
      `;
    countriesHTML += countryHTML;
  });

  tabCountries.innerHTML = countriesHTML;
}

function renderFavorites() {}
function renderSummary() {}
function handleCountryButtons() {}
