const movieDetails = (movieTitle, movieImg, moviePrice, movieCurrency) => {
  return `  

          <h1>${movieTitle}</h1>
          <div class="film">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              (4305)
            </div>

            <img src="${movieImg}" alt="${movieTitle}" />

            <div class="purchase">
              <a href="#0" class="price"> <i class="fas fa-sign-in-alt"></i>${moviePrice} ${movieCurrency}</a>
            </div>

            <div class="film-abbr">
              <span class="film-btn"><abbr title="No children under 17 admitted">NC 17</abbr></span>
              <span class="film-btn"><abbr title="1 hour and 10 min">1h 10m</abbr></span>
              <span class="film-btn">Horror</span>
            </div>
          </div>`;
};
