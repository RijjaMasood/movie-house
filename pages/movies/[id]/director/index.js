import GoBackButton from "@/src/components/GoBackButton";
import Loading from "@/src/components/Loading";
import MovieCard from "@/src/components/MovieCard";
import styles from "@/styles/DirectorInformationPage.module.css";
import Head from "next/head";
import Link from "next/link";

export default function DirectorInformationPage({ director }) {
  if (!director) return <Loading />;

  return (
    <>
      <Head>
        <title>{director.name} | Movie House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <GoBackButton />
        <h1 className={styles.title}>Director Information</h1>
        <div className={styles.directorInfo}>
          <h3 className={styles.name}>{director.name}</h3>
          <p className={styles.biography}>{director.biography}</p>
        </div>
        <h1 className={styles.title} style={{marginTop:"20px"}}>Movies Directed</h1>
        <div>
          {director.movies?.map((movie) => {
            return (
              <Link
                key={movie.id}
                href={"/movies/" + movie.id}
                className={styles.gridItem}
              >
                <div className={styles.details}>
                  <h2>{movie.title}</h2>
                  <p>
                    <span>
                      <strong>Year:</strong> {movie.releaseYear}
                    </span>
                    <span>
                      <strong>Rating:</strong> {movie.rating}
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/directors/${id}`);

  if (!res.ok) {
    return { notFound: true };
  }

  const director = await res.json();

  return {
    props: { director },
  };
}
