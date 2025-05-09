import { useRouter } from 'next/router';
import styles from './GoBackButton.module.css';  // Ensure the path to the CSS module is correct

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button className={styles.goBackButton} onClick={() => router.back()}>
      Go Back
    </button>
  );
}
