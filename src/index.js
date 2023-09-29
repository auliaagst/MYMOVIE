import { fetchMovieDetails, displayMovieDetails, hideMovieDetails, showMovieDetails } from './displaymovie.js';
import { searchMovies, displaySearchResults } from './searchmovie.js';

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
