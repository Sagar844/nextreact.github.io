import { withcart } from "@/components/withprovider";
import { movies } from "@/types";
import React from "react";
import Image from "next/image";
import { posturl } from "@/components/ProdutsCart";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { NextPage } from "next";

type cartprops = {
  cart: movies;
  handleReamove:any

};

const CartPgae:NextPage<cartprops> = ({ cart, handleReamove } ) => {
  return (
    <div>
      <Head>
        <title>Cartpage</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}></div>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <h1 style={{ color: "black" }}>{item.title}</h1>
              <Image
                src={posturl(item.poster_path)}
                height={200}
                width={200}
                alt="0"
              />
              )
              <button
                onClick={() => handleReamove(item.id)}
                style={{
                  backgroundColor: "red",
                  padding: "10px",
                  border: "none",
                }}
              >
                remove movie
              </button>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default withcart(CartPgae);
