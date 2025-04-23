import Link from "next/link"
import MovieCard from "./MovieCard"
import styles from './MovieList.module.css'

export default function MovieList({movies, baseURL}) {
    
    return (
        <section className={styles.grid}>
        {
            movies?.map((movie) => { return (
                <Link key={movie.id} href={ baseURL + movie.id} className={styles.gridItem}>
                    <MovieCard movie={movie} />
                </Link>
            )})
        }
        </section>
        )
}