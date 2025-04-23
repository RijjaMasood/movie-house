import Link from "next/link";
import path from "path";
import fs from "fs";
import styles from '@/styles/HelpPage.module.css';
import GoBackButton from "@/src/components/GoBackButton";

export default function HelpPage({ helpPages }) {
  return (
    <div className={styles.container}>
      <GoBackButton/>
      <h1 className={styles.title}>Help Center</h1>
      <ul className={styles.pageList}>
        {helpPages.map((page, index) => (
          <li key={index} className={styles.pageItem}>
            <Link href={`/help/${page.slug}`} className={styles.pageLink}>
                <span className={styles.pageText}>{page.title}</span>
                <span className={styles.arrow}>🢒</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src", "data", "help.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const helpPages = JSON.parse(fileContent);
  if (!helpPages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      helpPages,
    },
  };
}
