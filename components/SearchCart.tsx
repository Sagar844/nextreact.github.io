import { movies } from "@/types";
import React, { FC } from "react";

type SearchCartprops = {
  movies: movies;
};

const SearchCart: FC<SearchCartprops> = ({ movies }) => {
  return (
    <div>
      <h1>{movies.title}</h1>
    </div>
  );
};

export default SearchCart;
