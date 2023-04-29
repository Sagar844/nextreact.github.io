import ProdutsCart from "@/components/ProdutsCart";
import { movies } from "@/types";

type Produstprops = {
  movies: movies;
};

const ProdutsPage = ({ movies }: Produstprops) => {
  if (!movies) return <div>Loading...</div>;

  return (
    <>
      <h1 style={{color:'green'}}>Tranding</h1>
      <div className="grids">
        {movies.map((m) => {
          return (
            <div key={m.id}>
              <ProdutsCart movies={m} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProdutsPage;
