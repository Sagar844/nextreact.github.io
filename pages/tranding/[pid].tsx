import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { toBase64, shimmer, posturl } from "@/components/ProdutsCart";
import Image from "next/image";
import { withcart } from "@/components/withprovider";
import { getmovidesdetail } from "@/https/api";
import { movies } from "@/types";
import { NextPage } from "next";


type pidprops = {
  data: movies
  onaddtocart: (data: movies) => void

}

const pid: NextPage<pidprops> = ({ onaddtocart, data }) => {
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
        <meta property="og:image" content={posturl(data.backdrop_path)}></meta>

        
      </Head>
      <div className={styles.main}>
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
        <h1 style={{ color: "red" }}> this is tranding{data.title} </h1>


        <button
          onClick={() => onaddtocart(data)}
          style={{
            backgroundColor: "green",
            padding: "4px",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          + watchlist
        </button>
      </div>
    </>
  );
};

export const getServerSideProps = async (context: { params: any }) => {
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
