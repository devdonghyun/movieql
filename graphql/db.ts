
let movies = [
    {
        id: 1,
        name: "Logan",
        score: 21
    },
    {
        id: 2,
        name: "The Dark Knight",
        score: 22
    }

]

export const getMovies = () => movies;


export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0]
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}