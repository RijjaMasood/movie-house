import mongoClient from "./connect";

async function getCollection(collectionName) {
  const client = await mongoClient;
  const db = client.db();
  return db.collection(collectionName);
}

export async function getMovies() {
  const collection = await getCollection('movies');
  return collection.find().toArray();
}

export async function getGenres() {
  const collection = await getCollection('genres');
  return collection.find().toArray();
}

export async function getGenreById(id) {
  const collection = await getCollection('genres');
  return collection.findOne({ id });
}

export async function getMoviesByGenre(id) {
  const collection = await getCollection('movies');
  return collection.find({ genreId: id }).toArray();
}

export async function getDirectors() {
  const collection = await getCollection('directors');
  return collection.find().toArray();
}

export async function getDirectorByID(id) {
  const collection = await getCollection('directors');
  return collection.findOne({ id });
}

export async function getRawMovieByID(id) {
  const collection = await getCollection('movies');
  const movie = await collection.findOne({ id });
  
  if (!movie) return null;
  else return movie;
}

export async function getMovieByID(id) {
  const movie = await getRawMovieByID(id);
  if (!movie) return null
  
  const [genre, director] = await Promise.all([
    getGenreById(movie.genreId),
    getDirectorByID(movie.directorId)
  ]);

  return {
    ...movie,
    genre: genre?.name || 'Unspecified Genre',
    director: director?.name || 'Unknown Director'
  };
}

export async function getDirectorByMovieId(id) {
  const movie = await getMovieByID(id);
  return movie ? getDirectorByID(movie.directorId) : null;
}