import GoBackButton from "@/src/components/GoBackButton";
import Loading from "@/src/components/Loading";
import { getDirectorByMovieId } from "@/src/helper/utility";
import styles from '@/styles/DirectorInformationPage.module.css';

export default function DirectorInformationPage({ director }) {
  if (!director) return <Loading />;

  return (
    <div className={styles.container}>
      <GoBackButton/>
      <h1 className={styles.title}>Director Information</h1>
      <div className={styles.directorInfo}>
        <h3 className={styles.name}>{director.name}</h3>
        <p className={styles.biography}>{director.biography}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const director = getDirectorByMovieId(id);

  return {
    props: { director },
  };
}
