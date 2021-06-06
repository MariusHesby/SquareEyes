const movieDetailsContainer = document.querySelector(".film-rent-content");
// const loaderContainer = document.querySelector(".loaderContainer");
const title = document.querySelector("title");

// Querystring

const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://headless.superdupersiden.com/wp-json/wc/store/products/" + id;

// FUNCTION fetchMovie
async function fetchMovie() {
  try {
    const response = await fetch(url);
    const product = await response.json();

    movieDetailsContainer.innerHTML = "";

    //UPDATE details page title
    title.innerHTML = product.name + " | SquareEyes.com";

    const movieTitle = product.name;
    const movieImg = product.images[0].thumbnail;
    const moviePrice = product.prices.price;
    const movieCurrency = product.prices.currency_code;

    movieDetailsContainer.innerHTML += movieDetails(movieTitle, movieImg, moviePrice, movieCurrency);
  } catch (error) {
    movieDetailsContainer.innerHTML = "";
    console.error(error);
    movieDetailsContainer.innerHTML = newError("Woops, something went wrong. Please call 404!", error);
  }
}
fetchMovie();
