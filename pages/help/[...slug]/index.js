import fs from 'fs';
import path from 'path';
import styles from '@/styles/SpecificHelpPage.module.css';
import GoBackButton from '@/src/components/GoBackButton';
import Head from 'next/head';

export default function SpecificHelpPage({ helpPage }) {
    return (
      <>
        <Head>
            <title>{helpPage.title} | Movie House</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.container}>
            <GoBackButton/>
            <h1 className={styles.pageTitle}>{helpPage.title}</h1>
            {helpPage.content.map((content, ind) => (
                <div key={ind} className={styles.section}>
                    <h3 className={styles.sectionTitle}>{content.section}</h3>
                    {content.value?.map(val => <p className={styles.sectionContent}>{val}</p>)}
                </div>
            ))}
        </div>
      </>
    );
}

export async function getStaticProps(context) {
    const { slug } = context.params;
    const filePath = path.join(process.cwd(), 'src', 'data', 'help.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const helpPages = JSON.parse(fileContent);
    const helpPage = helpPages.find(page =>
        JSON.stringify(page.slug) === JSON.stringify(slug)
    );

    if (!helpPage) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            helpPage
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: ['faqs'] } },
            { params: { slug: ['contact'] } },
            { params: { slug: ['privacy'] } }
        ],
        fallback: false
    };
}
