export const fetchMovies = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        headers : {
            Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWExYWI0ZThkZjQ4MzUxOTkwNzdjMjYxYmRmZTVhYyIsInN1YiI6IjY1ZWM2ZmU2YjdkMzUyMDE3YmU2MzE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w34VLf7X1pf-GOqVKol1aPRoJ188RFnS0FOcnskwOh0"
        }
    });

    return res.json();
}

export const fetchTvShows = async () => {
    const res = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", {
        headers : {
            Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWExYWI0ZThkZjQ4MzUxOTkwNzdjMjYxYmRmZTVhYyIsInN1YiI6IjY1ZWM2ZmU2YjdkMzUyMDE3YmU2MzE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w34VLf7X1pf-GOqVKol1aPRoJ188RFnS0FOcnskwOh0"
        }
    });

    return res.json();
}