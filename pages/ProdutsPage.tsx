import ProdutsCart from "@/components/ProdutsCart";
import { movies } from "@/types";

type Produstprops = {
  movies: movies;
};

const ProdutsPage = ({ movies }: Produstprops) => {
  if(!movies) return <div>Loading...</div>
    

  return (
    <>
      <div>
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
