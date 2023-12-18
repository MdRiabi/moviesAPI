const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');



async function loadMovies(searchTerm){
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`;
    const res = await fetch(`={URL}`);
    const data = await res.json();
    if (data.Response == "true") {
        displayMovieList(data.Search);
    }

}


function displayMovieList(movies){
    searchList.innerHTML = "";

    for (let idx = 0; idx < movies.length; idx++) {
        
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].imdbID;
        movieListItem.classList.add('search-list-item');

        if (movies[idx].Poster !="N/A") {
            moviePoster = movies[idx].Poster;
        }else{
            moviePoster = 'images/no_image.png';
        }

        movieListItem = `
        
                   <div class = "search-item-thumbnail">
                            <img src = "${moviePoster}">
                   </div>
                   <div class = "search-item-info">
                        <h3>${movies[idx].Title}</h3>
                        <p>${movies[idx].Year}</p>
                   </div>
        
        `;
        searchList.appendChild(movieListItem);
    }

    loadMovies();
}


function loadMovieDetails(){
    
}