import Loading from '@/src/components/Loading';
import useSWR from 'swr';
import styles from '@/styles/Directors.module.css';
import GoBackButton from '@/src/components/GoBackButton';

const fetcher = (url) => fetch(url).then(res => res.json()).then(res => JSON.parse(res.directors));

export default function DirectorsPage() {
  const { data, error } = useSWR('/api/directors', fetcher);
  if (error) return <div>Failed to load directors</div>;
  if (!data) return <Loading />;

  return (
    <div className={styles.container}>
      <GoBackButton/>
      <h1 className={styles.title}>Directors</h1>
      <div className={styles.directorsList}>
        {data.map((director) => (
          <div key={director.id} className={styles.directorCard}>
            <h2 className={styles.directorName}>{director.name}</h2>
            <p className={styles.directorBio}>{director.biography}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
