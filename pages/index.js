import { useRouter } from "next/router";
import { getTrendingMovies } from "@/src/helper/utility";
import styles from "@/styles/Home.module.css";
import MovieList from "@/src/components/MovieList";

export default function Home({ movies }) {
  const router = useRouter();

  const gotoGenresPage = () => {
    router.push("/genres");
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Trending Movies</h1>

      <MovieList movies={movies} baseURL={'/movies/'}/>
      <div className={styles.buttonContainer}>
        <button onClick={gotoGenresPage} className={styles.genreButton}>
          Browse Genres
        </button>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const trendingMovies = getTrendingMovies();
  return {
    props: {
      movies: trendingMovies,
    },
    revalidate: 86400,
  };
}
