const rentalContainer = document.querySelector(".popup");
// const loaderContainer = document.querySelector(".loaderContainer");
const title = document.querySelector("title");

// Querystring

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=ad2579c072c6d25bd2c5bd5ecf060bd3";

// FUNCTION fetchMovie
async function fetchMovie() {
  try {
    const response = await fetch(url);
    const product = await response.json();

    rentalContainer.innerHTML = "";

    //UPDATE details page title
    title.innerHTML = product.original_title + " | SquareEyes.com";

    const movieTitle = product.original_title;
    const movieId = product.id;
    console.log(movieId);

    rentalContainer.innerHTML += rentalDetails(movieTitle, movieId);
    const ok = document.querySelector(".btn-ok");
    const rent = document.querySelector(".rent");
    const rental = document.querySelector(".confirm-rental");
    const film = document.querySelector(".film-id");

    ok.addEventListener("click", function () {
      ok.style.border = "5px solid var(--green)";
      rent.innerHTML = "You can now start watching";
      rental.style.color = "var(--green)";
      rental.innerHTML = "CONFIRMED";
    });
  } catch (error) {
    rentalContainer.innerHTML = "";
    console.error(error);
    rentalContainer.innerHTML = newError("Woops, something went wrong. Please call 404!", error);
  }
}
fetchMovie();
