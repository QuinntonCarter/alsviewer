import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Welcome Legends </title>
        <meta name="description" content="Account stats viewer for cross platform title, Apex Legends" />
        <link rel="icon" href="/apexIconTransparentRed.jpeg"/>
        {/* <link
          prefetch
          rel="preload"
          href="../fonts/Apex_Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />        
        <link
          prefetch
          rel="preload"
          href="../fonts/apex-mk2.regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        /> */}
      </Head>
    </div>
  )
}