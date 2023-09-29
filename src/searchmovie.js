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

export { searchMovies, displaySearchResults };
