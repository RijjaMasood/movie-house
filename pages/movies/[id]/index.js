import Loading from "@/src/components/Loading"
import { getMovieByID, getTrendingMovies } from "@/src/helper/utility"
import Link from "next/link"
import styles from "@/styles/MovieDetail.module.css"
import GoBackButton from "@/src/components/GoBackButton"

export default function MovieDetailPage({movie}) {
    if (!movie)
        return <Loading/>
    
    return (
        <div className={styles.container}>
            <GoBackButton/>
            <div className={styles.movieDetail}>
            <h1 className={styles.title}>{movie.title}</h1>
            <p className={styles.releaseYear}>Release Year: {movie.releaseYear}</p>
            <p className={styles.rating}>Rating: {movie.rating}</p>
            <p className={styles.rating}>Genre: {movie.genre}</p>
            <p className={styles.rating}>Director: <Link href={"/movies/" + movie.id + "/director"}>{movie.director}</Link></p>
            <p className={styles.description}>{movie.description}</p>
            </div>
        </div>
    )
}

//SSG for trending movies
//SSR for the rest of the movies

export async function getStaticProps(context){
    const id = context.params.id
    const movie = getMovieByID(id)
    if (!movie)
        return {
        notFound: true
    }
    return {
        props: {
            movie
        },
    }
}

export async function getStaticPaths(){
    const trending_movies = getTrendingMovies()
    const paths = trending_movies.reduce((paths, movie)=>{
        paths.push({params: {id:movie.id}})
        return paths
    }, [])
    return {
        paths : paths,
        fallback: true
    }
}