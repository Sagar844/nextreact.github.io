import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ProdutsPage from "./ProdutsPage";
import { movies } from "@/types";
import { GetServerSideProps } from "next";
import { getmovies } from "@/https/api";

type homeprops = {
  data: movies;
};

const Home = ({ data }: homeprops) => {
  return (
    <>
      <Head>
        <title>Print E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/"></meta>


      </Head>
      <main className={styles.main}>
        <div className={styles.description}></div>

        <ProdutsPage movies={data} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getmovies();
  return { props: { data } };
};
export default Home;
