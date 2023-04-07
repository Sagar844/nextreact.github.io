import { withcart } from "@/components/withprovider";
import { movies } from "@/types";
import React, { useState } from "react";
import Image from "next/image";
import { posturl } from "@/components/ProdutsCart";
import styles from "../styles/Home.module.css";
import Head from "next/head";

type cartprops = {
  cart: movies;
};

const CartPgae = ({ cart }: cartprops) => {
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
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default withcart(CartPgae);
