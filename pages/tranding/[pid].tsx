import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";

import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { getmoviedetails } from "@/https/api";
import { movieprops, movies } from "@/types";
import { Route } from "react-router-dom";

type trandingprops = {
  data: movies;
};

const pid = ({ data }: trandingprops) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  console.log(data)
  // const [data, setdata] = useState<movies>();

  // const { pid } = router.query && router.query
  // console.log(pid);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getmoviedetails(pid);
  //     setdata(res.data);
  //   })();
  // }, [pid]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title> PAGE</title>
      </Head>
      <div className={styles.main}>
        <h1 style={{ color: "red" }}> this is tranding </h1>
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
// export default pid;