document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    fetchMovieDetails(movieId);

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query !== '') {
            searchMovies(query)
                .then(data => {
                    displaySearchResults(data.results);
                });
            hideMovieDetails();
        } else {
            showMovieDetails();
        }
    });
});

function searchMovies(query) {
    const apiKey = 'ac38f472cab001a7ab4f1deeb141d8e6';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error:', error));
}

function displaySearchResults(movies) {
    const searchResultsContainer = document.getElementById('searchResults');

    if (searchResultsContainer) {
        searchResultsContainer.innerHTML = '';

        movies.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.release_date.split('-')[0]}</p>
            `;
            card.addEventListener('click', () => showMovieDetails(movie));
            searchResultsContainer.appendChild(card);
        });
    }
}

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

