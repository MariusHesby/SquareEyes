const filmsRecently = document.querySelector(".recently");
const filmsAllFilms = document.querySelector(".all-films");

const url = "https://api.themoviedb.org/3/discover/movie?api_key=ad2579c072c6d25bd2c5bd5ecf060bd3&with_genres=27";

async function getMovies() {
  try {
    const response = await fetch(url);
    const product = await response.json();
    const results = product.results;
    console.log(results);
    filmsRecently.innerHTML = "";
    filmsAllFilms.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      if (results[i].id === 599281 || results[i].id === 607383) {
        filmsRecently.innerHTML += `

                                <div>
                                  <a href="signedIn_film_sample_byAuthor.html?id=${results[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}" alt="${results[i].original_title}" class="film-style">
                                  </a>
                                  <p>
                                    <a href="signedIn_film_sample_byAuthor.html?id=${results[i].id}">${results[i].name}</a>
                                  </p>
                                  <p><i class="fas fa-coins"></i><span class="currency">35 NOK</span></p>
                                  <p>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                  </p>
                                </div>
                              `;
      }
    }
    for (let i = 0; i < results.length; i++) {
      if (i === 8) {
        break;
      }
      filmsAllFilms.innerHTML += `

                                <div>
                                  <a href="signedIn_film_sample_byAuthor.html?id=${results[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}" alt="${results[i].original_title}" class="film-style">
                                  </a>
                                  <p>
                                    <a href="signedIn_film_sample_byAuthor.html?id=${results[i].id}">${results[i].original_title}</a>
                                  </p>
                                  <p><i class="fas fa-coins"></i><span class="currency">35 NOK</span></p>
                                  <p>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                  </p>
                                </div>
                              `;
    }
  } catch (error) {
    console.log(error);
  }
}

getMovies();
