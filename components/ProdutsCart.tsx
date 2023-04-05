import { movies } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type movieprops = {
  movies: movies;
};

const posturl = (posterpath: string) => {
  return `https://image.tmdb.org/t/p/original${posterpath}`;
};

const ProdutsCart = ({ movies }: movieprops) => {
  return (
    <div className="fonts">
      <Link href={"/tranding/" + movies.id}>
        <Image className="imagesmovies"
          height={260}
          width={160}
          alt="ss"
          src={posturl(movies.poster_path)}
        ></Image>
        <h1>{movies.title}</h1>
      </Link>
    </div>
  );
};

export default ProdutsCart;
