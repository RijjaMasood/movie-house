import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <div className={styles.card} id={movie.id}>
      <div className={styles.content}>
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.meta}>
          <span><strong>Year:</strong> {movie.releaseYear}</span>
          <span><strong>Rating:</strong> {movie.rating}</span>
        </p>
        <p className={styles.description}>{movie.description}</p>
      </div>
    </div>
  );
}
