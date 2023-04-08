import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { movies } from "@/types";
import { useEffect, useState } from "react";
import axios from "axios";
import { toBase64, shimmer, posturl } from "@/components/ProdutsCart";
import Image from "next/image";
import { withcart } from "@/components/withprovider";
import { getmovidesdetail } from "@/https/api";
import { GetServerSideProps } from "next";

const API = "?api_key=3ac20e37c3b1bdd32dadec03d228864f";
const pid = ({ onaddtocart, data }: any) => {
  console.log(data);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
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

        <button
          onClick={() => onaddtocart(data)}
          style={{
            backgroundColor: "green",
            padding: "4px",
            border: "none",
            color: "white",
            cursor:'pointer'
          }}
        >
          + watchlist
        </button>
      </div>
    </>
  );
};

export const getServerSideProps = async (context: {
  params: any;
}) => {
  const { params } = context;
  const pid = params.pid;
  const response = await getmovidesdetail(pid);

  return {
    props: {
      data: response,
    },
  };
};

export default withcart(pid);
