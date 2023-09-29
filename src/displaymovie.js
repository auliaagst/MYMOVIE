function fetchMovieDetails(id) {
    const apiKey = 'ac38f472cab001a7ab4f1deeb141d8e6';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error:', error));
}

function displayMovieDetails(movie) {
    const moviePoster = document.getElementById('moviePoster');
    const movieTitle = document.getElementById('movieTitle');
    const movieYear = document.getElementById('movieYear');
    const movieRating = document.getElementById('movieRating');
    const movieDescription = document.getElementById('movieDescription');

    if (moviePoster && movieTitle && movieYear && movieRating && movieDescription) {
        moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieTitle.innerHTML = movie.title;
        movieYear.innerHTML = `Tahun: ${movie.release_date.split('-')[0]}`;
        movieRating.innerHTML = `Rating: ${movie.vote_average}`;
        movieDescription.innerHTML = movie.overview;
    }
}

function hideMovieDetails() {
    const detailContainer = document.querySelector('.detail-container');
    detailContainer.style.display = 'none';
}

function showMovieDetails() {
    const detailContainer = document.querySelector('.detail-container');
    detailContainer.style.display = 'block'
}

export { fetchMovieDetails, displayMovieDetails, hideMovieDetails, showMovieDetails };
