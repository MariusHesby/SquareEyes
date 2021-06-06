const movieDetailsContainer = document.querySelector(".film-rent-content");
// const loaderContainer = document.querySelector(".loaderContainer");
const title = document.querySelector("title");
const overview = document.querySelector(".film-content p");

// Querystring

const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=ad2579c072c6d25bd2c5bd5ecf060bd3";

// FUNCTION fetchMovie
async function fetchMovie() {
  try {
    const response = await fetch(url);
    const product = await response.json();

    movieDetailsContainer.innerHTML = "";

    //UPDATE details page title
    title.innerHTML = product.original_title + " | SquareEyes.com";

    const movieTitle = product.original_title;
    const movieImg = "https://image.tmdb.org/t/p/w500" + product.poster_path;
    const movieId = product.id;
    console.log(movieId);
    const overviewContent = product.overview;

    movieDetailsContainer.innerHTML += movieDetails(movieTitle, movieImg, movieId);
    overview.innerHTML += `
${overviewContent}
    `;
  } catch (error) {
    movieDetailsContainer.innerHTML = "";
    console.error(error);
    movieDetailsContainer.innerHTML = newError("Woops, something went wrong. Please call 404!", error);
  }
}
fetchMovie();
