const rentalDetails = (movieTitle, movieId) => {
  return `  

        <p class="rent">You are about to rent</p>
        <a class="film-id" href="signedIn_film_sample_byAuthor.html?id=${movieId}">${movieTitle}</a>
        <p class="bold big confirm-rental">Confirm</p>

        <p class="btn-ok big">OK</p>
        <p class="close-window">
          <a class="rent-close" href="signedIn_film_sample_byAuthor.html?id=${movieId}"><i class="far fa-times-circle"></i>Close this window</a>
        </p>`;
};

//  <div class="purchase">
//    <a href="signedIn_twoClickRent.html" class="price">
//      {" "}
//      <i class="fas fa-sign-in-alt"></i> 3,90 USD{" "}
//    </a>
//  </div>;
