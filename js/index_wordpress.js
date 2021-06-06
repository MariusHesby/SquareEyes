const movieContainer = document.querySelector(".films");

const url = "https://headless.superdupersiden.com/wp-json/wc/store/products/";

async function getMovies() {
  try {
    const response = await fetch(url);
    const product = await response.json();

    movieContainer.innerHTML = "";

    for (let i = 0; i < product.length; i++) {
      if (i === 3) {
        break;
      }

      movieContainer.innerHTML += `

                                <div>
                                  <a href="film_sample_byAuthor.html?id=${product[i].id}">
                                    <img src="${product[i].images[0].src}" alt="${product[i].name}" class="film-style">
                                  </a>
                                  <p>
                                    <a href="film_sample_byAuthor.html?id=${product[i].id}">${product[i].name}</a>
                                  </p>
                                  <p><i class="fas fa-coins"></i><span class="currency">${product[i].prices.price} ${product[i].prices.currency_code}</span></p>
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
