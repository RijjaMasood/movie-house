import Link from "next/link";
import styles from "@/styles/Genres.module.css";
import GoBackButton from "@/src/components/GoBackButton";
import Head from "next/head";

export default function GenresPage({ genres }) {
  return (
    <>
      <Head>
        <title>Genres | Movie House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
}

export async function getServerSideProps() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/genres`);
  
  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const genres = await res.json();

  return {
    props: { genres },
  };
}