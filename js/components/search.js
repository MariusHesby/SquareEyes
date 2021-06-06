const charactersList = document.querySelector(".films");
const searchBar = document.querySelector("#theInput");
const searchResults = document.querySelector(".search-results");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  searchResults.style.display = "block";
  if (e.target.value == 0) {
    searchResults.style.display = "none";
  }
  const searchString = e.target.value.toLowerCase();
  const filteredCharacters = hpCharacters.filter((character) => {
    return character.original_title.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=ad2579c072c6d25bd2c5bd5ecf060bd3&with_genres=27");
    product = await res.json();
    hpCharacters = product.results;
    displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `

                                <div>
                                  <a href="signedIn_film_sample_byAuthor.html?id=${character.id}">
                                    <img src="https://image.tmdb.org/t/p/w500${character.poster_path}" alt="${character.original_title}" class="film-style">
                                  </a>
                                  <p>
                                    <a href="signedIn_film_sample_byAuthor.html?id=${character.id}">${character.original_title}</a>
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
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

loadCharacters();
