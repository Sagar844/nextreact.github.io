import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { movies } from "@/types";
import { useEffect, useState } from "react";
import axios from "axios";
import { toBase64, shimmer, posturl } from "@/components/ProdutsCart";
import Image from "next/image";

// type trandingprops = {
//   data: movies;
// };



const API = "?api_key=3ac20e37c3b1bdd32dadec03d228864f";
const pid = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setdata] = useState<movies>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setloading] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const { pid } = router.query 
  console.log(pid);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(" https://api.themoviedb.org/3/movie/" + pid + API)
      .then((res) => {
        setdata(res.data);
        setloading(false);
      });
  }, [pid]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div className={styles.main}>
        <h1 style={{ color: "red" }}> this is tranding{data?.title} </h1>
        <Image className="imagesmovies"
         height={260}
          width={160}
          alt="ss"
          src={posturl(data.poster_path)}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
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
