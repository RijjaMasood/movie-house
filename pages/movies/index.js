import { getMovies } from "@/src/helper/utility";
import { useRouter } from "next/router";
import MovieList from "@/src/components/MovieList";
import styles from "@/styles/Movies.module.css"; 
import GoBackButton from "@/src/components/GoBackButton";

export default function MoviesPage({ movies }) {
  
  return (
    <div className={styles.container}>
      <GoBackButton/>
      <h1 className={styles.heading}>All Movies</h1>
      <MovieList movies={movies} baseURL={'/movies/'}/>
    </div>
  );
}

export async function getStaticProps() {
  const Movies = getMovies();
  if (!Movies)
    return {
      notFound: true,
    };

  return {
    props: {
      movies: Movies,
    },
    revalidate: 86400,
  };
}
