import { getGenres } from "@/src/helper/utility";
import Link from "next/link";
import styles from "@/styles/Genres.module.css";
import GoBackButton from "@/src/components/GoBackButton";

export default function GenresPage({ genres }) {
  return (
    <div className={styles.container}>
      <GoBackButton/>
      <h1 className={styles.heading}>Browse by Genre</h1>
      <ul className={styles.genreList}>
        {genres?.map((genre) => (
          <li key={genre.id} className={styles.genreItem}>
            <Link href={`/genres/${genre.id}`} className={styles.genreLink}>
              {genre.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
    const genres = getGenres();
    return {
      props: { genres },
    };
  }
  