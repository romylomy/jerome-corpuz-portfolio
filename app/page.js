import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectionDivider";
import Contact from "@/components/contact";
import { getDatabase } from '../lib/notion';
import styles from './index.module.css';
import Text from '../components/text';
import Link from 'next/link';




export const databaseId = process.env?.NOTION_DATABASE_ID ?? 'NOTION_DATABASE_ID';

async function getPosts() {
  const database = await getDatabase();

  return database;
}

export default async function Home() {
  const posts = await getPosts();
  
  return (
    <main className=" p-5 bg-gray-100 bg-opacity-30 backdrop-blur-sm font-Montserrat sm:px-30 md:px-10 lg:px-50 xl:px-60">
      
        <Intro/>
        <SectionDivider/>
        <Projects/>
        <SectionDivider/>
        <div>
          <main className={styles.container}>
            <header className={styles.header}>
              <h1>Next.js blog powered by Notion API</h1>
              <p>
              These are some articles creatted from academic assignement or from books I have been reading 
              </p>
            </header>

            <h2 className={styles.heading}>All Posts</h2>
            <ol className={styles.posts}>
              {posts.map((post) => {
                const date = new Date(post.last_edited_time).toLocaleString(
                  'en-US',
                  {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  },
                );
                const slug =post.properties?.Slug?.rich_text[0].text.content;
                return (
                  <li key={post.id} className={styles.post}>
                    <h3 className={styles.postTitle}>
                      <Link href={`/article/${slug}`}>
                      <Text  title={post.properties?.Title?.title} />
                      </Link>
                    </h3>

                    <p className={styles.postDescription}>{date}</p>
                    <Link href={`/article/${slug}`}>Read post →</Link>
                  </li>
                );
              })}
            </ol>
          </main>
       </div>
        <SectionDivider/>
        <Skills />
        <Contact/>
    
    </main>
  )
}
