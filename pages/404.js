import { useRouter } from "next/router";
import styles from "@/styles/404.module.css";
import Head from "next/head";

export default function Custom404() {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.message}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <button className={styles.button} onClick={goHome}>
          Go Home
        </button>
      </div>
    </>
  );
}
