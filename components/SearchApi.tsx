import { getsearchapi } from "@/https/api";
import { movies } from "@/types";
import React, { FC, useEffect, useState } from "react";
import SearchCart from "./SearchCart";

type SearchApiprops = {};

const SearchApi: FC<SearchApiprops> = () => {
  const [movies, setmovies] = useState<movies[]>([]);
  const [query, setquery] = useState<string>("");
  console.log(movies);
  console.log(query);

  useEffect(() => {
    (async () => {
      try {
        const res = await getsearchapi(query);
        setmovies(res.data.results);
      } catch (error) {}
    })();
  }, [query]);

  return (
    <div className="whitecart">
      <div className="relativs">
        <div className="searchinput">
          <input
            value={query}
            onChange={(e) => setquery(e.target.value)}
            type="text"
            name=""
            id=""
          />

          {movies.slice(10).map((items) => {
            return (
              <div key={items.id}>
                <SearchCart movies={items} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchApi;
