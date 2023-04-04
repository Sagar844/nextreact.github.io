import { movies } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type movieprops = {
  movies: movies;
};

const posturl = (posterpath:string) => {
  return `https://image.tmdb.org/t/p/original${posterpath}`;

}

const ProdutsCart = ({ movies }: movieprops) => {
  return (
    <div>
      <Link href={'/tranding/'+ movies.id }>
        <h1>{movies.title}</h1>
        {/* <Image height={20} width={20} alt="" src={posturl(movies.poster_path)}></Image> */}

        <img style={{width:'100px'}} src={posturl(movies.poster_path)} alt="ss" />
      </Link>
    </div>
  );
};

export default ProdutsCart;
