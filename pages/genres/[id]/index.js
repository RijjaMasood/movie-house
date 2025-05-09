import MovieList from "@/src/components/MovieList";
import styles from "@/styles/FilteredMovies.module.css";
import GoBackButton from "@/src/components/GoBackButton";
import Head from "next/head";

export default function FilteredMoviesPage({ movies, genreName }) {
  
  return (
    <>
      <Head>
        <title>{genreName} | Movie House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <GoBackButton/>
        <h1 className={styles.heading}>Genre: {genreName}</h1>
        <MovieList movies={movies} baseURL={'/movies/'}/>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const genreId = context.params.id;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const [moviesRes, genresRes] = await Promise.all([
    fetch(`${baseUrl}/api/genres/${genreId}/movie`),
    fetch(`${baseUrl}/api/genres`)
  ]);

  if (!moviesRes.ok || !genresRes.ok) {
    return { notFound: true };
  }

  const movies = await moviesRes.json();
  const genres = await genresRes.json();
  const genre = genres.find(g => g.id === genreId);

  if (!genre) {
    return { notFound: true };
  }

  return {
    props: {
      movies,
      genreName: genre.name,
    },
  };
}