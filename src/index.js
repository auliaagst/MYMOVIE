// import './styles.css'
import { fetchMovieDetails, displayMovieDetails, hideMovieDetails, showMovieDetails, displaySearchResults} from './detail.js';
document.addEventListener('DOMContentLoaded', () => {
    fetchPopularMovies();
    fetchLatestMovies();

    function hidePopularAndLatest() {
        document.getElementById('popularMovies').style.display = 'none';
        document.getElementById('latestMovies').style.display = 'none';
        document.getElementById('searchResults').style.display = 'flex';
    }

    function displayPopularAndLatest() {
        document.getElementById('popularMovies').style.display = 'flex';
        document.getElementById('latestMovies').style.display = 'flex';
        document.getElementById('searchResults').style.display = 'none';
    }

    document.getElementById('search').addEventListener('input', function() {
        const query = this.value.trim();

        if (query !== '') {
            fetchMovies(query);
            hidePopularAndLatest();
        } else {
            displayPopularAndLatest();
        }
    });
});

function fetchPopularMovies() {
    const apiKey = 'ac38f472cab001a7ab4f1deeb141d8e6';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results, 'popularMovies');
        })
        .catch(error => console.error('Error:', error));
}

function fetchLatestMovies() {
    const apiKey = 'ac38f472cab001a7ab4f1deeb141d8e6';
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results, 'latestMovies');
        })
        .catch(error => console.error('Error:', error));
}

function fetchMovies(query) {
    const apiKey = 'ac38f472cab001a7ab4f1deeb141d8e6'; // Ganti dengan kunci API Anda
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results, 'searchResults');
        })
        .catch(error => console.error('Error:', error));
}

function displayMovies(movies, containerId) {
    const movieContainer = document.getElementById(containerId);

    if (movieContainer) {
        movieContainer.innerHTML = '';

        movies.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.release_date.split('-')[0]}</p>
            `;
            card.addEventListener('click', () => showMovieDetails(movie));
            movieContainer.appendChild(card);
        });
    }
}

// function showMovieDetails(movie) {
//     const { id } = movie;
//     window.location.href = `detail.html?id=${id}`;
// }

fetchMovieDetails();
displayMovieDetails();
hideMovieDetails();
showMovieDetails();
displaySearchResults();

