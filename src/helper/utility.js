import fs from 'fs';
import path from 'path';

function readData() {
  const filePath = path.join(process.cwd(), 'src/data/movies.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export function getMovies() {
  const data = readData();
  return data.movies;
}

export function getTrendingMovies() {
  const data = readData();
  return data.movies.filter(movie => movie.rating >= 8.5);
}

export function getGenres() {
  const data = readData();
  return data.genres;
}

export function getGenreById(id){
  const genres = getGenres()
  return genres.find(genre => genre.id === id)
}

export function getMoviesByGenre(id){
  const movies = getMovies()
  return movies.filter(movie => movie.genreId === id)
}

export function getDirectors() {
  const data = readData();
  return data.directors;
}

export function getDirectorByID(id) {
  const directors = getDirectors()
  return directors.find(director => director.id === id)
}

export function getRawMovieByID(id) {
  const movies = getMovies()
  const movie = movies.find(movie => movie.id === id)
  return movie
}

export function getMovieByID(id) {
  const movie = getRawMovieByID(id)
  const genre = getGenreById(movie.genreId).name
  const director = getDirectorByID(movie.directorId).name
  return {...movie, genre, director}
}

export function getDirectorByMovieId(id) {
  const movie = getRawMovieByID(id)
  return getDirectorByID(movie.directorId)

}