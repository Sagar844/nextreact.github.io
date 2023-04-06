import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { movieprops, movies } from "@/types";
import { useEffect, useState } from "react";
import axios from "axios";
import { toBase64, shimmer, posturl } from "@/components/ProdutsCart";
import Image from "next/image";

// type trandingprops = {
//   data: movies;
// };

export interface Moviewshowprops {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: number;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

const API = "?api_key=3ac20e37c3b1bdd32dadec03d228864f";
const pid = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setdata] = useState<Moviewshowprops>();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const { pid } = router.query;
  console.log(pid);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(" https://api.themoviedb.org/3/movie/" + pid + API)
      .then((res) => {
        setdata(res.data);
      });
  }, [pid]);

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className={styles.main}>
        <h1 style={{ color: "red" }}> this is tranding{data.title} </h1>
        <Image
          className="imagesmovies"
          height={260}
          width={160}
          alt="ss"
          src={posturl(data.poster_path)}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        ></Image>
      </div>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { id } = params;
//   const data = await getmoviedetails(id);
//   return {
//     props: {
//       data,
//     },
//   };
// };
export default pid;
